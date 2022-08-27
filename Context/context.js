/**
 * JavaScript Context Examples
 */
'use strict';

/***************Default or Global Context*****************/
console.log(this);

/***************Function Context**************************/

function contextDemo() {
    console.log(this); // window in non strict mode
}
contextDemo();

/***************Function as Method************************/
var obj = {
    name: 'caller obj',
    displayContext: function() {
        console.log(this);
    }
};
obj.displayContext();

/***************Dynamically Setting Context***************/
var customContext = { name: 'custom context' };
contextDemo.call(customContext);


