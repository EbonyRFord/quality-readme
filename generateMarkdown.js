







// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  const licenses = {
    "Apache-2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "BSD-2-Clause": "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg",
    "BSD-3-Clause": "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
    "GPL-2.0": "https://img.shields.io/badge/License-GPL%20v2-blue.svg",
    "GPL-3.0": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "ISC": "https://img.shields.io/badge/License-ISC-blue.svg",
    "MIT": "https://img.shields.io/badge/License-MIT-yellow.svg",
    "MPL-2.0": "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
    "Unlicense": "https://img.shields.io/badge/license-Unlicense-blue.svg",
  };

  const licenseURL = licenses[license];
  if (!licenseURL) {
    throw new Error(`Invalid license: ${license}`);
  }

  return `![License](${licenseURL})`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (!license) {
    return " ";
  }

  const licenses = {
    "Apache-2.0": "apache-2.0",
    "BSD-2-Clause": "bsd-2-clause",
    "BSD-3-Clause": "bsd-3-clause",
    "GPL-2.0": "gpl-2.0",
    "GPL-3.0": "gpl-3.0",
    "ISC": "isc",
    "MIT": "mit",
    "MPL-2.0": "mpl-2.0",
    "Unlicense": "unlicense",
  };

  const licenseLink = `[${license}](https://opensource.org/licenses/${licenses[license]})`;

  return "This project is licensed under the" + licenseLink + "license.";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (!license) {
  return " ";
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
 
  # Description of Project
  ${data.Description}

  #Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Resouces](#resources)
* [Tests](#tests)
* [Questions](#questions)


 #Installation Guide
  ${data.Installation}

  #Usage
  ${data.Usage}

  #Liscense
  ${data.License}

  #Resources
  ${data.Contributing}

  #Tests (Optional)
  ${data.Tests}

  ## If you have any questions regarding this project please contact: 
  ${data.Questions}


`;
}

module.exports = generateMarkdown;
