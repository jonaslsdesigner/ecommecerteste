document.addEventListener('DOMContentLoaded', () => {
  Toast.init()
  const items = Cart.get()

  // Render order summary
  const orderItems = document.getElementById('order-items')
  if (orderItems) {
    orderItems.innerHTML = items.map(item => `
    <div class="order-item">
      <div class="order-item__image-wrap">
        <img class="order-item__image" src="${item.image}" alt="${item.name}">
        <span class="order-item__qty-badge">${item.qty}</span>
      </div>
      <div class="order-item__details">
        <p class="order-item__name">${item.name}</p>
        <p class="order-item__variant">Tamanho: ${item.size}</p>
      </div>
      <span class="order-item__price">${Formatter.price(item.price * item.qty)}</span>
    </div>`).join('')
  }
  const subtotal = Cart.total()
  const shipping = subtotal > 100 ? 0 : 9.99
  document.getElementById('order-subtotal')?.textContent && (document.getElementById('order-subtotal').textContent = Formatter.price(subtotal))
  document.getElementById('order-shipping')?.textContent && (document.getElementById('order-shipping').textContent = shipping === 0 ? 'Grátis' : Formatter.price(shipping))
  document.getElementById('order-total')?.textContent && (document.getElementById('order-total').textContent = Formatter.price(subtotal + shipping))

  // Payment method toggle
  document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('is-selected'))
      method.classList.add('is-selected')
      method.querySelector('input')?.click()
    })
  })

  // Place order (mock)
  document.getElementById('place-order')?.addEventListener('click', e => {
    e.preventDefault()
    Toast.show('Pedido realizado!', 'Obrigado pela sua compra.', 'success')
    setTimeout(() => { Cart.clear(); location.href = 'index.html' }, 2000)
  })
})
