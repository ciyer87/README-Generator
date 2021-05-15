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
            type: 'list',
            name: 'license',
            message: 'Select the license for the project.',
            choices: ['MIT', 'GNU', 'Mozilla', 'no license'],
            
        },
        

        {
            type: 'input',
            name: 'features',
            message: 'List any features of the project.',
         
        },
    
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide any information for contributing to the project.',
          
        },
      
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any information on tests for the project',
        
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
