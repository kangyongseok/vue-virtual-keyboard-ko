# vue-virtual-keyboard-ko

This is a simple Hangul virtual keyboard.

![image](https://raw.githubusercontent.com/kangyongseok/vue-virtual-keyboard-ko/master/src/assets/images/screenshot.png)
  
## Install
``` console
$ npm i --save vue-virtual-keyboard-ko
```

## Usage
``` javascript
<template>
  <div id="app">
    {{ value }}
    <VirtualKeyboard 
      v-on:getKeyValue="_getKeyValue"
      theme="white-shadow"
    />
  </div>
</template>

<script>
import { VirtualKeyboard } from 'vue-virtual-keyboard-ko'

export default {
  name: 'app',
  components: {
    VirtualKeyboard
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    _getKeyValue (value) {
      this.value = value
    }
  }
}
</script>
```

Currently only prop returning a value, but the theme change special key addition will be updated later.

## Theme

> v.0.2.0 Add theme
- white
![white](https://raw.githubusercontent.com/kangyongseok/vue-virtual-keyboard-ko/master/src/assets/images/white_keyboard.png)
- white-shadow
![white-shadow](https://raw.githubusercontent.com/kangyongseok/vue-virtual-keyboard-ko/master/src/assets/images/white-shadow_keyboard.png)
