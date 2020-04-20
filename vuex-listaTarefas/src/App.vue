<template>
  <div id="app">
    <TodoForm/>
    <TodoList/>
    <div id=caixa></div>
     <div id="titulo">
      <h1>Lista de Tarefas</h1>
    </div>

  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue"
import TodoList from "./components/TodoList.vue"

export default {
  name: 'App',
  components:{
    TodoList,
    TodoForm
  }
}

</script>

<style>
#titulo{
  color: beige;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: -466px;
  margin-left: 550px;

}
#caixa{
  width: 500px;
  height: 440px;
  border: solid floralwhite 5px;
  margin-top: -440px;
  margin-left: 418px;
}

</style>