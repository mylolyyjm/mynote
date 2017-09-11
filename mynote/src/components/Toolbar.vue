<template>
  <div>
    <div id="toolbar">
      <i @click="addNote()" class="glyphicon glyphicon-plus"></i>
      <i @click="toggleFavourite()" class="glyphicon glyphicon-star"></i>
      <i @click="deleteNote()" class="glyphicon glyphicon-remove"></i>
    </div>
  </div>
</template>


<script>

  export default{
      methods:{
        addNote(){
          this.$store.dispatch('addNote');
        },
        toggleFavourite(){
          this.$store.dispatch('toggleFavourite');
        },
        deleteNote(){
          this.$store.dispatch('deleteNote');
        }
      }
    }
</script>
<style scoped>
  #toolbar{
    width: 80px;
    height: 800px;
    background: #30414D;
    float: left;
    color: #767676;
    text-align: center;
    padding: 35px 25px 25px 25px ;
  }
  #toolbar i{
    font-size: 30px;
    margin-bottom: 35px;
  }
  #toolbar i:hover{
    color: #c0c0c0;
  }
</style>
