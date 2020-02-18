function merge(...args) { //...args - Creates an array

    let result = {}
    for(let obj of args){ // gives the objects of ...args
        console.log(obj) 
        let objKeys = Object.keys(obj) // gives the keys from obj to objKeys
        for(let key of objKeys) { // gives the key from objKeys
            console.log(key)
            if(!result.hasOwnProperty(key)) { //.hasOwnProperty checks what is inside the Object
            result[key] = obj[key] // 
            }
        }

    }
    return result;
}

console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 }))
