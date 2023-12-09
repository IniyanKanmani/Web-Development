import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourBearerToken = "922f87cc-c34b-4a27-9e03-d52ee7313fd7";
const config = {
    headers: { Authorization: `Bearer ${yourBearerToken}` },
};

var content = "Waiting for data...";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { content: content });
});

app.post("/get-secret", async (req, res) => {
    const searchId = req.body.id;
    try {
        const result = await axios.get(
            API_URL + "/secrets/" + searchId,
            config
        );
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        res.render("index.ejs", {
            content: JSON.stringify(error.response.data),
        });
    }
});

app.post("/post-secret", async (req, res) => {
    try {
        var response = await axios.post(API_URL + "/secrets", req.body, config);
        content = JSON.stringify(response.data);
        res.redirect("/");
    } catch (error) {
        content = JSON.stringify(error.response.data);
        res.redirect("/");
    }
});

app.post("/put-secret", async (req, res) => {
    try {
        const searchId = req.body.id;
        var response = await axios.put(
            API_URL + "/secrets/" + searchId,
            req.body,
            config
        );
        content = JSON.stringify(response.data);
        res.redirect("/");
    } catch (error) {
        content = JSON.stringify(error.response.data);
        res.redirect("/");
    }
});

app.post("/patch-secret", async (req, res) => {
    try {
        const searchId = req.body.id;
        var response = await axios.patch(
            API_URL + "/secrets/" + searchId,
            req.body,
            config
        );
        content = JSON.stringify(response.data);
        res.redirect("/");
    } catch (error) {
        content = JSON.stringify(error.response.data);
        res.redirect("/");
    }
});

app.post("/delete-secret", async (req, res) => {
    try {
        const searchId = req.body.id;
        var response = await axios.delete(
            API_URL + "/secrets/" + searchId,
            config
        );
        content = JSON.stringify(response.data);
        res.redirect("/");
    } catch (error) {
        content = JSON.stringify(error.response.data);
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
