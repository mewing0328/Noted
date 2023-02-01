# Noted
[![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description
Noted application uses Express.js back end and will save and retrieve note data from a JSON file. Application deployed in Heroku.

## My Links
[My Deployed Application Site](https://noted-mewing0328.herokuapp.com/)

[GitHub Repository](https://github.com/mewing0328/Noted)

## Table of Contents
[1. Installation](#installation)

[2. Usage](#usage)

[3. Contributing](#contributing)

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

## Contributing 
Contributions are welcomed for future versions with features such as:
- x
- additional enhancements

For all contributions, please refer to [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) for contributing guidelines.

<br>

## Questions
Interested in seeing my other work?

Check out my GitHub account: [mewing0328](https://github.com/mewing0328).

If you have additional questions, please reach me at [masandraewing@gmail.com](mailto:masandraewing@gmail.com).

<br>

## License 
Noted project is covered by ISC license. 

 To view the most current and full license description in opensource.org, click on the license name below.  

 [![ISC}](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

<br>

 ## Screenshots 
Utilized Visual Studio Code

1. Demo of tests passed, node index initiating the application, index.html file created in the dist folder.

    <img src="./public/assets/media/x" style="width:30rem">

2. Answer the questions within the terminal prompts - utilizes the [Inquirer 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4) package from [npm.Inc.].(https://www.npmjs.com/) to obtain the user inputs. THEN a profile is created.

    <img src="./public/assets/media/x" style="width:30rem">

3. User can start over and doing so will clear the index.html of employee profiles.

    <img src="./public/assets/media/x" style="width:30rem">

4. After all questions are answered, the application pushes employee cards into the [HTML file](./dist/index.html) and applies the [CSS](./dist/style.css) styling to those cards. <br> <br>Screenshots to show responsive to screen size.

    <img src="./public/assets/media/x" style="width:30rem">
    <img src="./public/assets/media/x" style="width:30rem">

5. When the user clicks on an email address in the HTML, the user's default email program opens and populates the TO field of the email with the address

    <img src="./public/assets/media/x" style="width:30rem">


6. When the user clicks on the GitHub username, then that GitHub profile opens in a new tab

    <img src="./public/assets/media/x" style="width:30rem">    

<br>

## Credits
Credit for tutorials and guides I utilized in my code

[Bootstrap](https://getbootstrap.com/): CSS styling

[npm: Express](https://www.npmjs.com/package/express)

[npm: UUID](https://www.npmjs.com/package/uuid): Generate random ids 

[path in node.js](https://www.javascripttutorial.net/nodejs-tutorial/nodejs-path-module/#:~:text=in%20Node.js-,Node.,a%20core%20module%20in%20Node.): Guide for path

[pixabay](https://pixabay.com/): Images rendered on the html page

[Adobe Logo Express Maker](https://express.adobe.com/express-apps/logo-maker): Utilized to create a custom logo for the application

[heroku Docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true): Guide to integrate Noted repo with Heroku
