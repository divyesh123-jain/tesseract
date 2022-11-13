const T = require("tesseract.js")

T.recognize('./001.pdf','eng', {logger: e => console.log(e) })
 .then(out => console.log(out))