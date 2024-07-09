import { fetchJoke } from "./fetching";
import "./styles/main.scss";


// console.log(await fetchJoke());

const loadNewJokeBtn = document.querySelector(".current-joke__generate");
const currentJokeEl = document.querySelector(".current-joke__text");

async function loadNewJoke() {
    const joke = await fetchJoke();
    currentJokeEl.innerText = joke;
}

loadNewJokeBtn.addEventListener("click", loadNewJoke);