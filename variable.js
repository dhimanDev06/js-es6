// Var, Let and Const
// scope

const scope = 6; // ---> Global scope
if(true)
{
    // ----> Block scope
}


function name() {
    // ----> Function Scop
}

{
    var a = 22; ////const and let try
}
console.log(a); //const and let accessable outside block scope

//shadowing
function test() {
    let a = "hello"
    var b = 12
    const c = 1
    if(true){
        const a = "world"
        let b = 11 ; // it will shadow var b
        // var c = 2 it will unable to shadow c, bcoz var unable to shadow const and let
        let c = 2;
        console.log(a,b, c);
    }
    console.log(a);
}
test()



// Declaration

{

var a = 1;
var a = 2;
console.log(a);

let b = 2;
// let b = 3 Identifier 'b' has already been declared (with let)
const c = 3
// const c = 4  Identifier 'c' has already been declared (with const)

}

// Declaration without value

{
//const a; // Missing initializer in const declaration
let a;
a = 4
console.log(a);
// Declaration without value possibale with let and var
}


// Re-Initialisation

{
    var a = 2;
    a = 4;
    console.log(a)


    let b = 3;
    b = 6;
    console.log(b);

    const c = 5;
    //c = 6; //  Assignment to constant variable.
    console.log(c);

    const obj = {
        name:'Dhiman'
    }

    obj.name = 'Suman' // Re-Initialisation possible with constant variable with Object
    console.log(obj);
}

// Hoisting

function hoistingVar() {
    a = 3;
    console.log('hoisting var ',a);
    var a;// = 3;
}
hoistingVar()

function hoistinglet() {
    // a = 3;
    console.log('hoisting let ',a); // Cannot access 'a' before initialization but in Temporal Dead Zone
    let a = 3;
}
hoistinglet()

function hoistingConst() {
    // a = 3;
    console.log('hoisting const ',a); //  Cannot access 'a' before initialization but in Temporal Dead Zone
    const a = 3;
}
hoistingConst()