const inquirer = require("inquirer");
const fs = require("fs");
// var generateMardown = require('./generateMarkdown.js');

const questions = [
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Give a short description of your project",
      name: "description",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use. Include screenshots if needed.",
      name: "usage",
    },
    {
      type: "checkbox",
      message: "Choose a license (Use spacebar to select)",
      name: "license",
      choices: ["MIT", "Apache", "GPL", "ISC"],
    },
    {
      type: "input",
      message: "Input badge code. (See https://shields.io for more info)",
      name: "badge",
    },
    {
      type: "input",
      message: "Add guidelines for contributing",
      name: "contributing",
    },
    {
      type: "input",
      message: "Please provide code examples for testing",
      name: "tests",
    },
    {
      type: "input",
      message: "Please provide GitHUb username",
      name: "github",
    },
    {
      type: "input",
      message: "Please provide email address",
      name: "email",
    },
    {
        type: 'input',
        message: 'Enter names for your table of contents, seperated by a comma',
        name: 'contents'
    }
  ]

      inquirer  
        .prompt(questions).then(response => {
            console.log(response);
            fs.appendFileSync('newREADME.md', ('# ' + response.title) + '\n', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Success');
            });

            fs.appendFileSync('newREADME.md', ('![Build Status](' + response.badge + ')') + '\n', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Success');
            });

            fs.appendFileSync('newREADME.md', ('## Table of Contents' + '\n' + '- '  + response.contents.split(', ').join('\n' + '- ')) + '\n', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Success');
            });

            fs.appendFileSync('newREADME.md', ('## Description' + '\n' + response.description) + '\n', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Success');
            });

            fs.appendFileSync('newREADME.md', ('## Installation' + '\n' + response.installation) + '\n', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Success');
            });

            fs.appendFileSync('newREADME.md', ('## Usage' + '\n' + response.usage) + '\n', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Success');
            });

            fs.appendFileSync('newREADME.md', ('## License' + '\n' + response.license) + '\n', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Success');
            });

            fs.appendFileSync('newREADME.md', ('## Contributing' + '\n' + response.contributing) + '\n', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Success');
            });

            fs.appendFileSync('newREADME.md', ('## Testing' + '\n' + response.tests) + '\n', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Success');
            });

            fs.appendFileSync('newREADME.md', ('## Questions' + '\n' + 'For repository please visit https://github.com/' + response.github) + '\n', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Success');
            });

            fs.appendFileSync('newREADME.md', ('\n' + 'To contact me with further questions you can email me at: ' + response.email) + '\n', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Success');
            });
        });
