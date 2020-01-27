<template>
  <div class="hello"></div>
</template>

<script>
import Hangul from 'hangul-js'

export default {
  name: 'VirtualKeyboard',
  data () {
    return {
      test: ''
    }
  },
  created () {
    this.testHangul()
  },
  methods: {
    testHangul () {
      console.log(Hangul.disassemble('가나다'))
      console.log(Hangul.assemble(['ㄱ', 'ㅏ', 'ㄴ', 'ㅏ', 'ㄷ', 'ㅏ']))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
