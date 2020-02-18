let toBeSorted = [3, 2, 5, 4 ,1];

function selectionSort(toBeSorted) {
    let L_unsorted = toBeSorted
    let index = 0;

    for(let i = 0; i < L_unsorted.length; i++) {
        index = i
        for(let j = i+1; j < L_unsorted.length; j++) {
            if(L_unsorted[index] > L_unsorted[j]) {
                index = j
            }
        }
        if (index !== i){
            let temporary = L_unsorted[i];
            L_unsorted[i] = L_unsorted[index];
            L_unsorted[index] = temporary;
        }
    }
    return `sort:  ${L_unsorted}`
}

selectionSort(toBeSorted);
console.log(selectionSort(toBeSorted));