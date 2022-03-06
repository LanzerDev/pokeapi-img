// te piñaste con la poke appi
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const API = 'https://pokeapi.co/api/v2/pokemon/'
const img = document.getElementById('image')
const nombre = document.getElementById('nombre-pokimon')

const buscarPokimonNumero = async (pokeNum) => {
    try{
        const resultado = await fetch(API + pokeNum).then(response => response.json())
        const imgPokimon = await resultado.sprites.other.dream_world.front_default;
        const nombrePokimon = await resultado.name;
        nombre.textContent = nombrePokimon
        img.src = imgPokimon;
    } catch (error){
        console.log(error)
    }
}


btn.onclick = (e) => {
    e.preventDefault()
    buscarPokimonNumero(input.value)
    img.classList.remove('hide')
}
