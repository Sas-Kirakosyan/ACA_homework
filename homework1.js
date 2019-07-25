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

//2@ u 3@ chkaroxaca lucel. 

	
	
	
//4
//xndir@ lucvac e kisat , uxxaki veradarcnum e  zangvaci min element@
function minElement(arr){
	if (arr.length == 1)
			return arr[0];
		if (arr[0] < arr[1])
			arr[1] = arr[0];
		arr = arr.splice(1);
		return minElement(arr);
	}
	
	console.log(minElement([45, -9, 15, 5, -3,  -78]))
	
	
	
	
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