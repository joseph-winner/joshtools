const express = require("express");
const app = express();
const port = 2021;
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render("index", {Text : 'LOADING PLEASE WAIT...'})
})




app.listen(port, ()=>{
    console.log(`This App is listening to port ${port}`);
})