<template>
  <div id="app">
    <VirtualKeyboard v-on:getKeyValue="getKeyValue" />
  </div>
</template>

<script>
import VirtualKeyboard from './components/VirtualKeyboard'

export default {
  name: 'app',
  components: {
    VirtualKeyboard
  },
  methods: {
    getKeyValue (value) {
      console.log(value)
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
