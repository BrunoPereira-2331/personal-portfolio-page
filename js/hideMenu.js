function hideMenu() {
    const menuItems = document.querySelector('.header-items-hide-menu')
    const buttonMenu = document.querySelector('.header-button-hide-menu')
    let displayMenu = menuItems.style.display

    const activeMenu = () => {
        menuItems.style.display = 'block'
    }

    const hideMenu = () => {
        menuItems.style.display = 'none'
    }
    const isMenuActive = (displayMenu) => {
        if (displayMenu === 'none' || displayMenu === undefined) {
            return false
        }
        return true
    }

    const getDisplayMenu = () => {
        return document.querySelector('.header-items-hide-menu').style.display
    }

    buttonMenu.addEventListener('click', () => {
        isMenuActive(this.displayMenu) ? hideMenu() : activeMenu()
        this.displayMenu = getDisplayMenu()
    })

}
