// te piñaste con la poke appi
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const API = 'https://pokeapi.co/api/v2/pokemon/'
const img = document.getElementById('image')

const buscarPokimonNumero = (pokeNum) => {
    const dataImg = async (pokeNum) => {
        const resultado = await fetch(API + pokeNum).then(response => response.json())
        const front_default = await resultado.sprites.other.dream_world.front_default;
        return front_default
    }
    
    (async () => { const svg_url = await dataImg(pokeNum)
        img.src = svg_url;
    })()
}


btn.onclick = (e) => {
    e.preventDefault()
    buscarPokimonNumero(input.value)
    img.classList.remove('hide')
}
