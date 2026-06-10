/**
 * CMS Storage — camada de dados do site.
 * Lê do localStorage primeiro; cai no mock se ainda não houver dados salvos.
 * Todas as páginas públicas e o admin usam este módulo como única fonte de verdade.
 */
const CMS = {
  /* ── Produtos ─────────────────────────────────────────── */
  getProducts() {
    const raw = localStorage.getItem('cms_products')
    if (raw) return JSON.parse(raw)
    // Inicializa o localStorage com os dados do mock na primeira vez
    const base = typeof MOCK_PRODUCTS !== 'undefined' ? MOCK_PRODUCTS : []
    localStorage.setItem('cms_products', JSON.stringify(base))
    return base
  },
  saveProducts(arr) {
    localStorage.setItem('cms_products', JSON.stringify(arr))
  },
  deleteProduct(id) {
    const arr = this.getProducts().filter(p => p.id !== id)
    this.saveProducts(arr)
  },
  upsertProduct(product) {
    const arr = this.getProducts()
    const idx = arr.findIndex(p => p.id === product.id)
    if (idx >= 0) arr[idx] = product
    else arr.unshift({ ...product, id: this._newId(arr) })
    this.saveProducts(arr)
  },

  /* ── Blog ─────────────────────────────────────────────── */
  getBlogPosts() {
    const raw = localStorage.getItem('cms_blog_posts')
    if (raw) return JSON.parse(raw)
    const base = typeof MOCK_BLOG_POSTS !== 'undefined' ? MOCK_BLOG_POSTS : []
    localStorage.setItem('cms_blog_posts', JSON.stringify(base))
    return base
  },
  saveBlogPosts(arr) {
    localStorage.setItem('cms_blog_posts', JSON.stringify(arr))
  },
  deletePost(id) {
    const arr = this.getBlogPosts().filter(p => p.id !== id)
    this.saveBlogPosts(arr)
  },
  upsertPost(post) {
    const arr = this.getBlogPosts()
    const idx = arr.findIndex(p => p.id === post.id)
    if (idx >= 0) arr[idx] = post
    else arr.unshift({ ...post, id: this._newId(arr) })
    this.saveBlogPosts(arr)
  },

  /* ── Loja Física ──────────────────────────────────────── */
  getLojaFisica() {
    const raw = localStorage.getItem('cms_loja_fisica')
    if (raw) return JSON.parse(raw)
    return {
      about:    'Somos uma loja de moda feminina com foco em estilo, qualidade e personalidade. Venha nos visitar!',
      address:  'Rua das Flores, 123 — Centro, Sua Cidade — SP',
      hours:    'Seg a Sex: 9h–18h | Sáb: 9h–14h',
      phone:    '(11) 99999-9999',
      whatsapp: '5511999999999',
      mapEmbed: '',
      gallery:  []
    }
  },
  saveLojaFisica(data) {
    localStorage.setItem('cms_loja_fisica', JSON.stringify(data))
  },

  /* ── Novidades (banner + config) ──────────────────────── */
  getNovidades() {
    const raw = localStorage.getItem('cms_novidades')
    if (raw) return JSON.parse(raw)
    return {
      heroTitle:    'Novidades',
      heroSubtitle: 'As últimas peças que chegaram na nossa loja',
      heroBg:       '',
      showCategories: ['Conjuntos', 'Vestidos', 'Blusas', 'Calças', 'Shorts']
    }
  },
  saveNovidades(data) {
    localStorage.setItem('cms_novidades', JSON.stringify(data))
  },

  /* ── Banners do Hero (index) ──────────────────────────── */
  getBanners() {
    const raw = localStorage.getItem('cms_banners')
    if (raw) return JSON.parse(raw)
    return [
      { id: 1, image: 'assets/images/banners/banner1.png', title: 'Seja bem<br><em>vinda!</em>', subtitle: 'Sua primeira vez aqui?', handle: '@jhonnystylos', link: 'shop.html' },
      { id: 2, image: 'assets/images/banners/banner2.png', title: 'Looks<br><em>Exclusivos</em>', subtitle: 'Nova coleção chegou!', handle: '@jhonnystylos', link: 'shop.html' }
    ]
  },
  saveBanners(arr) {
    localStorage.setItem('cms_banners', JSON.stringify(arr))
  },

  /* ── Categorias de Produtos ──────────────────────────── */
  getCategories() {
    const raw = localStorage.getItem('cms_categories')
    if (raw) return JSON.parse(raw)
    const base = ['Vestidos','Blusas','Conjuntos','Calças','Shorts','Saias','Looks']
    localStorage.setItem('cms_categories', JSON.stringify(base))
    return base
  },
  addCategory(name) {
    const cats = this.getCategories()
    if (!cats.includes(name)) { cats.push(name); localStorage.setItem('cms_categories', JSON.stringify(cats)) }
    return cats
  },

  /* ── Helpers ──────────────────────────────────────────── */
  _newId(arr) {
    return arr.length > 0 ? Math.max(...arr.map(i => i.id || 0)) + 1 : 1
  },

  /** Converte File → base64 data URL (retorna Promise) */
  fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload  = e => resolve(e.target.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  },

  /** Redimensiona imagem antes de salvar (evita localStorage cheio) */
  resizeImage(dataUrl, maxW = 800, maxH = 800, quality = 0.82) {
    return new Promise(resolve => {
      const img = new Image()
      img.onload = () => {
        let { width: w, height: h } = img
        if (w > maxW || h > maxH) {
          const ratio = Math.min(maxW / w, maxH / h)
          w = Math.round(w * ratio)
          h = Math.round(h * ratio)
        }
        const canvas = document.createElement('canvas')
        canvas.width  = w
        canvas.height = h
        canvas.getContext('2d').drawImage(img, 0, 0, w, h)
        resolve(canvas.toDataURL('image/jpeg', quality))
      }
      img.src = dataUrl
    })
  }
}
