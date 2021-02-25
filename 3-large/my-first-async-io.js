const fs = require('fs')
const file = process.argv[2];

fs.readFile(file, {encoding:"utf8"} , (err, contents) => {
    if (err) {
        return console.log(err)
    };
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)
});
