// Inquirer (npm) import
const inquirer = require("inquirer");

// File system module (npm) import
const fs = require("fs");

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");

// Writing svg file using user inputs and string
function writeToFile(fileName, answers) {  

    let shapeString = "";
    
    // <g> tag concat and create 
    shapeString =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    shapeString += "<g>";
    
    // User input insert
    shapeString += `${answers.shape}`;
  
    // Conditional check from choices and adds polygon properties
        let shapeChoice = "";
    if (answers.shape === "Triangle") {
      shapeChoice = new Triangle();
      shapeString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Square") {
      shapeChoice = new Square();
      shapeString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
      shapeChoice = new Circle();
      shapeString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }
  
    // <text> tag and user answers input to create logo lettering. 
    shapeString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

    shapeString += "</g>";
    shapeString += "</svg>";
  
    // Using file system module to create svg file
    fs.writeFile(fileName, shapeString, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  }


// Inquirer prompts the user to answer questions in the command line and save user input
function promptUserQuestions() {
  inquirer
    .prompt([

      // Text prompt
      {
        type: "input",
        message:
          "Provide up to a three letter logo title.",
        name: "text",
        // Error handling for text prompt (user must enter 3 characters or less for logo to generate)    
        validate(value) {
            const pass = value.length;
            if (pass < 4 ) {
                return true;
            }
            return 'Logo title must be 3 characters or less.'
        },
      },

      // Text color 
      {
        type: "input",
        message:
          "Choose a text color (Enter color keyword OR a hexadecimal number).",
        name: "textColor",
      },

      // Shape prompt 
      {
        type: "list",
        message: "What shape logo would you like?",
        choices: ["Circle","Square","Triangle"],
        name: "shape",
      },

      // Shape color 
      {
        type: "input",
        message:
          "Choose a shape color (Enter color keyword OR a hexadecimal number).",
        name: "shapeBgColor",
      },

    ])

    .then((answers) => {        
        writeToFile("logo.svg", answers);
      });
}

// Calling promptUserQuestions function
promptUserQuestions();