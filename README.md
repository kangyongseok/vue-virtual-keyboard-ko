# vue-virtual-keyboard-ko

This is a simple Hangul virtual keyboard.

![image](/vue-virtual-keyboard-ko/src/assets/images/screenshot.png)
  
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


