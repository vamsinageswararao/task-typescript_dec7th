//chunk function
var newArr3 = [];
var newArr4 = [];
var newArr5 = [];
function chunk(a, b) {
    for (var i = 0; i < b; i++) {
        newArr3.push(a[i]);
    }
    var g = newArr3;
    console.log(g);
    for (var i_1 = b; i_1 < a.length; i_1++) {
        newArr4.push(a[i_1]);
    }
    var h = newArr4;
    // console.log(h)
    newArr5.push(g);
    newArr5.push(h);
    return newArr5;
}
//reduce function in js
function reduce(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}
var result = reduce([1, 2, 3, 4]);
console.log(result);
//filter function in js
function filter(arr, filterFun) {
    var filterArr = [];
    // empty array     
    // loop though array  
    for (var i = 0; i < arr.length; i++) {
        var result_1 = filterFun(arr[i], i, arr);
        // push the current element if result is true   
        if (result_1)
            filterArr.push(arr[i]);
    }
    return filterArr;
}
var oddArr2 = filter([1, 2, 3, 4, 5, 6], function (num) { return num % 2 === 0; });
console.log(oddArr2);
//FIND FUNCTION IN JS
function filter1(arr987, filterFunc) {
    var filterArr12 = [];
    // empty array     
    // loop though array  
    for (var i = 0; i < arr987.length; i++) {
        var result_2 = filterFunc(arr[i], i, arr);
        // push the current element if result is true   
        if (result_2) {
            filterArr12.push(arr987[i]);
            break;
        }
    }
    return filterArr12;
}
var oddArr3 = filter1([5, 12, 8, 130, 44], function (num) { return num % 2 === 0; });
console.log(oddArr3);
//sum function in js
function sum234(digu) {
    var nwq = 0;
    for (var i = 0; i < digu.length; i++) {
        nwq += digu[i];
    }
    return nwq;
}
var thu = sum234([10, 2, 33, 56]);
console.log(thu);
//slice operator
var fruits = ['apple', 'mango', 'lemon', 'orange', 'kiwi'];
var newArr1 = [];
function foo(a) {
    for (var i = a; i < fruits.length; i++) {
        newArr1.push(fruits[i]);
    }
    return newArr1;
}
var e = foo(2);
console.log(e);
var newArr2 = [];
function foo1(a, b) {
    if (b === void 0) { b = null; }
    for (var i = a; i < fruits.length - 1; i++) {
        newArr2.push(fruits[i]);
    }
    return newArr2;
}
var fg = foo1(2, 4);
console.log(fg);
var hi = chunk(['a', 'b', 'c', 'd'], 3);
console.log(hi);
//find index of the array element
function findIndesx(a) {
    var count = 0;
    for (var i = 0; i < arr1.length; i++) {
        count++;
        if (arr1[i] == a) {
            //console.log(count-1)
            break;
        }
        count = 0;
    }
    return count - 1;
}
var arr1 = [1, 3, 4, 2, 3, 8];
var res = findIndesx(9);
console.log(res);
//Starts with 
var st = "abc";
function startsWith(uv, af) {
    if (af == st[0]) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
startsWith(st, 'b');
//Array reverse method in js
var arr = [1, 2, 3, 4];
var newArr = [];
for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
}
console.log(newArr);
