//  var arr = [3,  4,  2,  4];
//  //         t          
// //              
// function bubbleSort(arr){
//     for(let i=0; i<arr.length; i++){
//         for(j=0; j<arr.length-i-1; j++){    //harc i-1 inchi grecinq.u tenc krchatvec iteracian
//   console.log('*');

//   if(arr[j] > arr[j + 1]){
//    let temp = arr[j]
//    arr[j] = arr[j+1];
//    arr[j+1] = temp
//            }
//          }
//     }
// return arr
// }
// console.log(bubbleSort([3,  5,  2,  1]))




//1

// function prodOfadjecentElem(arr = []){
//   let prodItem = 0;
//   let multElemArr = []
// for(let i=0; i<arr.length; i++){
//   if(i !==arr.length - 1){
// multElemArr.push(arr[i] * arr[i+1])
//   }
// }
// return Math.max.apply(null, multElemArr);
// }
// prodOfadjecentElem([3,-3,  6, 7, 12, -1])

//2
// function countMissingNumbers(arr = []){
//     let maxItem = Math.max.apply(null, arr);
//     let minItem = Math.min.apply(null, arr);
//     let tempArr = [];
// for(let i = minItem; i <= maxItem - minItem + 1; i++ ){
//     tempArr.push(i);
// }
//      return tempArr.length - arr.length;
// }
// countMissingNumbers([8, 10, 1, 2, 3, 6, ])

//3
//  function convertAcronum(phrase =''){
//  phraseArr = phrase.split(' ');
//  let resArr = []
//    for(let i = 0; i< phraseArr.length; i++){
//        let firstLetter =phraseArr[i].charAt(0).toUpperCase();
//        resArr.push(firstLetter);
//    }
//    return resArr.join('');
//  }
// convertAcronum('sasa s   ddddd');


//4
// function contiguousSubstrings(str = '', n){
//  let tempArr = [];
// if(str.length < n){
//     return str;
// }
// for(let i=0; i<str.length; i++){
//     let item =str.slice(i, n+i);
//     if(item.length === n) {
//         tempArr.push(item);
//     }
// }
// return tempArr.join()
// }
// contiguousSubstrings('3214545454', 4);






//5
var arr = [
{ parent: null, id: 0 },    
{ parent: 0, id: 1 },
{ parent: 0, id: 2 },
{ parent: 1, id: 3 },
{ parent: 1, id: 4 },
{ parent: 2, id: 5 },
{ parent: 4, id: 6 },
];
// var arr = [
//     {'id':1 ,'parentid': 0},
//     {'id':2 ,'parentid': 1},
//     {'id':3 ,'parentid': 1},
//     {'id':4 ,'parentid': 2},
//     {'id':5 ,'parentid': 0},
//     {'id':6 ,'parentid': 0},
//     {'id':7 ,'parentid': 4}
//   ];



// let tree = {
//     0:{
//         1:{
//             3:{},
//             4:{
//                 6:{}
//             }
//         },
//         2:{
//             5:{}
//         }
//     }
// }
// console.log(tree)


////6
// var arr = [
//     { book: 'Catcher in the Rye', readStatus: true, percent: 40},
//     { book: 'Animal Farm', readStatus: true, percent: 20},
//     { book: 'Solaris', readStatus: false, percent: 90 },
//     { book: 'The Fall', readStatus: true, percent: 50 },
//     { book: 'White Nights', readStatus: false, percent: 60 } ,
//     { book: 'After Dark', readStatus: true, percent: 70 }
// ]
//    function sortbypercent(){
// return  arr.filter(obj => obj.readStatus? true: false) 
//         .sort((a, b)=> a.percent - b.percent);
// }
// sortbypercent(arr);



unflattenToObject = function(array, parentObj) {
    var tree = {};
    parentObj = typeof parentObj !== 'undefined' ? parentObj : {id: 0};
  
    var childrenArray = array.filter(function(child) {
      return child.parent == parentObj.id;
    });
  
    if (childrenArray.length > 0) {
      var childrenObject = {};
      // Transform children into a hash/object keyed on token
      childrenArray.forEach(function(child) {
        childrenObject[child.id] = child;
      });
      if (parentObj.id == 0) {
        tree = childrenObject;
      } else {
        parentObj['children'] = childrenObject;
      }
      childrenArray.forEach(function(child) {
        unflattenToObject(array, child);
      })
    }
  
    return tree;
  };
  

      
  
  tree = unflattenToObject(arr);
  console.log(tree)