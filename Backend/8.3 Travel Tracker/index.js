import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
    user: "iniyankanmani",
    host: "localhost",
    database: "world",
    password: "123456",
    port: 5432,
});

let total = 0;
let countries = "";

db.connect();

// db.query("SELECT country_code FROM visited_countries;", (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         total = res.rowCount;
//         res.rows.forEach((element) => {
//             countries += element["country_code"] + ",";
//         });
//         console.log(countries);
//     }
//     // db.end();
// });

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    const result = await db.query(
        "SELECT country_code from visited_countries;"
    );

    total = result.rowCount;
    result.rows.forEach((element) => {
        countries += element["country_code"] + ",";
    });

    res.render("index.ejs", { total: total, countries: countries });
});

app.post("/add", async (req, res) => {
    const result = await db.query(
        "SELECT country_code FROM countries WHERE country_name = $1",
        [req.body.country]
    );

    if (result.rowCount !== 0) {
        await db.query(
            "INSERT INTO visited_countries (country_code) VALUES ($1)",
            [result.rows[0]["country_code"]]
        );
    }

    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
