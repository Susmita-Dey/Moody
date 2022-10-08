console.log("Hello");

const loader = document.getElementById("loader");
const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);

generateJoke();


async function generateJoke() {
    jokeEl.innerHTML = ""
    loader.classList.add("loader")
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const joke = await jokeRes.json();
    loader.classList.remove("loader")
    jokeEl.innerHTML = joke.joke;
}


/*
// Fetch a random joke from the Dad Jokes API
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'X-RapidAPI-Key': '10a23e5f42msh63fb8615c2793e8p1499f8jsn0981e8acff17',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
};

async function generateJoke() {
    const jokeRes = await fetch('https://dad-jokes.p.rapidapi.com/random/joke', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'X-RapidAPI-Key': '10a23e5f42msh63fb8615c2793e8p1499f8jsn0981e8acff17',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    })

    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
    const joke = await jokeRes.json();
    console.log(joke);
    jokeEl.innerHTML = joke.joke;
    // jokeEl.textContent = "test";
}
*/