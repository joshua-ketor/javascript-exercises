const removeFromArray = function(arr, ...otherArgs) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < otherArgs.length; j++) {
            if(otherArgs.includes(arr[i])) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
