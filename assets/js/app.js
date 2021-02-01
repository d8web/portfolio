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