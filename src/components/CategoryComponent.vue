<template>
  <main>
    <section>
      <h3>{{ cat.name }}</h3>
      <p>Theme1, theme2....</p>
    </section>
    <footer>
      &rsaquo;
    </footer>
  </main>
</template>

<script>
export default {
  name: 'CategoryComponent',
  props: {
    cat: Object
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
