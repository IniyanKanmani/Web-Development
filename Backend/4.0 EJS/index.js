import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

const today = new Date();
const dayOfWeek = today.getDay();
var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
var day = week[dayOfWeek];

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", {
        day: day,
        desc: [0, 6].includes(dayOfWeek) ? "Have Fun" : "Work Hard",
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
