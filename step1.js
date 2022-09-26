const fs = require('fs')
const process = require('process')

function cat(path) {
   fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
         console.log(`ERROR reading ${path} : ${err}`)
         process.exit(1)
      } else {
         // console.log(process.argv)
         console.log('file contents: ', data)
      }
   })
}

cat(process.argv[2])    // argv takes an array [0 ("node"), 1 ("program.js", 2 ("firstarg")]; Thus to run the first argument, "one.txt" use 2!

