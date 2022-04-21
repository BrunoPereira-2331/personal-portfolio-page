function hideMenu() {
    const menuItems = document.querySelector('.header-items-hide-menu')
    const buttonMenu = document.querySelector('.header-button-hide-menu')

    const activeMenu = () => {
        menuItems.classList.add('show')
    }

    const hideMenu = () => {
        menuItems.classList.remove('show')
    }

    const showIsActive = () => {
        if (menuItems.classList.contains('show')) {
            return true
        }
        return false
    }

    buttonMenu.addEventListener('click', () => {
        showIsActive() ? hideMenu() : activeMenu()
    })

}


