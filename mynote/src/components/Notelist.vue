<template>
    <div id="notelist">
      <div id="list-header">
        <h3>NOTES | COLIGO</h3>
        <div class="btn-group btn-group-lg" role="group">
          <div class="btn-group" role="group">
            <button
              type="button"
              class="btn btn-default"
              @click="show = 'all'"
              :class="{active: show==='all'}"
            >
              All Notes
            </button>
            <button
              type="button"
              class="btn btn-default"
              @click="show = 'favourites'"
              :class="{active: show==='favourites'}"
            >
              Favorites
            </button>
          </div>
        </div>
        <div class="list-group">
          <a
            v-for="note in filteredNotes"
            class="list-group-item" href="#"
            :class="{active: activenote === note}"
            @click="updateActiveNote(note)"
          >
            <h4 class="list-group-item-heading">{{ note.text.trim().substring(0,30) }}</h4>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default{
        data(){
            return {
                show: 'all'
            }
        },
        methods:{
          updateActiveNote(note){
            this.$store.dispatch('updateActiveNote', note);
          }
        },
        computed:
          {
            filteredNotes(){
              if(this.show === 'all'){
                  return this.$store.state.notes;
              }else if(this.show === 'favourites'){
                  return this.$store.state.notes.filter(note => note.favourite)
              }
            },
            activenote(){
                return this.$store.state.activenote;
            }
        }
    }
</script>
<style>
  #notelist{
    float: left;
    width: 300px;
    height: 800px;
    background-color: #F5F5F5;
  }
  #notelist #list-header{
    width: 300px;
    height: 126px;
    text-align: center;
  }
  #notelist #list-header button{
    width: 125px;
    height: 34px;
    text-align: center;
    line-height: 12px;
  }
  .list-group-item {
    border: 0;
    border-radius: 0;
  }
  .list-group-item-heading {
    font-weight: 300;
    font-size: 15px;
  }
</style>
