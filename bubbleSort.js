let array = [10,50,40,60,20]
function bubbleSort(array){
    let swapped
    do {
        swapped = false
        for (let i = 0; i < array.length-1; i++) {
            if (array[i] > array[i+1]) {
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                swapped = true
            }    
        }  
    } while (swapped);

}
bubbleSort(array)
console.log(array);