//1

function prodOfadjecentElem(arr = []){
  let prodItem = 0;
  let multElemArr = []
for(let i=0; i<arr.length; i++){
  if(i !==arr.length - 1){
multElemArr.push(arr[i] * arr[i+1])
  }
}
return Math.max.apply(null, multElemArr);
}
prodOfadjecentElem([3,-3,  6, 7, 12, -1])

//2
function countMissingNumbers(arr = []){
const sortArr = arr.sort((a, b)=> a-b);
let len =arr.length;
return sortArr[len-1]-sortArr[0]- len+1;
}
countMissingNumbers([8, 10, 1, 2, 3, 6,12]);

//3
 function convertAcronum(phrase =''){
 phraseArr = phrase.split(' ');
 let resArr = []
   for(let i = 0; i< phraseArr.length; i++){
       let firstLetter =phraseArr[i].charAt(0).toUpperCase();
       resArr.push(firstLetter);
   }
   return resArr.join('');
 }
convertAcronum('sasa s   ddddd');


//4
function contiguousSubstrings(str = '', n){
 let tempArr = [];
if(str.length < n){
    return str;
}
for(let i=0; i<str.length; i++){
    let item =str.slice(i, n+i);
    if(item.length === n) {
        tempArr.push(item);
    }
}
return tempArr.join()
}
contiguousSubstrings('3214545454', 4);
//5
//using foor loop
function tree(arr){
  let point = {};
  let global = {};
   arr.forEach(item => global[item.id] = {});
   arr.forEach(item => {
     if(item.parent === null){
        point[item.id] = global[item.id]; 
     }else{
      global[item.parent][item.id]  = global[item.id]
     }
   })
   return point;
}
console.log(tree(arr))

////6
var arr = [
    { book: 'Catcher in the Rye', readStatus: true, percent: 40},
    { book: 'Animal Farm', readStatus: true, percent: 20},
    { book: 'Solaris', readStatus: false, percent: 90 },
    { book: 'The Fall', readStatus: true, percent: 50 },
    { book: 'White Nights', readStatus: false, percent: 60 } ,
    { book: 'After Dark', readStatus: true, percent: 70 }
]
   function sortbypercent(){
return  arr.filter(obj => obj.readStatus? true: false) 
        .sort((a, b)=> a.percent - b.percent);
}
sortbypercent(arr);




