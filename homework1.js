// 1
function largerXArr(arr, x){
	let resultArr =[];
	for(let i=0; i<arr.length; i++){
		  if(arr[i]> x){
		 resultArr.push(arr[i])
	   } 
	}
	if(resultArr.length!=0){
		console.log(resultArr);
	}else{
		console.log('Such values do not exist');
		}
	}
	largerXArr([10, 25, 16, -5, 30, 15, 24] , 16);


//2
    function returnEvenNumbers(a, b) {
        let evenNumbersArray = [];
     for (let i=a; i <= b; i++) {
            if (i % 2 === 0) {
                let digitsArray = i.toString().split("");
                 // every number is in array like a ['2, '0]
                if (digitsArray.every(isEven)) { //isEven callback function if two item is even '2' or ' 0'
					evenNumbersArray.push(i);
				}if(evenNumbersArray==false){
					return 'such numbers does not exsist';
				}
            }
        }
          return evenNumbersArray.join(', ');
    }
       function isEven(number) {
        if (number % 2 === 0) {
            return true;
        }
        return  false;
    }
console.log(returnEvenNumbers(19, 42));
console.log(returnEvenNumbers(99, 199));

	
	
	
//4

	function elemArr(arr=[], n=Infinity){
		if(arr.length===0){
			return n> 0 && n !==Infinity ? n : -1;

		}
		let d= arr.shift()
		let arg = d< n && d>=0? d: n;
		return elemArr(arr,arg);
	}
	console.log(elemArr([-9, -4, -4, 3, 3, 4, 5]))
	
	
	
	
	//5
	function  findUnSortIndex(arr){
		let tempArr =[]
		let result =0;
	for(let i=0; i<= arr.length; i++){
		if(arr[i+1] >= arr[i]){
		tempArr.push(arr[i])
		}if(arr[i] > arr[i+1]){
		break;
	  }
	}
	result= tempArr.length+1;
	if(result==arr.length){
		result=-1;
	}
	return result;
	}
	console.log(findUnSortIndex([2,3,8,9,4,10]))
	console.log(findUnSortIndex([-9, -4, -4, 3, 3, 4, 5]))
