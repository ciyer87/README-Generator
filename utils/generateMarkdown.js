// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'no license'){
    return '';
  }
  return `![license](https://img.shields.io/badge/License-${license}-blue)`
  }

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'no license'){
    return ''
  }
  switch(license){
    case 'MIT': 
      return `[${license}]('https://choosealicense.com/licenses/mit/')
      A short and simple permissive license with conditions only requiring preservation of 
      copyright and license notices. Licensed works, modifications, and larger works may be 
      distributed under different terms and without source code.`;
    case 'GNU':
      return `[${license}]('https://choosealicense.com/licenses/gpl-3.0/')
      Permissions of this strong copyleft license are conditioned on making available complete 
      source code of licensed works and modifications, which include larger works using a 
      licensed work, under the same license. Copyright and license notices must be preserved. 
      Contributors provide an express grant of patent rights.`;
    case 'Mozilla':
      return `[${license}]('https://choosealicense.com/licenses/mpl-2.0/')
      Permissions of this weak copyleft license are conditioned on making available source code 
      of licensed files and modifications of those files under the same license (or in certain cases, 
      one of the GNU licenses). Copyright and license notices must be preserved. 
      Contributors provide an express grant of patent rights. However, a larger work using the 
      licensed work may be distributed under different terms and without source code for files 
      added in the larger work.`;    
  }    
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === 'no license'){
    return '';
  }
  return `## License`
}

//function that return table of contents
function renderTableOfContents(contents){
  if(contents){
    return `
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Questions](#qestions)
  `
  }
  return '';
}

//function that returns credits, if applicable
function renderCredits(credits){
  if(!credits){
    return '';
  }
  return `## Credits

  ${credits}`

}

//function that returns features, if applicable
function renderFeatures(features){
  if(!features){
    return '';
  }
  return `## Features

  ${features}`
   
}

//function that returns contributing content, if applicable
function renderContributing(contributing){
  if(!contributing){
    return '';
  }
  return `## Contributing

  ${contributing}`
  
}

//function that returns tests, if applicable
function renderTests(tests){
  if(!tests){
    return '';
  }
  return `## Tests

  ${tests}`
  
}


// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}

  ${renderTableOfContents(data.confirmTableOfContents)}
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderCredits(data.credits)}
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ${renderFeatures(data.features)}

  ${renderContributing(data.contributing)}

  ${renderTests(data.tests)}

  ## Questions

  [Contact me](${data.email})

  [GitHub](https://github.com/${data.github})

      `;
}
module.exports = generateMarkdown;