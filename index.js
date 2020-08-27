const inquirer = require('inquirer');
const fs = require('fs');
var generateMardown = require('generateMarkdown.js');

inquirer
    // Prompt the user of README information
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
            message: 'Provide instructions and examples for use. Include screenshots if needed.',
            name: 'usage'
        },
        {
            type: 'checkbox',
            message: 'Choose a license',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL', 'ISC']
        },
        {
            type: 'input',
            message: 'Input badge code. (See https://shields.io for more info)',
            name: 'badge'
        },
        {
            type: 'input',
            message: 'Add guidelines for contributing',
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
        },
       
    ]).then(function(answers) {
        // To add links to the table of contents
        const { title, description, installation, usage, license, badge, contributing, tests, github, email } = answers;

        // README template literal
        const readMe = `# ${title}
        [GitHub License](${badge})

        ## ${description}

        ## *Table of Contents*

        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)

        ## Description
        ${description}

        ## Installation
        ${installation}

        ## Usage
        ${usage}

        ## License
        ${license}

        ## Contributing
        ${contributing}

        ## Tests
        ${tests}

        ## Questions
        For repository information visit ${github}
        And for additional questions, contact me at ${email}
        `
    })

    // Write the README file 


