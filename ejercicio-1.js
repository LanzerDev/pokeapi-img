// Ejercicio, pintar la pokeapi
// intento 1, con ayuda de google unu papu noob

const API = 'https://pokeapi.co/api/v2/pokemon/'
// nmms con fetch esta bien pelado
/*
fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=5')
      .then(response => response.json())
      .then(json => console.log(json));
*/

// con async await

/*
const pokeApi = async (url_api) => {
    try {
        const respuesta = await fetch(url_api);
        console.log(respuesta)

        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            for (i in datos.results) {
                console.log(datos.results[i].name)
            }

        }
    } catch (error) {
        console.log(error)
    }
}

pokeApi(API)
*/
