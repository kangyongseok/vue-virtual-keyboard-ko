<template>
  <div id="app">
    <input
      :value="value"
    />
    <VirtualKeyboard v-on:getKeyValue="getKeyValue" theme="white-shadow" />
  </div>
</template>

<script>
import VirtualKeyboard from './components/VirtualKeyboard'
// theme (white, white-shadow)
export default {
  name: 'app',
  components: {
    VirtualKeyboard
  },
  data () {
    return {
      value: null
    }
  },
  methods: {
    getKeyValue (value) {
      this.value = value
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
