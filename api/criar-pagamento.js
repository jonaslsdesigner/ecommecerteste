export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const { items, payer, coupon } = req.body
    let total = items.reduce((sum, item) => sum + (item.unit_price * item.quantity), 0)
    if (coupon) {
      const couponRes = await fetch(`${process.env.SUPABASE_URL}/rest/v1/coupons?code=eq.${coupon}&active=eq.true`, {
        headers: {
          'apikey': process.env.SUPABASE_PUBLISHABLE_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_SECRET_KEY}`
        }
      })
      const coupons = await couponRes.json()
      if (coupons.length > 0) {
        const c = coupons[0]
        const discount = c.discount_type === 'percent'
          ? total * (c.discount_value / 100)
          : c.discount_value
        total = Math.max(total - discount, 1)
      }
    }
    const mpRes = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MP_ACCESS_TOKEN}`
      },
      body: JSON.stringify({
        items: items.map(item => ({
          title: item.title,
          quantity: item.quantity,
          unit_price: parseFloat((item.unit_price).toFixed(2)),
          currency_id: 'BRL'
        })),
        payer: { name: payer.name, email: payer.email },
        back_urls: {
          success: 'https://ecommecerteste.vercel.app/checkout.html?status=success',
          failure: 'https://ecommecerteste.vercel.app/checkout.html?status=failure',
          pending: 'https://ecommecerteste.vercel.app/checkout.html?status=pending'
        },
        auto_return: 'approved',
        statement_descriptor: 'ECOMMECE',
        external_reference: `order_${Date.now()}`
      })
    })
    const preference = await mpRes.json()
    if (!preference.id) throw new Error('Erro: ' + JSON.stringify(preference))
    return res.status(200).json({
      preference_id: preference.id,
      init_point: preference.init_point,
      sandbox_init_point: preference.sandbox_init_point
    })
  } catch (error) {
    console.error('Erro:', error)
    return res.status(500).json({ error: error.message })
  }
}