//question 1

function lowerCaseWords(mixedArray){
    return new Promise((resolve,reject) =>{
        if(!Array.isArray(mixedArray)){
            reject("Error: Input shpuld be a list");
        }else{
            // this is to create a new array to store our filtered result
            let newList =[];

            for(let i=0; i<mixedArray.length; i++){
                if(typeof mixedArray[i] === 'string'){
                    newList.push(mixedArray[i].toLowerCase());
                }
            }
            resolve(newList);
        }
    });
}

const mixedArray =["PIZZA",10,true,25,false, "Wings"];
lowerCaseWords(mixedArray)
  .then(newList => console.log(newList))
  .catch(error => console.error(error));