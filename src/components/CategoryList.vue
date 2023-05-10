<template>
  <main>
    <Category v-for="(item, index) in categories" :key="index" :cat="item"/>
  </main>
</template>

<script>

import Category from '../components/CategoryComponent.vue'

export default {
  name: 'CategoryList',
  components: {
    Category
  },
  props: {
    categories: Array,
    updater: Number
  }
}
</script>
