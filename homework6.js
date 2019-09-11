//1
   function binarySearch(arr, target){
 let firstIndex = 0, lastIndex = arr.length -1;
 while(firstIndex <= lastIndex){
   let midIndex = Math.floor((firstIndex + lastIndex)/2)
   if(arr[midIndex] === target){
     return midIndex;
   }else if(arr[midIndex] < target){
        firstIndex = midIndex + 1;
    } else{
        lastIndex = midIndex - 1;
    }
 }
 return 'do not found'
}
binarySearch([2, 4, 5, 6, 9, 10, 15, 16, 18, 20],  2)


//2  //solved but without recursion 
function subSets(arr, n){
  if( arr.length <=3 )return arr;
  let result = [];
 result.push([]);
 
 arr.forEach(function (item){
    let len = result.length;
    for(let i=0; i<len; i++){
      let newArr =result[i].slice(0);

      newArr.push(item);
      result.push(newArr)
    }
})
  return result.filter(elem => elem.length ===n)
  }
subSets([5, 9, 23 , 0,-2, -1], 3);
