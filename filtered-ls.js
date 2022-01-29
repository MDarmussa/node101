

const fs = require('fs');
const file = process.argv[2];
fs.readFile(file, function callback(err, data){ 
     if (err) {
          console.log(err);
     } else {
          // let dataString = data.toString();
          // let splitFile = dataString.split('\n');
          // console.log(splitFile.length - 1) 
         const lines = data.toString().split('\n').length - 1;
         console.log(lines)

           
     }
});
