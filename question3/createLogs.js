
const fs= require('fs');
const path= require('path');

const logsDirectory= path.join(__dirname, 'Logs');

function createLog(callback) {
    if(!fs.existsSync(logsDirectory)){
        fs.mkdirSync(logsDirectory);
}

for(let i=1; i<=10; i++){
   const logFile= path.join(logsDirectory, `log ${i}.txt`);
    fs.writeFileSync(logFile, `Log file ${i}.txt\n`);
    console.log(`Log file ${i}.txt created`);
    }
    callback();
}

function removeLogFiles() {
    if (fs.existsSync(logsDirectory)) {
        const files = fs.readdirSync(logsDirectory);

        files.forEach((file) => {
            const filePath = path.join(logsDirectory, file);
            fs.unlinkSync(filePath);  
            console.log(`${file} removed`);
        });

 
        fs.rmdirSync(logsDirectory);
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
}


createLog(removeLogFiles);     
  



