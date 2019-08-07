//1**
//Hi Gevorg jan I have just fixed mistakes that you had noticed. But 1 exersise I can't check for a bad cases.
function multNegativeItems(arr){
const filtNegativeArr = arr.map((subArr) => subArr.filter(item => item < 0 ))
 const findMaxNegativeItem = filtNegativeArr.map(subNegativeArr =>{
   if(subNegativeArr.length ===0)   {return 1};
return  Math.max.apply(Math, subNegativeArr) 
 })
return findMaxNegativeItem.reduce((acc, item) =>  acc * item )
}
multNegativeItems([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]);
                                                


//2**
function checkNumOrString(arr){
 const isNum = arr.filter( item => {
        if(typeof item ==='number'){
            return true;
        }
     });
const isStr = arr.filter( item => {
        if(typeof item ==='string'){
            return true;
        }
     })
return `Numbers: ${isNum.length}, Strings: ${isStr.length}`
}
checkNumOrString(['1', '10', 'hi', 0, 3, 9])



//3**
const sumOfArray = (arr) =>{
   return arr.map((subArr) => subArr.reduce((acc, item) => acc +item));

}
sumOfArray([[6, 6, 5], [6, 4, 2], [2,3]]);


//4**
function deleteEvenMultArrLength(arr){
const filterArr =  arr.filter(item => item % 2 !== 0? true: false);
 let filtArrlen = filterArr.length;
const MultArrLength = filterArr.map( elem => elem*filtArrlen);
   return MultArrLength;
}
deleteEvenMultArrLength([5, 4, 78, 0, -3, 7])

//5**
function conteinElementOnce(arr){
 return  arr.filter ((item, index) => arr.indexOf(item) >= index);
};
conteinElementOnce([3, 1, 2,  3, 2, 5])

//6**
function multNeighboursElem(arr){
let resultArr = [];
   arr.reduce((acc, item, i, array) => {
       resultArr[i] = array[i] * array[i+1];
   },0)
   resultArr.pop();
   return resultArr
}

multNeighboursElem([3, 7, 12, 5, 20, 0]);








