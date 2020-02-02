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
          >
            <!-- <span class="keyInfo" v-if="key[shiftIndex] === 'BackSpace'"><img class="keyInfo" src="../../assets/images/ic_backspace.png" /></span> -->
            <span class="keyInfo" v-if="key[shiftIndex] === 'space'"> </span>
            <span class="keyInfo" v-else>{{ key[shiftIndex] }}</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import KeyData from './keyData'
import Hangul from 'hangul-js'

export default {
  props: {
    valueArr: Array
  },
  data () {
    return {
      KeyData,
      shiftIndex: 0,
      capsLock: 0,
      lang: 'kr',
      keyArr: [],
      keyValue: null
    }
  },
  methods: {
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
    async keyEvent (key) {
      switch (key) {
        case 'Shift':
        case 'CapsLock':
          if (this.shiftIndex === 1) {
            this.shiftIndex = 0
          } else {
            this.shiftIndex = 1
          }
          break
        case '한/영':
          if (this.lang === 'kr') {
            this.lang = 'en'
          } else {
            this.lang = 'kr'
          }
          break
        case 'BackSpace':
          this.delete()
          break
        default:
          await this.keyArr.push(key)
          this.keyValue = await Hangul.assemble(this.keyArr)
          await this.$emit('getKeyValue', this.keyValue)
          break
      }
    },
    async delete () {
      await this.keyArr.pop()
      this.keyValue = await Hangul.assemble(this.keyArr)
      await this.$emit('getKeyValue', this.keyValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  /* @import './VirtualKeyboard.scss'; */
  @mixin vendor_prefix($name, $argument) {
    -webkit-#{$name}: #{$argument};
    -ms-#{$name}: #{$argument};
    -moz-#{$name}: #{$argument};
    -o-#{$name}: #{$argument};
    #{$name}: #{$argument};
  }
  @mixin flex() {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: -o-flex;
    display: flex;
  }
  @mixin align_items($value) {
    @include flex();
    @include vendor_prefix(align-items, $value);
  }
  @mixin flex_direction($value) {
    @include flex();
    @include vendor_prefix(flex-direction, $value);
  }
  .keyboard {
    @include align_items(center);
    @include flex_direction(column);
    width: 1400px;
    height: 380px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -700px;
    border-radius: 0;
    z-index: 9999;
    background: #1A1A1A;
    padding-top: 30px;
    .key {
      display: block;
      color: #ffffff;
      text-decoration: none;
      text-align: center;
      width: 80px;
      height: 60px;
      line-height: 58px;
      margin: 2.5px;
      background: #333333;
      font-size: 18px;
      border-radius: 4px;
    }

    .key:active, .keydown {
      border-radius: 4px;
      color: #ffffff;
      background: red;
      // margin: 7px 5px 3px;
    }

    ul {
      @include align_items(center);
      margin: 0;
      padding: 0;
      .delete {width: 130px;}
      .tab {width: 100px;}
      .caps {width: 110px;}
      .enter {width: 160px;}
      .shift {width: 130px;}
      .lang {width: 130px;}
      .space {width: 535px;}

      .active {
        background: red;
        color: #ffffff;
      }

      li {
        @include flex();
        @include vendor_prefix(justify-content, center);
        @include vendor_prefix(align-items, center);
      }
      img {
        width: 30%;
        margin-top: 18px;
      }
    }
  }
</style>
