// Problem 3
function invertAnObject(obj) {

    let newObj = {};

    for(let key in obj) {
        let k = obj[key];

        if(newObj.hasOwnProperty(k)) {

            if(Array.isArray(newObj[k])) {
                newObj[k].push(key)
            } 
            else {
                let arr = [];
                arr.push(key);
                arr.push(newObj[k]);
                newObj[k] = arr;
            }	
        } 
        else {
            newObj[k] = key;
        }
    }
        return newObj;
    }
    
    let obj = { a: '1', b: '2', c: '2', d: '3', e: '2' , f: '3' };
    invertAnObject(obj);