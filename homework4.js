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
    let maxItem = Math.max.apply(null, arr);
    let minItem = Math.min.apply(null, arr);
    let tempArr = [];
for(let i = minItem; i <= maxItem - minItem + 1; i++ ){
    tempArr.push(i);
}
     return tempArr.length - arr.length;
}
countMissingNumbers([8, 10, 1, 2, 3, 6, ])

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




