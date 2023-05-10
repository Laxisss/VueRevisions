<template>
  <div class="container">
    <div class="error" v-if="error">{{ error }}</div>
    <div class="cardContainer">
      <div class="card">
        <div class="card-header">
          <span>
            <button class="v-h plus-button">+</button>
          </span>
          <h2>
            <span v-if="currentCat == null">Catégories</span>
            <span v-else-if="currentTheme == null">Themes</span>
            <span v-else>Cartes</span>
          </h2>
          <span>
            <button class="plus-button" v-if="!addNew && (currentCat == null || currentTheme == null)" @click="addNew = !addNew">+</button>
            <button class="plus-button" v-else-if="!addnew" @click="addCard">+</button>
            <span class="input-group" v-else>
              <input type="text" v-model="newItem"/>
              <button v-if="currentCat == null" @click="addCategory">&check;</button>
              <button v-else-if="currentTheme == null" @click="addTheme">&check;</button>
            </span>
          </span>
        </div>
        <!-- <span >cat</span> -->
        <CategoryList v-if="currentCat == null"/>
        <CategoryView v-else-if="currentTheme == null" :catName="currentCat"/>
        <ThematicView v-else :catName="currentCat"/>
        <!-- <Category @seeCat="seeCat" v-for="(item, index) in dataStore.data.categories" :key="index" :cat="item"/> -->
        <!-- <div> {{ dataStore.data }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store'
import CategoryList from '../components/CategoryList.vue'
import CategoryView from '@/components/CategoryView.vue'
import ThematicView from '@/components/ThematicView.vue'

export default {
  name: 'PanelView',
  components: {
    CategoryList,
    CategoryView,
    ThematicView
  },
  data () {
    return {
      addNew: false,
      dataStore: store,
      newItem: '',
      // data: this.dataStore.data,
      error: '',
      currentCat: null,
      currentTheme: null
    }
  },
  watch: {
    addNew () {
      this.newItem = ''
    }
  },
  methods: {
    addCategory () {
      if (this.newItem === '') {
        this.error = 'Nom Invalide'
        return
      }
      this.addNew = false
      this.dataStore.data.categories.push({
        name: this.newItem,
        thematics: []
      })
    },
    addTheme () {
      if (this.newItem === '') {
        this.error = 'Nom Invalide'
        return
      }
      this.addNew = false
      this.dataStore.data.categories.find(cat => cat.name === this.$route.params.name).thematics.push({
        name: this.newItem,
        thematics: []
      })
    },
    addCard () {
      const cardIds = this.dataStore.data.categories.find(cat => cat.name === this.$route.params.name).thematics.find(thematic => thematic.name === this.$route.params.tname).cards.map(card => card.id)
      this.dataStore.data.categories.find(cat => cat.name === this.$route.params.name).thematics.find(thematic => thematic.name === this.$route.params.tname).cards.push({
        id: Math.max(cardIds + 1 || 0),
        recto: '',
        verso: '',
        rate: []
      })
    }
  },
  updated () {
    this.currentCat = this.$route.params.name
    this.currentTheme = this.$route.params.tname
  },
  mounted () {
    this.currentCat = this.$route.params.name
    this.currentTheme = this.$route.params.tname
  },
  created () {
    // window.addEventListener('beforeunload', e => {
    //   console.log('there')
    //   // const returnValue = confirm('Sur ?')
    //   // eslint-disable-next-line
    //   // e.returnValue = '\o/'
    //   e.preventDefault()
    //   this.$router.push('/about')
    // })
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
