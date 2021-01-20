const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    //fetch is asynch so we have to await til its done fetching so we use await keyword.
    //if using await in a function, you must write asynch in front of the function.
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()
    
    jokeEl.innerHTML = data.joke
}

//function generateJoke() {
//
//    const config = {
//        headers: {
//            'Accept': 'application/json'
//        }
//    }
    //this is asynchronous
//    fetch('https://icanhazdadjoke.com', config)
//        .then(res =>res.json())
//        .then(data => {
//            jokeEl.innerHTML = data.joke
//    })
//}