<template>
  <main>
    <header @click="delTheme">
      &times;
    </header>
    <section @click="openTheme">
      <h3>{{ theme.name }}</h3>
    </section>
    <footer @click="openTheme">
      &rsaquo;
    </footer>
  </main>
</template>

<script>
import { store } from '@/store'
export default {
  name: 'ThematicComponent',
  props: {
    theme: Object
  },
  data () {
    return {
      dataStore: store
    }
  },
  methods: {
    openTheme () {
      this.$router.push('/revisions/' + this.$route.params.name + '/' + this.theme.name)
    },
    delTheme () {
      this.dataStore.data.categories.find(cat => cat.name === this.$route.params.name).thematics.splice(this.dataStore.data.categories.find(cat => cat.name === this.$route.params.name).thematics.indexOf(this.theme), 1)
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
