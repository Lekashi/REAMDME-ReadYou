// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
 return `# ${data.title}
***
## Description
${data.description}
***
## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
***
## Usage
${data.purpose}
***
## Contributing User(s)
${data.username}
***
## License
${data.license}
***
## Questions
https://github.com/${data.username}
email:${data.email}`;
c
  return `# ${data.title}`;
}

module.exports = generateMarkdown;
