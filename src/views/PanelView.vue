<template>
  <div class="container">
    <div class="error" v-if="error">{{ error }}</div>
    <div class="cardContainer">
      <div class="card">
        <h2>Catégories</h2>
        <span v-for="(item, index) in dataStore.data.categories" :key="index">cat</span>
        <!-- <div> {{ dataStore.data }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store'
export default {
  name: 'PanelView',
  data () {
    return {
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
</style>
