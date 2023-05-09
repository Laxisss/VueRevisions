<template>
  <main @click="openTheme">
    <section>
      <h3>{{ theme.name }}</h3>
      <p>carte1, carte2....</p>
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
    theme: Object
  },
  methods: {
    openTheme () {
      this.$router.push('/about/' + this.$route.params.name + '/' + this.theme.name)
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
