function Carousel(config) {
    const container = document.querySelector(config.container)

    const items = document.querySelectorAll(config.items)

    const btnPrev = document.querySelector(config.btnPrev)

    const btnNext = document.querySelector(config.btnNext)

    let _this = this;

    let _currentSlide = 0

    init()
    function init() {
        let _show = container.querySelectorAll('.show')

        // Array.prototype.forEach.call(_show, function(sh){
        //     sh.classList.remove('show')
        // })

        Array.prototype.forEach.call(_show, (sh) => {
            sh.classList.remove('show')
            sh.classList.add('show-none')
        })
        
        items[0].classList.remove('show-none')
        items[0].classList.add('show')
        /* _this.btnNext.removeAttribute('style')
        _this.btnPrev.removeAttribute('style') */
        addListeners()
    }

    function addListeners() {
        btnNext.addEventListener('click', showNextSlide)
        btnPrev.addEventListener('click', showPrevSlide)
    }

    function showNextSlide() {
        _currentSlide++;
        showSlide();
    }

    function showPrevSlide() {
        _currentSlide--;
        showSlide()
    }

    function showSlide() {
        let qtd = items.length;
        let slide = _currentSlide % qtd;
        console.log(`qtd ${qtd}`, `slide ${slide}`, )
        slide = Math.abs(slide);
        container.querySelector('.show').classList.add('show-none');
        container.querySelector('.show').classList.remove('show');
        items[slide].classList.remove('show-none')
        items[slide].classList.add('show')

    }
}