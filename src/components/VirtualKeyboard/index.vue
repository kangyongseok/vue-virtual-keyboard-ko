<template>
  <transition name="slide-fade">
    <div class="keyboard">
      <div v-for="(keyLine, index) in KeyData[lang]" :key="index">
        <ul>
          <li
            v-for="(key, index) in keyLine"
            :key="index"
            class="key"
            v-bind:class="classObject(key[shiftIndex])"
            @click="() => keyEvent(key[shiftIndex])"
            v-on:click="() => getKeyValue(key)"
          >
            <span class="keyInfo" v-if="key[shiftIndex] === 'BackSpace'"><img class="keyInfo" src="../../assets/images/ic_backspace.png" /></span>
            <span class="keyInfo" v-else-if="key[shiftIndex] === 'space'"> </span>
            <span class="keyInfo" v-else>{{ key[shiftIndex] }}</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import KeyData from './KeyData'

export default {
  props: {
    valueArr: Array
  },
  data () {
    return {
      KeyData,
      shiftIndex: 0,
      capsLock: 0,
      lang: 'kr'
    }
  },
  methods: {
    getKeyValue (value) {
      this.$emit('getKeyValue', value[this.shiftIndex])
    },
    classObject (key) {
      switch (key) {
        case 'BackSpace':
          return { delete: true }
        case 'Tab':
          return { tab: true }
        case 'CapsLock':
          return { caps: true }
        case 'Enter':
          return { enter: true }
        case 'Shift':
          if (this.shiftIndex === 1) {
            return { shift: true, active: true }
          } return { shift: true, active: false }
        case '한/영':
          if (this.lang === 'en') {
            return { lang: true, active: true }
          } return { lang: true, active: false }
        case 'space':
          return { space: true }
        default:
          return { none: false }
      }
    },
    keyEvent (key) {
      if (key === 'Shift' || key === 'CapsLock') {
        if (this.shiftIndex === 1) {
          this.shiftIndex = 0
        } else {
          this.shiftIndex = 1
        }
      }
      if (key === '한/영') {
        if (this.lang === 'kr') {
          this.lang = 'en'
        } else {
          this.lang = 'kr'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './VirtualKeyboard.scss';
</style>
