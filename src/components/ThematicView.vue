<template>
  <div>
    <!-- {{ cartes }} -->
    <CardComponent v-for="(item, index) in cartes" :key="index" :carte="item"/>
  </div>
</template>

<script>
import { store } from '../store'

import CardComponent from './CardComponent.vue'

export default {
  name: 'thematicView',
  components: {
    CardComponent
  },
  props: {
    thematicName: String
  },
  data () {
    return {
      cartes: [],
      dataStore: store
    }
  },
  mounted () {
    this.cartes = this.dataStore.data.categories.find(cat => cat.name === this.$route.params.name).thematics.find(thematic => thematic.name === this.$route.params.tname).cards
  },
  updated () {
    this.cartes = this.dataStore.data.categories.find(cat => cat.name === this.$route.params.name).thematics.find(thematic => thematic.name === this.$route.params.tname).cards
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-evenly;
}
</style>
