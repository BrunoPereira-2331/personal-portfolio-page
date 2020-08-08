(function () {
    let carouselProjetos = new Carousel({
        container: '.quemSou-div-experiencias-slide',
        itens: '.quemSou-div-experiencias-slide div',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    window.onload = function () {
        changeImageSize()
    }
})()