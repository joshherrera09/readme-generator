const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Give a short description of your project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Please provide instructions and examples for use. Include screenshots if needed.',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'Which license would you like to use?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL', 'ISC']
        },
        {
            type: 'input',
            message: 'Please list all project contributors',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Please provide code examples for testing',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'Please provide GitHUb username',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Please provide email address',
            name: 'email'
        }
    ])
