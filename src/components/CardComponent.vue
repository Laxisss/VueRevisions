<template>
  <main @click="toggleCarte">
    <section>
      <label>Question</label>
      <textarea rows="10" resizeable="" type="text" v-model="recto"></textarea>
    </section>
    <section>
      <label>Réponse</label>
      <textarea rows="10" type="text" v-model="verso"></textarea>
    </section>
  </main>
</template>

<script>
import { store } from '../store'
export default {
  name: 'CardComponent',
  props: {
    carte: Object
  },
  data () {
    return {
      dataStore: store,
      recto: this.carte.recto,
      verso: this.carte.verso
    }
  },
  watch: {
    recto (newVal) {
      this.dataStore.data.categories.find(cat => cat.name === this.$route.params.name).thematics.find(thematic => thematic.name === this.$route.params.tname).cards.find(card => card.id === this.carte.id).recto = newVal
    },
    verso (newVal) {
      this.dataStore.data.categories.find(cat => cat.name === this.$route.params.name).thematics.find(thematic => thematic.name === this.$route.params.tname).cards.find(card => card.id === this.carte.id).verso = newVal
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
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 380px;
  aspect-ratio: 9 / 16;
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
textarea {
  resize: none;
  border: 1px solid gainsboro;
  border-radius: 8px;
}
</style>
