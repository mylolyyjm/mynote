<template>
  <div id="app">
    <Toolbar></Toolbar>
    <Notelist></Notelist>
    <Editor></Editor>
  </div>
</template>

<script>
  import Toolbar from './components/Toolbar.vue'
  import Notelist from './components/Notelist.vue'
  import Editor from './components/Editor.vue'
export default {
  name: 'app',
  components: {
    Toolbar: Toolbar,
    Notelist: Notelist,
    Editor: Editor
  }
}
</script>

<style>
  body,div,ul,li,button{
    margin: 0;
    padding: 0;
  }

</style>
