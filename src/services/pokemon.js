


export const getPokemon = function(pokemonID) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`)
    .then(res => res.json())
}

export const getSpecies = function(pokemonID) {
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}/`)
    .then(res => res.json())
}


// export const getCharacteristics = function(pokemonID) {
//     return fetch(`https://pokeapi.co/api/v2/characteristic/${pokemonID}`)
//     .then(res => res.json())
// }

