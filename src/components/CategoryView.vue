<template>
  <div>
    <!-- {{ catName }} -->
    <ThematicComponent v-for="(item, index) in themes" :key="index" :theme="item"/>
  </div>
</template>

<script>
import { store } from '../store'

import ThematicComponent from './ThematicComponent.vue'

export default {
  name: 'CategoryView',
  components: {
    ThematicComponent
  },
  props: {
    catName: String
  },
  data () {
    return {
      themes: [],
      dataStore: store
    }
  },
  mounted () {
    this.themes = this.dataStore.data.categories.find(cat => cat.name === this.$route.params.name).thematics
  },
  updated () {
    this.themes = this.dataStore.data.categories.find(cat => cat.name === this.$route.params.name).thematics
  }
}
</script>
