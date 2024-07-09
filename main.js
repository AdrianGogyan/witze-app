import { fetchJoke } from "./fetching";
import "./styles/main.scss";


// console.log(await fetchJoke());

const loadNewJokeBtn = document.querySelector(".current-joke__generate");
const currentJokeEl = document.querySelector(".current-joke__text");
const saveJokeBtn = document.querySelector(".current-joke__save");

let currentJoke = "";

async function loadNewJoke() {
    const joke = await fetchJoke();

    if(!currentJoke){
        saveJokeBtn.classList.remove("current-joke__save--disabled");
    }

    currentJoke = joke;
    currentJokeEl.innerText = joke;
}


function saveCurrentJoke(){
    if(currentJoke){
        // 1.saveJoke
        // 2.renderJokes-- saved ones
    }
}

loadNewJokeBtn.addEventListener("click", loadNewJoke);