import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        var response = await axios.get(
            "https://secrets-api.appbrewery.com/random"
        );
        var result = response.data;

        res.render("index.ejs", {
            secret: result.secret,
            user: result.username,
        });
    } catch (error) {
        console.log(error.response.data);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
