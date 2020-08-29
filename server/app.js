const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

//routes
app.get("/", (req, res) =>{
    res.send("this is get request after nodemon");
})

app.get("/", (req, res) =>{
    res.send("this is another get request");
})


app.listen(port, () => {
    console.log("server is up and running on port : ", port);
})