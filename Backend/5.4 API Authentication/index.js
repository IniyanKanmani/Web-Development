import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourUsername = "last_lost";
const yourPassword = "hello_world";
const yourAPIKey = "85852aff-9805-493e-86bf-6ea4af5a42fa";
const yourBearerToken = "922f87cc-c34b-4a27-9e03-d52ee7313fd7";

var content = "API Response.";

app.get("/", (req, res) => {
    res.render("index.ejs", { content: content });
});

app.get("/noAuth", (req, res) => {
    axios
        .get(API_URL + "/random")
        .then((response) => {
            content = JSON.stringify(response.data);
            res.redirect("/");
        })
        .catch((error) => {
            console.log("error");
        });
});

app.get("/basicAuth", (req, res) => {
    axios
        .get(API_URL + "/all", {
            auth: { username: yourUsername, password: yourPassword },
        })
        .then((response) => {
            content = JSON.stringify(response.data);
            res.redirect("/");
        })
        .catch((error) => {
            console.log("error");
        });
});

app.get("/apiKey", (req, res) => {
    axios
        .get(API_URL + "/filter", { params: { apiKey: yourAPIKey, score: 5 } })
        .then((response) => {
            content = JSON.stringify(response.data);
            res.redirect("/");
        })
        .catch((error) => {
            console.log("error");
        });
});

app.get("/bearerToken", (req, res) => {
    axios
        .get(API_URL + "/secrets/42", {
            headers: { Authorization: `Bearer ${yourBearerToken}` },
        })
        .then((response) => {
            content = JSON.stringify(response.data);
            res.redirect("/");
        })
        .catch((error) => {
            console.log("error");
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
