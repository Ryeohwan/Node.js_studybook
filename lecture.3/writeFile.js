const fs = require('fs').promises;

fs.writeFile('lecture.3/writeme.txt', '글이 입력됩니다')
    .then((data) => {
        return fs.readFile('lecture.3/writeme.txt')

    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });