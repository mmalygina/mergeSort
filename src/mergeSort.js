const mergeSort = (arr) => {
    if(arr.length <= 1){
        return arr;
    }
    let m = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, m));
    const right = mergeSort(arr.slice(m));
    let res = [];
    while (left.length && right.length) {
        if(left[0] < right[0]){
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    if(left.length){
        console.log(left, ' remainder Right');
        res = res.concat(left);
    }
    if(right.length){
        console.log(right, ' remainder Left');
        res = res.concat(right);
    }
    return res;
}



module.exports = mergeSort;