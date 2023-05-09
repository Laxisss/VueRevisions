<template>
  <main>
    <Category @seeCat="seeCat" v-for="(item, index) in dataStore.data.categories" :key="index" :cat="item"/>
  </main>
</template>

<script>

import { store } from '../store'
import Category from '../components/CategoryComponent.vue'

export default {
  name: 'CategoryList',
  components: {
    Category
  },
  data () {
    return {
      dataStore: store
    }
  },
  methods: {
    seeCat (payload) {
      this.$emit('seeCat', payload)
    }
  }
}
</script>
