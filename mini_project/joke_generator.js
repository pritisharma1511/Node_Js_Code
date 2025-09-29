import http from "https";
import chalk from "chalk";

const getJoke = () => {
    const url = "https://official-joke-api.appspot.com/random_joke";

    https.get(url, () => {
        
    })
}

getJoke();