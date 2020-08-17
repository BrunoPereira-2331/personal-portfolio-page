function hideMenu() {
    const menuItems = document.querySelector('.header-items-hide-menu')
    const buttonMenu = document.querySelector('.header-button-hide-menu')
    let displayMenu = menuItems.style.display

    const activeMenu = (displayMenu) => {
        if (isMenuActive(displayMenu)) {
            menuItems.style.display = 'none'
        }
        else {
            menuItems.style.display = 'block'
        }
    }

    const isMenuActive = (displayMenu) => {
        if (displayMenu === 'none' || displayMenu === undefined) {
            return false
        }
        return true
    }

    const displayHideMenu = () => {
        return document.querySelector('.header-items-hide-menu').style.display
    }

    buttonMenu.addEventListener('click', () => {
        activeMenu(this.displayMenu)
        this.displayMenu = displayHideMenu()
    })

}
