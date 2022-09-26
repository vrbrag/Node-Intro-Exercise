const fs = require('fs')
const process = require('process')
const axios = require('axios')


function cat(path) {
   fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
         console.error(`ERROR reading ${path} : ${err}`)
         process.exit(1)
      } else {
         console.log('file contents: ', data)
      }
   })
}
// cat(process.argv[2])



async function webCat(url) {
   try {
      let res = await axios.get(url)
      console.log(res.data)
   }
   catch (err) {
      console.error(`ERROR fetching ${url}: ${err}`)
      process.exit(1)
   }
}
// webCat(process.argv[2])

let path = process.argv[2]
if (path.startsWith('http')) {
   webCat(path)
}
else {
   cat(path)
}