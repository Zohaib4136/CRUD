const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts: posts });
});

let posts = [
    {
        Username: "apna clg",
        content: "I love to code"
    },
    {
        Username: "Khapra",
        content: "V. Imp Topic"
    },
];

app.listen(port, () => {
    console.log("listening to port");
});