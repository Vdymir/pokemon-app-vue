<template>
  <div class="pokemon-container">
    <img :src="imgSrc" alt="pokemon" class="pokemon-hidden" />
    <img v-if="showPokemon" :src="imgSrc" alt="pokemon" class="fade-in" />
  </div>
</template>

<script>
export default {
  name: "PokemonPicture",
  props: {
    pokemonID: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-hidden {
  filter: brightness(0);
}
.pokemon-container {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  height: 200px;
  position: absolute;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>