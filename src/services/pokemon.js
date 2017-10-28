


export const getPokemon = function(pokemonID) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`)
    .then(res => res.json())
}

export const getSpecies = function(pokemonID) {
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}/`)
    .then(res => res.json())
}

export const getMove = function(pokemonID) {
    return fetch(`https://pokeapi.co/api/v2/move/${pokemonID}/`)
}

export const getType = function(pokemonID) {
    return fetch(`https://pokeapi.co/api/v2/type/${pokemonID}/`)
}

export const moveDamageClass = function(pokemonID){
    return fetch(`https://pokeapi.co/api/v2/move-damage-class/${pokemonID}`)
}

// export const getCharacteristics = function(pokemonID) {
//     return fetch(`https://pokeapi.co/api/v2/characteristic/${pokemonID}`)
//     .then(res => res.json())
// }

