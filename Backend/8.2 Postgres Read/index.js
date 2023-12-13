import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

let quiz = {};

const db = new pg.Client({
    user: "iniyankanmani",
    host: "localhost",
    database: "world",
    password: "123456",
    port: 5432,
});

db.connect();

db.query("SELECT * FROM flags", (err, res) => {
    if (err) {
        console.log(`Error executing query ${err}`);
    } else {
        quiz = res.rows;
    }
    db.end();
});

let totalCorrect = 0;
let currentQuestion = {};

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET home page
app.get("/", (req, res) => {
    totalCorrect = 0;
    nextQuestion();
    res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
    let answer = req.body.answer.trim();
    let isCorrect = false;
    if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
        totalCorrect++;
        console.log(totalCorrect);
        isCorrect = true;
    }

    nextQuestion();
    res.render("index.ejs", {
        question: currentQuestion,
        wasCorrect: isCorrect,
        totalScore: totalCorrect,
    });
});

function nextQuestion() {
    const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
    currentQuestion = randomCountry;
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
