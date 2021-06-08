handler = {
    set(obj, prop, val) {
        if (!obj.hasOwnProperty(prop)) {
            throw `Can't set non-existing property.`;
        }
        // checking for every possible invalid input first
        if (prop == 'age') {
            if (typeof val != 'number')
                throw 'Age must be a number.';
            else if (val < 25 || val > 60)
                throw 'Age should be between 25 and 60.';
        } else if (prop == 'name') {
            if (typeof val != 'string')
                throw 'Name must be a string.';
            else if (val.length != 7)
                throw 'Name must be of 7 characters exactly.';
        } else {
            if (typeof val != 'string') 
                throw 'Address must be a string.';   
        }
        // then setting the value
        obj[prop] = val;
    },
    get(obj, prop) {
        if (prop in obj)
            return obj[prop];
        else
            throw `${prop} doesn't exist.`;
    } 
}
target = {
    name: 'OmarSal',
    addr: 'Tanta',
    age: 27
}

let p1 = new Proxy(target, handler)

//****  testing validation

// p1.age = 'asd'
// p1.age = 70
// p1.name = 534
// p1.name = 'qqqqq'
// p1.addr = 42345