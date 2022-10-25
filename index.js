// adding packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// questions that will be displyed in the CLI   
const questions = [

    {
        name: 'title',
        type: 'input',
        message: "What is the title of your project?"
    },

    {
        name: 'discription',
        type: 'input',
        message: "What is the discription for your project?"
    },

    {
        name: 'installation',
        type: 'input',
        message: "What are the installation instructions for your projects?"
    },

    {
        name: 'usage',
        type: 'input',
        message: "What is the usage information for your project?"
    },

    {
        name: 'contribution',
        type: 'input',
        message: "What are the contribution guidelines for your project?"
    },

    {
        name: 'test',
        type: 'input',
        message: "What are the test instructions for your project?"
    },

    {
        name: 'license',
        type: 'list',
        message: "What license do you want for your project?",
        choices: [
            'Apache 2.0',
            'BSD 3-Clause',
            'MIT',
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
        message: 'What is your email address?'
    },
];

// generate README.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}


function init() {
    inquirer
        .prompt(questions)
        
        .then(answers => {
        markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
    });
}

init(); 