// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const utils = require("util");
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        name: "Title",
        type: "input",
        message: "List the project's title"
    },
    {
        name: "Description",
        type: "input",
        message: "Describe the project"
    },
    {
        name: "Installation",
        type: "input",
        message: "How does the user install this project? Are any dependencies required?"
    },
    {
        name: "Usage",
        type: "input",
        message: "What was your motivation for the project and what problem's will the project solve?"
    },

    {
        name: "Contributing",
        type: "input",
        message: "What resources did you use?"
    },
    {
        name: "Tests",
        type: "input",
        message: "Are there any Tests?"
    },
    {
        name: "Questions",
        type: "email",
        message: "What is your email address?"
    },
    {
        name: "GitHub",
        type: "input",
        message: "What is your Github username?"
    },
    {
        name: "License",
        type: "input",
        message: "What License was used?"
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log("You missed a step")
        }

    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
