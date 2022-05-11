const fs = require('fs');

fs.readFile('lecture.3/readme.txt',(err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
})