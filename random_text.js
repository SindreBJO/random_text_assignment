document.getElementById('jokeButton').addEventListener('click', getJoke);

let lastJokeIndex = -1;

function getJoke() {
    console.log('Joke button clicked!');
    
    let jokes =  ["Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a fish wearing a crown? A kingfish!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a bear with no teeth? A gummy bear!",
    "What do you call a pile of cats? A meowtain!",
    "What do you call a sleeping bull? A bulldozer!",
    "What do you call a belt made out of watches? A waist of time!",
    ];

    let newJokeIndex;
    do {
        newJokeIndex = Math.floor(Math.random() * jokes.length);
    } while (newJokeIndex === lastJokeIndex);

    lastJokeIndex = newJokeIndex;
    document.getElementById('jokeText').innerText = jokes[newJokeIndex];
}