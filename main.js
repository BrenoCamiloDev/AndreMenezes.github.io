// função para scroll e sua alterção de cor
function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

// +++++++++++++++ funcions botoes do Header ++++++++++++++++++

function OpenMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
