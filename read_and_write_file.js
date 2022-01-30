// Read AND Write to a File
// Write a program to prompt the user for two file names, the first file will be the input and the 
// second file will be the output. The program will read in the contents of the input file, 
// convert its text to all caps, and then write the resulting contents to the output file.

const fs = require('fs');
const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
});

readline.question('input file: ', function(inputFile) {
     fs.readFile(inputFile, function(error, buffer) {
          if (error) {
               console.log(error.message);
               readline.close();
               return;
          }
          readline.question('Output file: ', function(outputFile) {
               readline.close();
               const content = buffer.toString();
               const upperCased = content.toUpperCase();
               fs.writeFile(outputFile, upperCased, function(error) {
                    console.log(error.message);
                    return;
               })
               console.log('wrote to file ', outputFile);
          })
     })
})