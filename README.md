# Noted
[![MIT License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description
Noted application uses Express.js back end and will save and retrieve note data from a JSON file. Application deployed in Heroku.

## My Links
[My Deployed Application Site](x)

[GitHub Repository](https://github.com/mewing0328/Noted)

## Table of Contents
[1. Installation](#installation)

[2. Usage](#usage)

[3. Demo](#demo)

[4. Contributing](#contributing)

[5. Tests](#tests)

[6. Questions](#questions)

[7. License](#license)

[8. Screenshots](#screenshots)

[9. Credits](#credits)

## Installation 
The application has dependencies (see package.json file). Before using the application, install npm modules.

```bash
npm install
```

## Usage 
The application will be invoked by using the following command:

```bash
node index.js
```

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

- the front end connects to an Express.js back end.
- the back end stores notes that have a unique id in a JSON file.
- deployed to Heroku
- BONUS: allows users to delete notes.

```
## Demo
[Link for demo video](x) (Length of video: x minutes and x seconds)

The video is also within the assets folder named "myTeam Demo.mp4".

A walkthrough video that demonstrates: 

<br>

## Contributing 
Contributions are welcomed for future versions with features such as:
- x
- additional enhancements

For all contributions, please refer to [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) for contributing guidelines.

<br>

## Tests 
The tests will be invoked by using the following command:
```bash
npm run test
```
As per [Jest wesbite](https://jestjs.io/), "Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly."

<br>

## Questions
Interested in seeing my other work?

Check out my GitHub account: [mewing0328](https://github.com/mewing0328).

If you have additional questions, please reach me at [masandraewing@gmail.com](mailto:masandraewing@gmail.com).

<br>

## License 
myTeam project is covered by MIT license. 

 To view the most current and full license description in opensource.org, click on the license name below.  

 [![MIT}](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<br>

 ## Screenshots 
Utilized Visual Studio Code

1. Demo of tests passed, node index initiating the application, index.html file created in the dist folder.

    <img src="./Assets/initiateSs.png" style="width:30rem">

2. Answer the questions within the terminal prompts - utilizes the [Inquirer 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4) package from [npm.Inc.].(https://www.npmjs.com/) to obtain the user inputs. THEN a profile is created.

    <img src="./Assets/profileSs.png" style="width:30rem">

3. User can start over and doing so will clear the index.html of employee profiles.

    <img src="./Assets/startoverSs.png" style="width:30rem">

4. After all questions are answered, the application pushes employee cards into the [HTML file](./dist/index.html) and applies the [CSS](./dist/style.css) styling to those cards. <br> <br>Screenshots to show responsive to screen size.

    <img src="./Assets/responsiveSs.png" style="width:30rem">
    <img src="./Assets/responsiveSmallSs.png" style="width:30rem">

5. When the user clicks on an email address in the HTML, the user's default email program opens and populates the TO field of the email with the address

    <img src="./Assets/emailSs.png" style="width:30rem">


6. When the user clicks on the GitHub username, then that GitHub profile opens in a new tab

    <img src="./Assets/githubSs.png" style="width:30rem">    

<br>

## Credits
Credit for tutorials and guides I utilized in my code

[npm](https://remarkablemark.org/blog/2021/08/28/how-to-create-npm-package-lockfile/): How to create a package-lock.json

[node.js](https://nodejs.dev/en/learn/writing-files-with-nodejs/): How to append to an existing file.

[inquirer npm](https://www.npmjs.com/package/inquirer): Inquirier to ask and get the user inputs.

[jestjs.io](https://jestjs.io/docs/getting-started): Jest documentation to create my test.js files

[Bootstrap](https://getbootstrap.com/): CSS styling

[Call the Superclass Constructor](http://www.beginwithjava.com/java/inheritance/calling-the-superclass-constructor.html): How to utilize the Employee constructor to the Engineer, Manager, and Intern js files.

[window.open](https://www.geeksforgeeks.org/how-to-open-url-in-new-tab-using-javascript/): Open the GitHub on a new page

[Open Email in Default Mail App](https://stackoverflow.com/questions/4994954/open-default-mail-client-with-a-link)

[pixabay](https://pixabay.com/): Images rendered on the html page

[pixabay](https://pixabay.com/users/ivke32-2526695/): This account for the icons for each employee card

[Adobe Logo Express Maker](https://express.adobe.com/express-apps/logo-maker): Utilized to create a custom logo for the application
