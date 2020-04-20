<template>
  <div clas="container">
      <div class="veiculo" v-for="veiculo in veiculos" :key="veiculo.placa" :style="veiculo.cor">
          {{veiculo.placa}}

  </div>
  </div>
</template>

<script>
export default {
    computed: {
        veiculos(){
            return this.$store.state.veiculos
        }

    }

}
</script>

<style>
.container{
    width: 400px;
    height: 300px;
    border: 1p solid black;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
}
.veiculo{
   min-width: 45px;
    height: 45px;
    border: 1p solid black;
    margin-left: 5px;
    

}

</style>