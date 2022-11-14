<template>
  <h1>Quien es ese Pokemon?</h1>
  <Spinner v-if="isLoading" />
  <div v-else>
    <PokemonPicture :pokemonID="pokemonSelectedId" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemons" @selection="checkAnswer" />
  </div>
  <div v-if="message" class="fade-in">
    <span>{{ message }}</span>
    <button @click="refresh">Repetir</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import Spinner from "@/components/Spinner.vue";
import getPokemonOptions from "@/helpers/PokemonOptions";
import { random } from "@/helpers/utils";

export default defineComponent({
  name: "HomePage",
  components: {
    PokemonPicture,
    PokemonOptions,
    Spinner,
  },
  data() {
    return {
      pokemons: [],
      showPokemon: false,
      pokemonSelectedId: 0,
      isLoading: true,
      message: "",
    };
  },
  methods: {
    async mixPokemonsArray() {
      this.isLoading = true;
      this.pokemons = await getPokemonOptions();
      this.pokemonSelectedId = this.pokemons[random(0, 3)].id;
      this.isLoading = false;
    },
    checkAnswer(id) {
      if (id === this.pokemonSelectedId) {
        this.message = "En efecto cole ese era el pokemon";
      } else {
        this.message = "Nelson pai, moriste, no es ese";
      }
      this.showPokemon = true;
    },
    refresh() {
      this.showPokemon = false;
      this.message = "";
      this.mixPokemonsArray();
    },
  },
  mounted() {
    this.mixPokemonsArray();
  },
});
</script>

<style scoped>
span {
  font-size: 1rem;
  margin: 0;
  font-weight: 600;
  line-height: 2rem;
  text-transform: uppercase;
  text-align: center;
}
button {
  padding: 0.6rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  text-transform: uppercase;
}
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>