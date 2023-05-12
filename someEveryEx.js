function hasOddNumbers(arr){
    return arr.some(function(value){
        return value % 2 !== 0;
    });
}

function hasAZero(num){
    return num.toString().split('').some(function(value){
        return value === '0';
    })
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(value){
        return value % 2 !== 0;
    });
}

function hasNoDuplicates(arr){
    return arr.every(function(value){
        return arr.indexOf(val) === arr.lastIndexOf(value);
    });
}

function hascertainKey(arr, key){
    return arr.every(function(value){
        return key in value;
    });
}

//changed (key) to [key], would parenthesis be incorrect since we are referencing an array here?

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
        return val[key] === searchValue;
    });
}