document.addEventListener('DOMContentLoaded', () => {
  Toast.init()
  // Auth tabs (Login / Register)
  const tabBtns = document.querySelectorAll('.auth-tab-btn')
  const panels  = document.querySelectorAll('.auth-panel-form')
  tabBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('is-active'))
      panels.forEach(p => p.classList.remove('is-active'))
      btn.classList.add('is-active')
      panels[i]?.classList.add('is-active')
    })
  })

  // Login form (mock)
  document.getElementById('login-form')?.addEventListener('submit', e => {
    e.preventDefault()
    Toast.show('Bem-vindo de volta!', 'Login realizado com sucesso.', 'success')
    setTimeout(() => { location.href = 'account.html' }, 1500)
  })

  // Register form (mock)
  document.getElementById('register-form')?.addEventListener('submit', e => {
    e.preventDefault()
    Toast.show('Conta criada!', 'Seja bem-vindo(a)!', 'success')
    setTimeout(() => { location.href = 'account.html' }, 1500)
  })
})
