// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    var bodyHTML = document.body;
    var result = [];
    var containClass = function(bodyHTML) {
        if (bodyHTML.classList) {
            if (bodyHTML.classList.contains(className)) {
                result.push(bodyHTML);
            }
        }
        if (bodyHTML.hasChildNodes()) {
            for (var i = 0; i < bodyHTML.childNodes.length; i++) {
                containClass(bodyHTML.childNodes[i]);
            }
        }
    }
    containClass(bodyHTML);
    console.log(result);
    return result;
};