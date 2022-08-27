// Question 1
// what function Declaration ?
{
function square(n) {
    return n * n;
}
console.log(square(5))
}

// Question 2
// what function Expression ?
{
    const square = function(n) { // anonymous function
        return n * n;
    }
    console.log(square(5))
}

// Question 3
// what is First class function ?
{

    function square(n) {
        return n * n;
    }

    function displaySquare(nm) { // First class function, we call funcation name as param
        console.log("square is "+ nm(5));
    }

    displaySquare(square)
}

// Question 4
// what is Immediately invoked function expression (IIFE)
{
    (function square(n) {
        console.log("IIFE ",n * n);
    })(5)

}


// Qestion 5
// what will be the out put
{
    var num1 = 5, num2 = 6, srt = 'dhiman';
    function multiplyNum() {
        console.log(srt,num1 * num2); //dhiman 30
    }
    multiplyNum();

    function testMulti() {
        var num1 = 10, num2 = 12;
        function action() {
            console.log(srt,num1 * num2);//dhiman 120
        }
        action();
    }
    testMulti();
}

// Qestion 6
// what will be the out put
{
    var afun = function () {
        for (var i = 0; i < 5; i++) {
          setTimeout(() => {
            function name() {
              console.log("var ->",i)
            }
            name();
          }, i*1000);
        }

        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
              function name() {
                console.log("let ->",i)
              }
              name();
            }, i*1000);
          }
      }
      
    //   afun();
}

// Question 7
// Funtion Hoisting
{

    funHoisting()    
    console.log(a); // undefined
    function funHoisting() {
        console.log(a);
        var a = 1;   
        console.log('function Hoisting');
    }
    var a = 1;
}

// Question 8
// Funtion Hoisting base output
{

    funHoisting()   
    var a = 1;
    function funHoisting() {
        console.log("inside funHoisting",a); // undefined
        var c = 1;   
    }

}

// Question 8
// Params Vs Argument
{
    multiply(5) // Argument
    function multiply(num){ // Params
        console.log(num * num);
    }

    let val = [5,6]
    multiplyTwoNum(...val) // Spread operator
    function multiplyTwoNum(...nums){ // Rest operator
        console.log('multiplyTwoNum',nums[0] * nums[1]);
    }

}


// Question 9
// Callback funtion
{
    var p1ele = document.getElementById('p1');
    function changeText() {
        p1ele.innerHTML = "Hello"
    }
    p1ele.addEventListener('click',changeText); // changeText is a callback function
}

// Question 10
// Arrow funtion
var  aaa = 4 // global vaiable
{
    let arrow = (a,b) => {
        console.log('Arrow funtion',a*b*this.aaa);
    }
    arrow(2,3);
}
// Question 11
// Arrow funtion vs Normal function
{

    console.log("Arrow funtion vs Normal function");
    function nfuc() {
        console.log(arguments); // only applicable on normal function
    }
    nfuc(1,2,3,4);

    let afunc = ()=>{
        // console.log(arguments); // arguments is not defined, arguments not support on Arrow funtion
    }

    afunc(1,2,3,4);


    function nfuc1(ax,b) {
        var ax = 11;
        console.log("this ->",this); // only applicable on normal function
    }
    nfuc1(1234,2)

    let afunc1 = (a,ax)=>{
        var ax = 11;
        console.log("this =>",this); // it will disply global b;
    }
    afunc1(1,2)

    let user = {
        name:'dhiman',
        age:32,
        getDetailsA : () => {
            console.log('this 1',this); // this inside arrow funtion
        },
        getDetailsN ()  {
            console.log('this 2',this); // this inside normal funtion
        },
        childA : ()=> {
            const nestedArrow = () =>{
                console.log('this 3',this); // this inside arrow funtion nested arrow funtion
            }
            nestedArrow()
        },
        childN () {
            const nestedArrow = () =>{
                console.log('this 4',this); // this inside normal funtion nested arrow funtion
            }
            nestedArrow()
        }
    }
    user.getDetailsA()
    user.getDetailsN()
    user.childA()
    user.childN()
}