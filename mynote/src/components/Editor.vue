<template>
    <div class="ad">
        <textarea
          class="form-control"
          @input="editNote(this.activenotetext)"
          :value="activenotetext"></textarea>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default{
        data(){
            return {
              activenotetext: ''
            }
        },
        methods:{
          editNote(e){
            this.$store.dispatch('editNote',e);
          }
        }
    }
</script>
<style>
  .ad{
    position: absolute;
    top: 0;
    left: 381px;
    width: 900px;
    height:700px;
  }
  .ad textarea{
    height: 800px;
    resize: none; 
  }
</style>
