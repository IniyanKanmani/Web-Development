import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs");
});

app.post("/submit", (req, res) => {
    var strLength = req.body["fName"].length + req.body["lName"].length;
    res.render(__dirname + "/views/index.ejs", { strLength: strLength });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
