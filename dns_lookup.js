const dns = require('dns');
const { read } = require('fs');
const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout,
});

readline.question('Domain Name: ', function(url) {
     readline.close();
     dns.lookup(url, function(error, address) {
          if(error) {
               console.log(error.message);
               return;
          }
          console.log('IP address: ', address)
     })
})