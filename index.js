import fetch from 'node-fetch';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const pet = require('./pet.json');

console.log(pet);

const main = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const jokeObject = await res.json();
    console.log(jokeObject);
}

main();
