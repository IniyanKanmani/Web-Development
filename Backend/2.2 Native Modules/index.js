const fs = require("fs");

fs.writeFile("./messages.txt", "Hello from NodeJS!", (err) => {
    if (err) {
        console.log("Error writing file");
    } else {
        console.log("File written successfully");
    }
});

fs.readFile("./messages.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log("Error reading file");
    } else {
        console.log(data);
    }
});
