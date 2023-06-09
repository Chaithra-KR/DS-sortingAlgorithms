let array = [20,10,70,50,34]

function mergeSort(array){
    if (array.length < 2) {
        return array
    }
    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sortedArray = []
    while (left.length && right.length) {
        if (left <= right) {
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}

console.log(mergeSort(array));