// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project.',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your Github username.',
        },
        {
            type: 'input',
            name: 'purpose',
            message: 'Please enter the purpose of the program.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license.',
            choices: [
                "![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)", 
                "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)", 
                "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)",
                "![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)",
            ],
        }
    ])
    .then((answers) => writeToFile(answers));

// TODO: Create a function to write README file
function writeToFile(dataObj) {
        const userInput = dataObj;
        fs.writeFile('README.md', generateMarkdown(userInput), function(err) {
        err ? console.log(err) : console.log('file created!')}
        );
    };
