let fs = require('fs');
//reading files
fs.readFile('./docs/data.txt', (err, data)=>{
    if(!err){
        console.log(data.toString())
    }else{
        console.log(`some thing went wrong => ${err}`)
    }
})
//writing file
fs.writeFile('./docs/data.txt', 'hello!! data modified', ()=>{
    console.log('successfully written')
})
fs.writeFile('./docs/datacreation.txt', 'hello!! new data file created', ()=>{
    console.log('created file')
})

//creating directory 

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(!err){
            console.log("folder craeted successfully")
        }else{
            console.log(err)
        }
    })
}else{
 
     fs.rmdir('./assets', (err)=>{
         if(!err){
             console.log("folder deleted successfully")
         }else{
             console.log(err)
         }

     })

}


//deleting file 
if(fs.existsSync('./docs/deleteme.txt')){
       fs.unlink('./docs/deleteme.txt', (err)=>{
                if(!err){
                     console.log("deleted suuccess fully")
                }else{
                    console.log(err)

                }
       })
}else{
    fs.writeFile('./docs/deleteme.txt','',(err)=>{
        if(!err){
            console.log("created deleteme.txt file")
        }else{
            console.log(err)
        }
    })
}


