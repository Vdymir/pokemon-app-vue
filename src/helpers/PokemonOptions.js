import pokemonApi from "@/api/pokemonApi";

const getPokemon = () => Array.from(Array(650)).map((_, i) => i + 1);

const getPokemonOptions = async () => {
  const mixedPokemon = getPokemon().sort(() => Math.random() - 0.5);
  return await getPokemonNames(mixedPokemon.splice(0, 4));
};

const getPokemonNames = async ([a, b, c, d] = []) => {
  const promiseArray = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const [p1, p2, p3, p4] = await Promise.all(promiseArray);
  return [
    {
      name: p1.data.name,
      id: a,
    },
    {
      name: p2.data.name,
      id: b,
    },
    {
      name: p3.data.name,
      id: c,
    },
    {
      name: p4.data.name,
      id: d,
    },
  ];
};

export default getPokemonOptions;
