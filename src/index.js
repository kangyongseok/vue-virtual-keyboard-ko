import VirtualKeyboard from './components/VirtualKeyboard.vue'

const install = (Vue) => {
  Vue.component(VirtualKeyboard)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  VirtualKeyboard
}

export default install
