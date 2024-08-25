const pokeAPIBaseUrl = "https://pokeapi.co/api/v2/pokemon/";
const game = document.getElementById('game');

let isPaused = false;
let firstPick = null;
let matches = 0;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

const loadPokemon = async () => {
    const randomIds = new Set();
    while (randomIds.size < 8) {
        const randomNumber = Math.ceil(Math.random() * 150);
        randomIds.add(randomNumber);
    }

    const pokePromises = [...randomIds].map((id) => fetch(pokeAPIBaseUrl + id));
    const responses = await Promise.all(pokePromises);
    return await Promise.all(responses.map((res) => res.json()));
}

const displayPokemon = (pokemon) => {
    pokemon.sort(_ => Math.random() - 0.5);

    const pokemonHTML = pokemon.map(pokemon => {
        const type = pokemon.types[0]?.type?.name || "normal";
        const color = colors[type] || "#F5F5F5";

        return `
            <div class="card" style="background-color: ${color};" onclick="clickCard(event)" data-pokemon="${pokemon.name}">
                <div class="front"></div>
                <div class="back rotated" style="background-color: ${color};">
                    <img src="${pokemon.sprites.front_default}" alt=${pokemon.name}/>
                    <h2>${pokemon.name}</h2>
                </div>
            </div>
        `;
    }).join('');
    game.innerHTML = pokemonHTML;
}

const clickCard = (event) => {
    const pokemonCard = event.currentTarget;
    const [front, back] = getFrontAndBackFromCard(pokemonCard);

    if (front.classList.contains("rotated") || isPaused) return;

    isPaused = true;
    rotateElements([front, back]);

    if (!firstPick) {
        firstPick = pokemonCard;
        isPaused = false;
    } else {
        const secondPokemonName = pokemonCard.dataset.pokemon;
        const firstPokemonName = firstPick.dataset.pokemon;

        if (firstPokemonName !== secondPokemonName) {
            const [firstFront, firstBack] = getFrontAndBackFromCard(firstPick);

            setTimeout(() => {
                rotateElements([front, back, firstFront, firstBack]);
                firstPick = null;
                isPaused = false;
            }, 500);
        } else {
            matches++;
            if (matches === 8) {
                setTimeout(() => {
                    alert("Congrats!!! You Guessed everything correctly.");
                }, 500); // Delay the alert to allow the last flip to complete
            }
            firstPick = null;
            isPaused = false;
        }
    }
}

const rotateElements = (elements) => {
    if (!Array.isArray(elements) || elements.length === 0) return;

    elements.forEach(element => {
        element.classList.toggle('rotated');
    });
}

const getFrontAndBackFromCard = (card) => {
    const front = card.querySelector(".front");
    const back = card.querySelector(".back");
    return [front, back];
}

const resetGame = async () => {
    game.innerHTML = '';
    isPaused = true;
    firstPick = null;
    matches = 0;
    setTimeout(async () => {
        const pokemon = await loadPokemon();
        displayPokemon([...pokemon, ...pokemon]);
        isPaused = false;
    }, 100);
}

resetGame();
