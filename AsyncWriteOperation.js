//load the module
let fs = require("fs");
let message = "Welcome again and again\n";

function storeData(){
fs.writeFile("demo1.txt",message,{flag:"a+"},(err) =>{
    if(!err){
        console.log("Information stored in file successfully");
    }
    else{
        console.log(err);
    }
});
}

setTimeout(storeData,2000);
console.log("Finished");
console.log("Finished");
console.log("Finished");