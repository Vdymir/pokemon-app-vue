<template>
  <div class="options-container">
    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selection', pokemon.id)"
      >
        <p>{{ pokemon.name }}</p>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  name: "PokemonOptions",
  props: {
    pokemons: {
      type: Array,
      required: true,
      default: [],
    },
  },
  methods: {},
};
</script>
  
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}
span {
  text-transform: uppercase;
  text-align: center;
}
p,
span {
  font-size: 1rem;
  margin: 0;
  font-weight: 600;
  line-height: 2rem;
}
li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>