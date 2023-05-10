<template>
  <main>
    <header @click="delCat">
      &times;
    </header>
    <section @click="openCat">
      <h3>{{ cat.name }}</h3>
      <p v-for="(item, index) in cat.thematics" :key="index">{{ item.name }}</p>
    </section>
    <footer @click="openCat">
      &rsaquo;
    </footer>
  </main>
</template>

<script>
import { store } from '@/store'

export default {
  name: 'CategoryComponent',
  props: {
    cat: Object
  },
  data () {
    return {
      dataStore: store
    }
  },
  methods: {
    openCat () {
      this.$router.push('/revisions/' + this.cat.name)
    },
    delCat () {
      this.dataStore.data.categories.splice(this.dataStore.data.categories.indexOf(this.cat), 1)
    }
  }
}
</script>

<style scoped>
main {
  box-shadow: 5px 5px 5px 5px gainsboro;
  border-radius: 16px;
  padding: 10px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
main:hover {
  background-color: whitesmoke;
  cursor: pointer;
}
section {
  flex: 95%;
}
footer, header {
  flex: 5%;
  font-size: xx-large;
}
</style>
