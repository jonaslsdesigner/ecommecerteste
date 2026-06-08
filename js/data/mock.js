const MOCK_PRODUCTS = [
  { id: 1,  name: 'Lorem Ipsum Coat',       slug: 'lorem-ipsum-coat',      price: 129.00, comparePrice: 179.00, rating: 4.5, reviews: 24, category: 'Coats',       isNew: true,  isSale: true,  image: 'IMAGEM ILUSTRATIV/PRODUTOS.png' },
  { id: 2,  name: 'Dolor Sit Dress',        slug: 'dolor-sit-dress',       price: 89.00,  comparePrice: null,   rating: 4.0, reviews: 18, category: 'Dresses',     isNew: true,  isSale: false, image: 'IMAGEM ILUSTRATIV/PRODUTOS.png' },
  { id: 3,  name: 'Amet Consectetur Top',   slug: 'amet-consectetur-top',  price: 49.00,  comparePrice: null,   rating: 4.2, reviews: 31, category: 'Tops',        isNew: true,  isSale: false, image: 'IMAGEM ILUSTRATIV/PRODUTOS.png' },
  { id: 4,  name: 'Adipiscing Elit Pants',  slug: 'adipiscing-elit-pants', price: 74.00,  comparePrice: 99.00,  rating: 3.8, reviews: 12, category: 'Bottoms',     isNew: false, isSale: true,  image: 'IMAGEM ILUSTRATIV/PRODUTOS.png' },
  { id: 5,  name: 'Sed Do Jacket',          slug: 'sed-do-jacket',         price: 159.00, comparePrice: 220.00, rating: 4.7, reviews: 45, category: 'Jackets',     isNew: false, isSale: true,  image: 'IMAGEM ILUSTRATIV/PRODUTOS.png' },
  { id: 6,  name: 'Eiusmod Tempor Skirt',   slug: 'eiusmod-tempor-skirt',  price: 64.00,  comparePrice: null,   rating: 4.3, reviews: 22, category: 'Bottoms',     isNew: false, isSale: false, image: 'IMAGEM ILUSTRATIV/PRODUTOS.png' },
  { id: 7,  name: 'Incididunt Labore Bag',  slug: 'incididunt-labore-bag', price: 110.00, comparePrice: 149.00, rating: 4.6, reviews: 37, category: 'Bags',        isNew: false, isSale: true,  image: 'IMAGEM ILUSTRATIV/PRODUTOS.png' },
  { id: 8,  name: 'Dolore Magna Blouse',    slug: 'dolore-magna-blouse',   price: 55.00,  comparePrice: null,   rating: 4.1, reviews: 19, category: 'Tops',        isNew: true,  isSale: false, image: 'IMAGEM ILUSTRATIV/PRODUTOS.png' },
  { id: 9,  name: 'Aliqua Enim Watch',      slug: 'aliqua-enim-watch',     price: 199.00, comparePrice: 279.00, rating: 4.8, reviews: 58, category: 'Accessories', isNew: false, isSale: true,  image: 'IMAGEM ILUSTRATIV/PRODUTOS.png' },
  { id: 10, name: 'Quis Nostrud Sneakers',  slug: 'quis-nostrud-sneakers', price: 95.00,  comparePrice: null,   rating: 4.0, reviews: 14, category: 'Shoes',       isNew: true,  isSale: false, image: 'IMAGEM ILUSTRATIV/PRODUTOS.png' },
  { id: 11, name: 'Exercitation Hat',       slug: 'exercitation-hat',      price: 35.00,  comparePrice: 49.00,  rating: 3.9, reviews: 8,  category: 'Accessories', isNew: false, isSale: true,  image: 'IMAGEM ILUSTRATIV/PRODUTOS.png' },
  { id: 12, name: 'Ullamco Laboris Coat',   slug: 'ullamco-laboris-coat',  price: 145.00, comparePrice: null,   rating: 4.4, reviews: 29, category: 'Coats',       isNew: true,  isSale: false, image: 'IMAGEM ILUSTRATIV/PRODUTOS.png' },
]

const MOCK_BLOG_POSTS = [
  {
    id: 1,
    title: 'Coleção de Inverno: Looks para Inspirar',
    slug: 'colecao-inverno-looks-para-inspirar',
    category: 'Moda',
    excerpt: 'Os tons neutros dominam as passarelas desta temporada, trazendo uma harmonia visual única que permite combinações versáteis para o dia a dia.',
    date: '2024-01-15',
    author: 'Equipe Editorial',
    image: 'IMAGEM ILUSTRATIV/BANNERS BLOGS.png',
    content: `
      <p>As coleções de inverno chegam com propostas arrojadas e sofisticadas. Desta vez, os tons neutros dominam as passarelas, trazendo uma harmonia visual única que permite combinações versáteis para o dia a dia. Cada peça foi pensada para durar além da temporada, unindo qualidade e estilo.</p>
      <p>A tendência aposta em texturas diferenciadas: lãs, tweed e veludo ganham destaque nas peças da temporada. O importante é criar looks que equilibrem conforto e elegância, sem abrir mão do estilo pessoal. Aposte em camadas para garantir aquele visual sofisticado mesmo nos dias mais frios.</p>
      <h2>Como Usar as Peças da Coleção</h2>
      <p>Casacos longos combinam perfeitamente com calças de alfaiataria e ankle boots. Para uma produção mais casual, aposte em moletom oversized com tênis chunky e cachecol de tricô. O segredo está em misturar peças de diferentes texturas sem perder a coesão do look.</p>
      <blockquote><p>"O inverno é a estação perfeita para brincar com volumes e camadas, criando looks únicos e expressivos."</p></blockquote>
      <p>Não esqueça dos acessórios: luvas, chapéus e bolsas de couro envelhecido completam qualquer produção com charme e personalidade. A coleção traz opções para todos os estilos e ocasiões, do casual ao mais sofisticado.</p>
      <h2>Tendências que Chegaram para Ficar</h2>
      <p>O monocromático segue forte: escolha um tom e vista-se inteiramente nele. O branco neve, o caramelo e o preto absoluto são os favoritos da temporada. Combinações inesperadas também ganham espaço, misturando estampas discretas com peças lisas de corte clean.</p>
      <p>Para finalizar, lembre-se: moda é expressão. Use as tendências como inspiração, mas sempre filtre pelo seu estilo pessoal. O look mais bonito é aquele em que você se sente confiante e autêntica.</p>
    `
  },
  {
    id: 2,
    title: 'Guarda-Roupa Cápsula: Menos é Mais',
    slug: 'guarda-roupa-capsula-menos-e-mais',
    category: 'Estilo de Vida',
    excerpt: 'Descubra como construir um guarda-roupa com apenas 30 peças essenciais que geram mais de 100 looks diferentes para o seu dia a dia.',
    date: '2024-01-22',
    author: 'Equipe Editorial',
    image: 'IMAGEM ILUSTRATIV/BANNERS BLOGS.png',
    content: `
      <p>Moda e estilo de vida sempre andaram juntos. A forma como nos vestimos reflete nossa personalidade, nossos valores e a maneira como enxergamos o mundo ao nosso redor. Mais do que seguir tendências, trata-se de encontrar o que nos faz sentir bem e expressar quem somos de forma autêntica.</p>
      <p>Ao longo dos anos, meu guarda-roupa foi passando por transformações profundas. Saí do fast fashion para um consumo mais consciente, priorizando peças duráveis, de qualidade e com produção responsável. Essa mudança impactou não só meu estilo, mas minha rotina inteira.</p>
      <h2>Construindo um Guarda-Roupa Cápsula</h2>
      <p>O conceito de guarda-roupa cápsula transformou minha relação com a moda. Com apenas 30 peças essenciais, consigo criar mais de 100 looks diferentes. A chave está em escolher itens versáteis e em tons neutros que combinam entre si sem esforço.</p>
      <blockquote><p>"Não se trata de ter mais roupas, mas de ter as peças certas que expressem quem você é."</p></blockquote>
      <p>Invista em básicos de qualidade: uma calça jeans bem cortada, um blazer clássico, camisetas brancas de bom tecido. Essas peças são a base sobre a qual você constrói qualquer look, em qualquer situação, em qualquer estação.</p>
      <h2>Moda Consciente no Dia a Dia</h2>
      <p>Escolher marcas locais, preferir materiais naturais e cuidar bem das peças que já temos são atitudes simples que fazem grande diferença. A moda sustentável não precisa ser cara nem inacessível — começa com pequenas escolhas conscientes no cotidiano.</p>
      <p>Comece aos poucos: faça um inventário do que você tem, identifique o que realmente usa e doe o restante. Em seguida, preencha as lacunas com peças de qualidade que durem anos. O resultado é um guarda-roupa funcional, bonito e alinhado com seus valores.</p>
    `
  },
  {
    id: 3,
    title: 'Tendências da Temporada: O que Usar Agora',
    slug: 'tendencias-temporada-o-que-usar-agora',
    category: 'Tendências',
    excerpt: 'As grandes casas de moda lançaram suas apostas e as tendências apontam para uma fusão surpreendente entre o clássico e o contemporâneo.',
    date: '2024-01-29',
    author: 'Equipe Editorial',
    image: 'IMAGEM ILUSTRATIV/BANNERS BLOGS.png',
    content: `
      <p>As grandes casas de moda lançaram suas apostas para a próxima temporada, e as tendências apontam para uma fusão surpreendente entre o clássico e o contemporâneo. Peças de alfaiataria ganham novos recortes, e as cores vibrantes voltam com força total às ruas e passarelas.</p>
      <p>O rosa millenial divide espaço com o verde-musgo e o laranja queimado — paletas que remetem tanto ao minimalismo escandinavo quanto à efervescência da cultura pop. A mistura de referências é o que torna essa temporada tão especial e plural para todos os estilos.</p>
      <h2>As Peças-Chave da Temporada</h2>
      <p>O blazer oversized segue como peça-coringa: funciona no trabalho, no happy hour e até em looks mais despojados aos fins de semana. Já as calças cargo voltam repaginadas, com tecidos mais nobres e modelagens mais ajustadas ao corpo.</p>
      <blockquote><p>"A moda de hoje celebra a individualidade — não existe look certo ou errado, existe o look que te representa."</p></blockquote>
      <p>Acessórios volumosos continuam em alta. Brincos grandes, colares em camadas e bolsas estruturadas são os queridinhos das fashionistas. Não tenha medo de exagerar: o exagero, quando bem executado, vira arte e ponto de conversa.</p>
      <h2>Como Incorporar as Tendências ao Seu Estilo</h2>
      <p>Não é necessário comprar tudo que está em alta. Escolha uma ou duas tendências que ressoem com sua identidade e incorpore-as gradualmente ao seu estilo. O segredo está em fazer com que cada peça conte uma história sobre quem você é e onde quer chegar.</p>
      <p>Lembre-se: as tendências são sugestões, não regras. Use-as como inspiração para renovar o visual sem perder sua essência. Afinal, o estilo mais duradouro é aquele que é genuinamente seu.</p>
    `
  },
]

const MOCK_CATEGORIES = [
  { id: 1, name: 'Dresses',     slug: 'dresses',     count: 24 },
  { id: 2, name: 'Tops',        slug: 'tops',         count: 18 },
  { id: 3, name: 'Bottoms',     slug: 'bottoms',      count: 15 },
  { id: 4, name: 'Coats',       slug: 'coats',        count: 12 },
  { id: 5, name: 'Jackets',     slug: 'jackets',      count: 9  },
  { id: 6, name: 'Bags',        slug: 'bags',         count: 20 },
  { id: 7, name: 'Shoes',       slug: 'shoes',        count: 16 },
  { id: 8, name: 'Accessories', slug: 'accessories',  count: 32 },
]

const MOCK_BRANDS = ['Loremia', 'Ipsumco', 'Doloris', 'Sitwell', 'Ametco', 'Consect']

/* Cart (localStorage-backed) */
const Cart = {
  key: 'destry_cart',
  get() { try { return JSON.parse(localStorage.getItem(this.key)) || [] } catch { return [] } },
  save(items) { localStorage.setItem(this.key, JSON.stringify(items)) },
  add(product, qty = 1, size = 'M') {
    const items = this.get()
    const existing = items.find(i => i.id === product.id && i.size === size)
    if (existing) { existing.qty += qty } else { items.push({ ...product, qty, size }) }
    this.save(items)
    return items
  },
  remove(productId, size) {
    const items = this.get().filter(i => !(i.id === productId && i.size === size))
    this.save(items)
    return items
  },
  updateQty(productId, size, qty) {
    const items = this.get()
    const item = items.find(i => i.id === productId && i.size === size)
    if (item) { if (qty <= 0) return this.remove(productId, size); item.qty = qty }
    this.save(items)
    return items
  },
  count() { return this.get().reduce((sum, i) => sum + i.qty, 0) },
  total() { return this.get().reduce((sum, i) => sum + (i.price * i.qty), 0) },
  clear() { localStorage.removeItem(this.key) }
}

/* Wishlist */
const Wishlist = {
  key: 'destry_wishlist',
  get() { try { return JSON.parse(localStorage.getItem(this.key)) || [] } catch { return [] } },
  toggle(productId) {
    const list = this.get()
    const idx = list.indexOf(productId)
    if (idx >= 0) { list.splice(idx, 1) } else { list.push(productId) }
    localStorage.setItem(this.key, JSON.stringify(list))
    return list.includes(productId)
  },
  has(productId) { return this.get().includes(productId) }
}
