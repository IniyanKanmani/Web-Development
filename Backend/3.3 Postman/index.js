import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/iniyan", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/iniyan", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/iniyan", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
