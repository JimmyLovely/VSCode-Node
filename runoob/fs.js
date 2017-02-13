var fs = require('fs');

fs.readFile('txt/testFile.txt', function(err, data){
    if(err){
        return console.log(err);
    };

    console.log('Read file successfully! \n' + data.toString());
});

console.log('End');

fs.open('txt/addNewFile.txt', 'a+', function(err, fd){
    if(err){
        return console.log(err);
    }

    console.log('Open file successfully!');
});

fs.stat('txt/testFile.txt', function(err, stats){
    if(err){
        return console.log(err);
    };

    console.log('Read file successfully!'); 
    console.log(stats);

    console.log('isFile: ' + stats.isFile());
    console.log('isDirectory: ' + stats.isDirectory());
});
