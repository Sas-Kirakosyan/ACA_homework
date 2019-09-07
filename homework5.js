
//1
var units = ["zero", "one", "two", "three", "four", "five", "six",
 "seven", "eight", "nine", "ten", "ileven", "twelve", "thirteen", "fourteen",
 "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

 var tens =["","", "twenty", "thirty", "forty", "fifty",
  "sixty", "seventy", "eighty", "ninety"];


function spellOutNumber(num ){
if(num<=19 && num>=0){
  return units[num];
}
let intNumbers = num.toString().split('');

if(num>19 && num< 100 && intNumbers[1] !=='0'){  
  console.log(intNumbers)      
 return tens[intNumbers[0]] + ' ' + units[intNumbers[1]];
    }
if(num>19 && num< 100 && intNumbers[1] ==='0'){ 
console.log(intNumbers)
    return tens[intNumbers[0]] 
  }

if(num >= 100 && num < 1000 && intNumbers[1] > 0 && intNumbers[1] < 2 && intNumbers[1] != '0'){
intNumbers[1] = '' + intNumbers[1] + intNumbers[2];
intNumbers.pop();
  return units[intNumbers[0]] + ' ' + 'hundred' + ' ' + units[intNumbers[1]];
   }

if(num >= 100 && num < 1000  && intNumbers[1] === '0' && intNumbers[2] != '0' ){
intNumbers.splice(1,1);
return units[intNumbers[0]] + ' ' + 'hundred' + ' ' + units[intNumbers[1]];
}

if(num >= 100 && num < 1000  && intNumbers[1] === '0' && intNumbers[2] === '0'){
  return units[intNumbers[0]] + ' ' + 'hundred';
}

if(num >= 100 && num < 1000 && intNumbers[1] >=2  && intNumbers[2] != '0'){
 return units[intNumbers[0]] + ' ' + 'hundred' + ' ' + tens[intNumbers[1]] + ' ' + units[intNumbers[2]];
}

if(num >= 100 && num < 1000 && intNumbers[1] >= 2 && intNumbers[2] === '0'){
  intNumbers.pop()
  return units[intNumbers[0]] + ' ' + 'hundred' + ' ' + tens[intNumbers[1]];
}

}
spellOutNumber(800);  // I solved this exersize untill 999

//2
function subSets(arr){
if( arr.length <=3 )return arr;
let result = [];
result.push([])
arr.forEach(function (item){
  let len = result.length;
  for(let i=0; i<len; i++){
    let newArr =result[i].slice(0);
    newArr.push(item);
    result.push(newArr)
  }
   
})
return result.filter(elem => elem.length ===3)
}
subSets([5, 9, 23 , 0,-2, -1]);

//3
function selectCorrectSublist(str, arr){
 let strSorted = str.split('').sort().join('')
 let arrSorted = arr.map(item=> item.split('').sort().join(''))

const result =  arrSorted.filter((item)=> item===strSorted? true: false);
       return result;
}
selectCorrectSublist('listen', ['enlists', 'google', 'inlets', 'banana']);

//4
function multNegativeItems(arr = []){
 const checkisArray =  arr.every(itemArr => {
   if(Array.isArray(itemArr)){
   return true;
   }else{return false}
 })

 if(!checkisArray){return 'Invalid Argument'}
  const filtNegativeArr = arr.map((subArr) => subArr.filter(item => item < 0 ))
 
  const checkisNegativArr = filtNegativeArr.filter(array => array.length === 0? false: true );
  if(checkisNegativArr.length === 0){return 'No negativs'}
  
   const findMaxNegativeItem = filtNegativeArr.map(subNegativeArr =>{
     if(subNegativeArr.length === 0)   {return 1};
   return Math.max(...subNegativeArr)
      
   })
   const result =findMaxNegativeItem.reduce((acc, item) =>  acc * item );
   if(checkisArray){
     return result
   } 
 
  }
  multNegativeItems([[1,23]]);




