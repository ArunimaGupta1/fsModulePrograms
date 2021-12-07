let fs = require("fs");

fs.unlink("demo1.txt",(err) =>{
    if(!err){
        console.log("File deleted successfully!");
    }
    else{
        console.log("No file detected");
    }
})