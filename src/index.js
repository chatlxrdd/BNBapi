// to bedą nasze podstawowe NPM'y jakie bedziemy używać 
// axios w skrocie pozwala nam puszczać reqeusty do api 
// express.js no głównie do utworzenia apki webowej 

// dokumentacje znajdz sobie online 

const axios = require("axios");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

app.listen(5000, () => {
    console.log("Server Started at 5000");
})

const apiTokenFeniks = {
    apiFeniks: `${process.env.API_TOKEN_FENIKS}`,
    apiBaselinker: `${process.env.API_TOKEN_BASELINKER}`
}
console.log(apiTokenFeniks);

function dupa() {
    console.log(apiTokenFeniks);
}

dupa();