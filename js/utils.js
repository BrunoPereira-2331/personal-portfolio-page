function changeImageSize() {
    let imageItem = document.getElementById('contato-img')
    let width = window.screen.width
    if (width < 500) {
        imageItem.style.width = "20%"
    }
}
