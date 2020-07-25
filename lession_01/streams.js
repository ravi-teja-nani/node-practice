let fs = require('fs');

let readStream = fs.createReadStream('./streamfiles/data1.txt', {encoding: 'utf8'});;

let writeStream = fs.createWriteStream('./streamfiles/data2.txt')

readStream.on('data', (chunk)=>{
    console.log('---NEW CHUNK---');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n')
    writeStream.write(chunk)

})

//piping

readStream.pipe(writeStream);