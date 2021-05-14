// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of the project? (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter the project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTableOfContents',
            message: 'Would you like to add a Table of Contents?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the installation instructions for the project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter install instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide content for the usage of the project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter usage content!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter any credits for the project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter credits for the project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a License?',
            default: false
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the license for the project.',
            choices: ['MIT License', 'GNU General Public License v3.0', 'Mozilla Public License 2.0', 'no license'],
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmBadges',
            message: 'Would you like to add any Badges?',
            default: false
        },
        {
            type: 'input',
            name: 'badges',
            message: 'Enter any Badges you would like to add.',
            when: ({ confirmBadges }) => {
                if (confirmBadges) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmFeatures',
            message: 'Would you like to list any features?',
            default: false
        },
        {
            type: 'input',
            name: 'features',
            message: 'List any features of the project.',
            when: ({ confirmFeatures }) => {
                if (confirmFeatures) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to provide contributing information?',
            default: false
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide any information for contributing to the project.',
            when: ({ confirmContributing }) => {
                if (confirmContributing) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to add any Tests?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any information on tests for the project',
            when: ({ confirmTests }) => {
                if (confirmTests) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your contact e-mail address? (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter your contact email!');
                    return false;
                }
            }
        }

    ])

};

questions()
    .then(answers => {
        const pageMarkdown = generateMarkdown(answers);
        console.log(answers);

        // TODO: Create a function to write README file
        fs.writeFile('./dist/README.md', pageMarkdown, err => {
            if (err) throw err;

            console.log('README complete! Check out README.MD to see the output!');
        });

    });
