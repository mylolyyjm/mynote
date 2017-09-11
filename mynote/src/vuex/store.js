/**
 * Created by cty on 2017/6/16.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notes: [],
    activenote: {},
  },


  actions: {
    addNote: function({commit}) {
      commit('ADD_NOTE');
    },

    deleteNote: function({commit}) {
      commit('DELETE_NOTE');
    },

    editNote: function({commit},e){
      commit('EDIT_NOTE',e.target.value);
    },

    updateActiveNote: function({commit}, note) {
      commit('SET_ACTIVE', note)
    },

    toggleFavourite: function({commit}) {
      commit('TOGGLE_FAVOURITE');
    }
  },
  mutations: {
    ADD_NOTE: (state) => {
      const newNote = {
        text: 'new note',
        favourite: false
      };
      state.notes.push(newNote);
      state.activenote = newNote;
    },
    DELETE_NOTE: (state) => {
      state.activenote = state.notes[0];
    },
    EDIT_NOTE: (state,text) => {
      state.activenote.text = text;
    },
    SET_ACTIVE: (state, note) => {
      state.activenote = note;
    },
    TOGGLE_FAVOURITE: (state) => {
      state.activenote.favourite = !state.activenote.favourite;
    }
  }
});
export default store;

