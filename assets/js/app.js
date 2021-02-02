function handleMenuOpen(element) {
    element.style.display = 'none'
    document.querySelector('.btn-menu-close').style.display = 'block'
    document.querySelector('.navbar .desktop').style.left = '0'
}

function handleCloseMenu(element) {
    element.style.display = 'none'
    document.querySelector('.btn-menu-open').style.display = 'block'
    document.querySelector('.navbar .desktop').style.left = '-1000px'
}

window.onscroll = function() {trocarCor()};

function trocarCor() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.querySelector("header").style.backgroundColor = "#21272f";
    document.querySelector(".logo div").style.color = "#fff"
  } else {
    document.querySelector("header").style.backgroundColor = "transparent";
    document.querySelector(".logo div").style.color = "#21272f"
  }
}