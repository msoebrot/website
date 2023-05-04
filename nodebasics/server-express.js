// server-express.js
const express = require('express')
const app = express() // initialize app
const port = 3000

let counter = 0;

// GET callback function returns a response message
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js')
})

app.get('/visits', (req, res) => {
    counter += 1;
    res.send(`There have been ${counter} visits to this session`)
})

app.get('/rock', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
    if(rndInt === 1) {
        res.send('Bot picked rock. You tied!');
    }
    else if(rndInt === 2) {
        res.send('Bot picked paper. You lost!');
    }
    else {
        res.send('Bot picked scissors. You win!');
    }  
});

app.get('/paper', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
    if(rndInt === 1) {
        res.send('Bot picked rock. You win!');
    }
    else if(rndInt === 2) {
        res.send('Bot picked paper. You tied!');
    }
    else {
        res.send('Bot picked scissors. You lost!');
    }
});

app.get('/scissors', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
    if(rndInt === 1) {
        res.send('Bot picked rock. You lost!');
    }
    else if(rndInt === 2) {
        res.send('Bot picked paper. You win!');
    }
    else {
        res.send('Bot picked scissors. You tied!');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})