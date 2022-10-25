// will render license badge
function renderLicenseBadge(license) {
  licenses = {
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'BSD 3-Clause': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg'
  }

  if (!(license in licenses)) {
    return '';
  }

  return licenses[license];
}

// will render licence link
function renderLicenseLink(license) {
  licenses = {
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'MIT': 'https://opensource.org/licenses/MIT'
  }

  if (!(license in licenses)) {
    return '';
  }

  return licenses[license];
}


function renderLicenseSection(license) {
  badge = renderLicenseBadge(license);
  link = renderLicenseLink(license);

  if (badge === '' || link === '') {
    return '';
  }

  return `
[![${license}](${badge})](${link})
  `;
}
// generate markdown
function generateMarkdown(data) {
  license = renderLicenseSection(data.license);
  return `# ${data.title}
  ${license}

## Description
---------------------------------
${data.discription}

## Table of Contents
---------------------------------
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation
----------------------------------
${data.installation}

## Usage
----------------------------------
${data.usage}

## License
----------------------------------  
Licensed under the  ${license}

## Contributing
----------------------------------
${data.contribution}

## Tests
----------------------------------
${data.test}

## Questions
----------------------------------
For more information, visit my GitHub profile at: https://github.com/${data.gitHub}
Or feel free to email me at: ${data.email}
`;

}


module.exports = generateMarkdown;