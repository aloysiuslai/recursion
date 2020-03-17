// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    var arryOfVal = [];
    var objOfVal = [];
    //Cases for function and undefined;
    if (obj === undefined || obj === 'undefined' || obj === 'functions' || typeof(obj) === 'function') {
        return '';
    }
    // Cases for number, boolean, and null
    if (typeof(obj) === "number" || typeof(obj) === "boolean" || obj === null) {
        return "" + obj;
    }

    // Case for string
    if (typeof(obj) === "string") {
        return '"' + obj + '"';
    }
    if (Array.isArray(obj)) {
        obj.forEach(function(element) {
            arryOfVal.push(stringifyJSON(element));
        })
        return "[" + arryOfVal + "]"
    } else {
        // Case for object
        for (var key in obj) {
            var value = stringifyJSON(obj[key]);
            var stringOfKey = stringifyJSON(key);

            if (value + stringOfKey !== "") {
                objOfVal.push(stringOfKey + ':' + value);
            }
        }
        return '{' + objOfVal + '}'
    }

}