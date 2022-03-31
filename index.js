// adding packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [

    {
        name: 'title',
        type: 'input',
        message: "What is your project title?"
    },

    {
        name: 'discription',
        type: 'input',
        message:`Provide a short description of your project. 
        
        Use the following questions as a guide:

        - What was your motivation?
        - Why did you build this project? 
        - What problem does it solve?`
    },

    {
        name: 'installation',
        type: 'input',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },

    {
        name: 'usage',
        type: 'input',
        message: "Provide instructions and examples on how to use your application."
    },

    {
        name: 'contribution',
        type: 'input',
        message: "What is the title of your project?"
    },

    {
        name: 'test',
        type: 'input',
        message: "What is the title of your project?"
    },

    {
        name: 'license',
        type: 'list',
        message: "What license would you like to use for your application?",
        choices: [
            'Apple',
            'Orange',
            'Banana',
        ]
    },

    {
        name: 'gitHub',
        type: 'input',
        message: 'What is your GitHub user name?'
    },

    { 
        name: 'email',
        type: 'input',
        message: 'What is your email?'
    },
];

function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, err=> {
        if (err) {
            console.log(err)
        }
    })
}

function init() {
    inquirer.prompt(questions)
    .then(response => {
        console.log(response)
    })
}

init();