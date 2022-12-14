/**
 * JavaScript Scope Examples
 */

var one = 1; // global scope

console.log(one);

function limitAccess() {
    var two = 2; // local or function scope
    
    if (true) {
        const three = 3; // block scope
        console.log(three);
    }

    function limitAccessInner() {
        var four = 4; // nested scope
        console.log(four);
    }
    limitAccessInner();
    
    console.log(one); // accessible bcoz JavaScript scope is Lexical
    console.log(two);
    // console.log(four); // reference error bcoz of nested scope
    // console.log(three); // reference error bcoz of block scope
}

limitAccess();
