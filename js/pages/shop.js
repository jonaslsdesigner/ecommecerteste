document.addEventListener('DOMContentLoaded', () => {
  Toast.init()

  let filtered = [...MOCK_PRODUCTS]

  function renderStars(rating) {
    return Array.from({ length: 5 }, (_, i) =>
      `<svg class="${i < Math.round(rating) ? 'filled' : ''}" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
    ).join('')
  }

  function renderCard(p) {
    const salePct = p.comparePrice ? Math.round((1 - p.price / p.comparePrice) * 100) : 0
    return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-card__image-wrap">
        <a href="product.html?id=${p.id}"><img src="${p.image}" alt="${p.name}" loading="lazy"></a>
        <div class="product-card__badges">
          ${p.isNew ? '<span class="badge badge--new">Novo</span>' : ''}
          ${p.isSale ? `<span class="badge badge--sale">-${salePct}%</span>` : ''}
        </div>
        <div class="product-card__actions">
          <button class="product-card__action-btn js-wishlist${Wishlist.has(p.id) ? ' is-wishlisted' : ''}" data-id="${p.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        <button class="product-card__quickadd js-addcart" data-id="${p.id}">Adicionar ao Carrinho</button>
      </div>
      <div class="product-card__body">
        <p class="product-card__category">${p.category}</p>
        <a href="product.html?id=${p.id}" class="product-card__name">${p.name}</a>
        <div class="product-card__rating"><div class="stars">${renderStars(p.rating)}</div><span class="product-card__rating-count">(${p.reviews})</span></div>
        <div class="product-card__pricing">
          <span class="product-card__price">${Formatter.price(p.price)}</span>
          ${p.comparePrice ? `<span class="product-card__compare">${Formatter.price(p.comparePrice)}</span>` : ''}
        </div>
      </div>
    </article>`
  }

  function render() {
    const grid  = document.getElementById('shop-grid')
    const count = document.getElementById('shop-count')
    if (grid)  grid.innerHTML = filtered.map(renderCard).join('')
    if (count) count.textContent = `Exibindo ${filtered.length} de ${MOCK_PRODUCTS.length} produtos`
    bindEvents()
  }

  function bindEvents() {
    document.querySelectorAll('.js-addcart').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault()
        const p = MOCK_PRODUCTS.find(x => x.id === parseInt(btn.dataset.id))
        if (!p) return
        Cart.add(p)
        Header.updateCart()
        Toast.show('Adicionado ao carrinho!', p.name, 'success')
      })
    })
    document.querySelectorAll('.js-wishlist').forEach(btn => {
      btn.addEventListener('click', () => {
        const added = Wishlist.toggle(parseInt(btn.dataset.id))
        btn.classList.toggle('is-wishlisted', added)
        Toast.show(added ? 'Adicionado aos favoritos' : 'Removido dos favoritos', '', 'info')
      })
    })
  }

  // Sort
  document.getElementById('shop-sort')?.addEventListener('change', e => {
    const val = e.target.value
    if (val === 'price-asc')  filtered.sort((a, b) => a.price - b.price)
    if (val === 'price-desc') filtered.sort((a, b) => b.price - a.price)
    if (val === 'rating')     filtered.sort((a, b) => b.rating - a.rating)
    if (val === 'newest')     filtered = MOCK_PRODUCTS.filter(p => p.isNew)
    render()
  })

  // Category filter
  document.querySelectorAll('.filter-option input[data-cat]').forEach(chk => {
    chk.addEventListener('change', () => {
      const selected = Array.from(document.querySelectorAll('.filter-option input[data-cat]:checked')).map(i => i.dataset.cat)
      filtered = selected.length ? MOCK_PRODUCTS.filter(p => selected.includes(p.category)) : [...MOCK_PRODUCTS]
      render()
    })
  })

  render()
})
