<template>
  <main @click="toggleCarte">
    <section>
      <h3>{{ carte.name }}</h3>
      <p>question1, solution1....</p>
    </section>
    <footer>
      &rsaquo;
    </footer>
  </main>
</template>

<script>

export default {
  name: 'ThematicComponent',
  props: {
    carte: Object
  },
  methods: {
    toggleCarte () {
      // this.$router.push('/about/' + this.$route.params.name + '/' + this.carte.name)
      // this.$emit('seeCat', this.cat.name)
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
footer {
  flex: 5%;
  font-size: xx-large;
}
</style>
