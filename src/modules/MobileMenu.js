class MobileMenu {
  selectors = {
    root: '[data-js-mobile-menu]',
    overlay: '[data-js-mobile-menu-overlay]',
    BurgerButton: '[data-js-mobile-menu-burger-button]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.overlayElement = document.querySelector(this.selectors.overlay)
    this.BurgerButtonElement = document.querySelector(this.selectors.BurgerButton)
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.BurgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.overlayElement.classList.toggle(this.stateClasses.isActive)
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }
  bindEvents() {
    this.BurgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
  }
}

export default MobileMenu