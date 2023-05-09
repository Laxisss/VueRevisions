<template>
  <div>
    <!-- {{ catName }} -->
    <CardComponent v-for="(item, index) in themes" :key="index" :theme="item"/>
  </div>
</template>

<script>
import { store } from '../store'

import CardComponent from './ThematicComponent.vue'

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
  }
}
</script>
