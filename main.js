window.addEventListener('scroll', onScroll)

onScroll()

// functions de rolagem
function onScroll() {
  showNavOnScroll()
  showBackToTopButton()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function showBackToTopButton() {
  if (scrollY > 400) {
    backtopreturn.classList.add('show')
  } else {
    backtopreturn.classList.remove('show')
  }
}
// +++++++++++++++ funcions botoes do Header ++++++++++++++++++

function OpenMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats,
  #home .stats .stat, 
  #services,
  #services header,
  #services .cards,
  #services .cards .card,
  #about, #about header,
  #aobut .content,
  #contato, #contato header,
  #contato .content,
  #footer,
  `)
