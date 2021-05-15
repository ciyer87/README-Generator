// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'no license'){
    return `![license](https://img.shields.io/badge/License-${license}-blue)`
  
}


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'no license'){
    switch(license){
      case 'MIT': 
          return `[${license}]('https://choosealicense.com/licenses/mit/')`;
      case 'GNU':
          return `[${license}]('https://choosealicense.com/licenses/gpl-3.0/')`;
      case 'Mozilla':
          return `[${license}]('https://choosealicense.com/licenses/mpl-2.0/')`;    
    }    
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== 'no license'){
    return `## License`
  }
}


function renderTableOfContents(contents){
  if(contents){
    return `
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Screenshots](#screenshots)
  * [Credits](#credits)
  * [License](#license)`
  }
}

function renderCredits(credits){
  if(credits !== ''){
    return `## Credits`
  }
}

function renderFeatures(features){
  if(features !== ''){
    return `## Features`
  }
}

function renderContributing(contribution){
  if(contribution !== ''){
    return `## Contributing`
  }
}

function renderTests(tests){
  if(tests !== ''){
    return `## Tests`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ## Description
  
  ${data.description}

 ${renderTableOfContents(data.confirmTableOfContents)}
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderCredits(data.credits)}
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ${renderFeatures(data.features)}

  ${renderContributing(data.contributing)}

  ${renderTests(data.tests)}

  ## Questions

  Please click[here](https://github.com/${data.github}/) for the GitHub profile page.
    For additional information please email ${ data.email }

      `;
}
module.exports = generateMarkdown;