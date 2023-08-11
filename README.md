# SVG Logo Maker

## Description 
This tool allows for users to generate simple logos based on a a set of responses to a given set of prompts. The tool asks users to confirm the logo lettering, colors, and shape. Once the inputs are provided, the tool creates a svg file based on the answers. 

## Application Preview 

https://github.com/Roqieux/Logo-Maker/blob/main/ExampleVid.mp4

## Examples 
<img alt="Example Logo 1" src="https://github.com/Roqieux/Logo-Maker/blob/main/examples/example1.svg">
<img alt="Example Logo 2" src="https://github.com/Roqieux/Logo-Maker/blob/main/examples/example2.svg">
<img alt="Example Logo 3" src="https://github.com/Roqieux/Logo-Maker/blob/main/examples/example3.svg">

## Installation 

1. Navigate to your preferred local directory.
2. Click on the green code button and copy the link for the SSH key.
3. Enter in the command `git@github.com:Roqieux/Logo-Maker.git` . 
4. Enter your protected SSH password.
5. After download, navigate to your local directory with the new downloaded content and run

```bash
git clone git@github.com:Roqieux/Logo-Maker.git
cd logo-maker
npm install
```

## Usage 

To run the application, navigate to its directory using the command line, install dependencies (npm i), and run the command "node index.js". Answer the questions that follow and once done, a message will appear confirming the logo generation. Check the newly generated SVG file for your new logo.

For unit testing, refer to the Test Instructions section.

## Test Instructions

To perform unit testing, execute the command "npm run test" in the terminal. Currently, there is a single test suite containing three tests. This suite verifies that the render() method generates the correct string for the specified shape color in the associated SVG file.

## License

NOTICE: This application is covered under the MIT License

## Questions

Need more information? You can contact me through my LinkedIn or Email. Links provided below.

Click to Email -> [Email](mailto:larroquejl@gmail.com)
