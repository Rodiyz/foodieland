import Swiper from 'swiper'
import 'swiper/css'
const rootSelector = '[data-js-slider]'

class Slider {
  constructor(rootElement) {
    this.rootElement = rootElement
    this.init()
  }

  init() {
    new Swiper(this.rootElement, {
    })
  }
}

class SliderCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }
}

export default SliderCollection