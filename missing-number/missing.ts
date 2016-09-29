/*
Create a function that takes and array of numbers and finds the missing numberl
*/
function findMissingNumber(arr: number[]): number[] {
    var len: number = arr.length;
	var num: number[] = [];
    for (var i = 0, j = 1; j <= len, i < len; i++, j++) {
//if value + 1 at an index is less than the value at the next index, then push
// the value + 1 to num array
        if (arr[i] + 1 < arr[j]) {
            num.push(arr[i] + 1);
        }
    }
		num.forEach(x => console.log(x));
        return num;
}
let arr1: number[] = [1,2,3,5,7,8];
let arr2: number[] = [1,2,4,5,6,7,8];
let arr3: number[] = [1,2,3,4,5,6,8];
let arr4: number[] = [1,2,3,4,6,7,8];
console.log(findMissingNumber(arr1));
console.log(findMissingNumber(arr2));
console.log(findMissingNumber(arr3));
console.log(findMissingNumber(arr4));
