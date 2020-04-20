<template>
  <div id="app">
   <deshboard/>
   <Registro/>
  </div>
</template>

<script>

import Deshboard from './components/Dashboard.vue'
import Registro from './components/Registro.vue'

export default {
  name: 'App',
  components: {
   Deshboard, Registro
  }
}
</script>

<style>
#app{
  display: flex;

}

</style>
