import inquirer from "inquirer";
import { image } from "qr-image";
import { writeFile, createWriteStream } from "fs";

inquirer
    .prompt([{ name: "url", message: "Enter a URL: " }])
    .then((answers) => {
        image(answers["url"]).pipe(createWriteStream("qr_img.png"));

        writeFile("url.txt", answers["url"], (err) => {
            if (err) {
                console.log("Error writing file");
            } else {
                console.log("File written successfully");
            }
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(
                "Prompt couldn't be rendered in the current environment"
            );
        } else {
            console.log("Something else went wrong");
        }
    });
