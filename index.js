// require fs
// require inquirer
const inquirer = require("inquirer");
const fs = require("fs");
const questions = [

        {
            type: "input",
            message: "What is your description?",
            name: "title",
        },

    {
        type: "input",
        message: "What is your description?",
        name: "description",
      },
      {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
      },
      {
          type: "input",
          message: "What are your instructions for use?",
          name: "usage",
        },
        {
          type: "input",
          message: "Who are your collaborators?",
          name: "credits",
        },
        {
          type: "input",
          message: "What is your licenses?",
          name: "license",
        },
        {
          type: "input",
          message: "What are your contribution guidelines?",
          name: "contributing",
        },
        {
          type: "input",
          message: "What tests were ran?",
          name: "tests",
        },
           {
          type: "input",
          message: "Questions?",
          name: "What email should projects be sent to?",
        },
    ];
    // inquirer.prompt method
    function init() {
      inquirer.prompt(questions).then(function (data) {
        console.log(data);
        //Write file called ReadMe
        fs.writeFile("sampleReadMe.md", generateMarkdown(data), function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("Success!");
        });
      });
    }
    //function call to initlialize
    init();
    
  
    