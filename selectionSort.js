let array = [9,8,7,6,5,4]

function selectionSort(array){
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] <  array[minIndex]) {
                minIndex = j
            }            
        }
        if (minIndex !== i) {
            let temp = array[i]
            array[i] = array[minIndex]
            array[minIndex] = temp
        }        
    }
    return array
}
console.log(selectionSort(array));