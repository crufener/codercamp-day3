function findMissingNumber(arr) {
    var len = arr.length;
    var num = [];
    for (var i = 0, j = 1; j <= len, i < len; i++, j++) {
        if (arr[i] + 1 < arr[j]) {
            num.push(arr[i] + 1);
        }
    }
    num.forEach(function (x) { return console.log(x); });
    return num;
}
var arr1 = [1, 2, 3, 5, 7, 8];
var arr2 = [1, 2, 4, 5, 6, 7, 8];
var arr3 = [1, 2, 3, 4, 5, 6, 8];
var arr4 = [1, 2, 3, 4, 6, 7, 8];
console.log(findMissingNumber(arr1));
console.log(findMissingNumber(arr2));
console.log(findMissingNumber(arr3));
console.log(findMissingNumber(arr4));
