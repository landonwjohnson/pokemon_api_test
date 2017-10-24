


export const getPokemon = function(pokemonID) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then(res => res.json())
}

export const getPicture = function(pokemonID) {
    return fetch(`../../img/picture frame/${pokemonID}.png`)
}

// export const getCharacteristics = function(pokemonID) {
//     return fetch(`https://pokeapi.co/api/v2/characteristic/${pokemonID}`)
//     .then(res => res.json())
// }

