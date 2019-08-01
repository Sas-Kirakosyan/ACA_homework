function removeFirstItem(arr=[], len){
   let res = []
    if(arr.length===0 || arr.length ===1){
        return arr;
    }
 len  = arr.length; 
  res.length = arr.length-1
  res[0] = arr[1];
res[len-2] = arr[len];

  
   res[1] =arr[2];
   res[2] =arr[3];
  //  chkaroxaca kazmel argoritm@ return [ arr[1], removeFirstItem([])]
  }   
     
 
                         //0   1   2   3
console.log(removeFirstItem([6, 78, 'n', 0]))
                             //[78, 'n', 0]
// arr.lenght = 4               0    1    2
//res.lenght = 3





//2****
function flatten(arr){
    let res =[]
    function helper(arr){
        for(let i=0; i< arr.length; i++){
            let item = arr[i];
           if(Array.isArray(item)){
               helper(item);
           }else{
           res.push(item);
           }
        }
    }
helper(arr)
return res;
}
console.log(flatten([1, 3, [2,[2,  [1,[2]], 5],5],3]))








//3**
function sumOfDigits(number=0){
 number = number.toString().split('');
let sum = 0;
for(let i=0; i< number.length; i++){
   sum+=Number(number[i]);
  }
if(sum >= 10){
return sumOfDigits(sum)
}else{
    return sum;
}

}
console.log(sumOfDigits(999999999999))




//4**
 function invert(obj) {
   var result = {};

  for (var key in obj) {
    if(obj.hasOwnProperty(obj[key])) {
        [].push(key)
    
    }
    result[obj[key]] = key
 }

  return result;
}
console.log(invert({a:'1', b:'2', c: '2'}))



