// to bedą nasze podstawowe NPM'y jakie bedziemy używać 
// axios w skrocie pozwala nam puszczać reqeusty do api 
// express.js no głównie do utworzenia apki webowej 

// dokumentacje znajdz sobie online 

const axios = require("axios");
const express = require("express");


const app = express(); 
app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).send("Hello World");
})

app.listen(5000, () => {
    console.log("Server Started at 5000");
})