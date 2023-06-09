let array = [9,6,4,3,0,7]

function insertionSort(array){

    for (let i = 1; i < array.length-1; i++) {
         let numberToInsert = array[i]
         let j = i-1
         while (j>=0 && array[j] > numberToInsert) {
            array[j+1] = array[j]
            j = j-1
         } 
         array[j+1] = numberToInsert
    }

}

insertionSort(array)
console.log(array);