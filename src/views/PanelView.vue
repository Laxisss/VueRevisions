<template>
  <div class="container">
    <div class="error" v-if="error">{{ error }}</div>
    <div class="cardContainer">
      <div class="card">
        <div class="card-header">
          <span>
            <button class="v-h plus-button">+</button>
          </span>
          <h2>Catégories</h2>
          <span>
            <button class="plus-button" v-if="!addNew" @click="addNew = !addNew">+</button>
            <span class="input-group" v-else>
              <input type="text" v-model="newCategory"/>
              <button @click="addCategory">&check;</button>
            </span>
          </span>
        </div>
        <!-- <span >cat</span> -->
        <Category v-for="(item, index) in dataStore.data.categories" :key="index" :cat="item"/>
        <!-- <div> {{ dataStore.data }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store'
import Category from '../components/CategoryComponent.vue'

export default {
  name: 'PanelView',
  components: {
    Category
  },
  data () {
    return {
      addNew: false,
      dataStore: store,
      newCategory: '',
      // data: this.dataStore.data,
      error: ''
    }
  },
  methods: {
    addCategory () {
      if (this.newCategory === '') {
        this.error = 'Nom Invalide'
        return
      }
      this.addNew = false
      this.dataStore.data.categories.push({
        name: this.newCategory,
        thematics: []
      })
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: calc(99vh - 60px);
  }
  .error {
    color: white;
    background-color: rgb(185, 0, 0);
    border-radius: 8px;
    padding: 8px;
  }
  .cardContainer {
    margin-top: 1rem;
    height: calc(100% - 2rem);
    width: 95vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  .card {
    flex: 95%;
    border-radius: 16px;
    box-shadow: 5px 5px 5px 5px gainsboro;
  }
  .card-header {
    display: flex;
    justify-content: space-around;
  }
  .card-header span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .v-h {
    visibility: hidden;
  }
  .plus-button {
    aspect-ratio: 1;
    width: 50px;
    border-radius: 50px;
    border: none;
    font-size: 2.5rem;
    font-weight: 10;
    background-color: transparent;
    box-shadow: 3px 3px 3px 3px gainsboro;
  }
  .plus-button:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
  .input-group {
    height: 2rem;
  }
  .input-group input {
    padding: 8px;
    border: none;
    box-shadow: 3px 3px 3px 3px gainsboro;
    margin: 8px;
    border-radius: 8px;
    height: calc(50px - 16px)!important;
  }
  .input-group button {
    padding: 8px;
    border: none;
    box-shadow: 3px 3px 3px 3px #232323;
    border-radius: 8px;
    margin: 8px;
    height: 50px;
    background-color: #8000FF;
    filter: invert(1);
  }
  .input-group button:hover {
    background-color: #a246fe;
    cursor: pointer;
  }
  .input-group * {
    margin-right: 0!important;
    margin-left: 0!important;
  }
  .input-group *:not(*:nth-child(even)) {
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important;
  }
  .input-group *:nth-child(even) {
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important;
  }
</style>
