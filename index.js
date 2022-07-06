// Js make private property

class test1 {
  a = 2;
  #b = 3;
  static c = 4;
}


let t1 = new test1();
console.log(t1.a); //it will show 2 
console.log(t1.b); //undefined
console.log(t1.c); //undefined


// Js new feature .at()

let arr = [1, 2, 4, 6, 7, 3];

console.log(arr.at(0)); //1
console.log(arr.at(-1)); //2
// It is similar to the array[index] but is not able to be used on the -1 index as like as arrary[-1]


// import fetch from 'node-fetch';

const loadData = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err);
  }
}

//const data = await 
loadData().then(res => console.log(res));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("1", "2");
console.log('unshift exaple ', fruits);

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.push("1", "2");
console.log('push exmpale ', fruits1);


console.log('Jvascript Curring')

function table(a) {
  return function(b){
    return function (c) {
      return a * b * c;
    }
  }
}

let t = new table(8);
console.log("Curring ",t(5)(2));
console.log("Curring ",new table(2)(3)(4));
// console.log(abd);

console.log('JavaScript Call Apply Bind')
// ifram

// calltack

// event bubbling

// change detection

// dynamik component


var json = {
  demo:[
    {
      a:1,
      b:2
    },
    {
      c:2,
      d:4
    },
    {
      e:3
    },

    {
      a:11,
      b:22
    },
    {
      c:22,
      d:44
    },
    {
      e:33
    },

    {
      a:111,
      b:222
    },
    {
      c:222,
      d:444
    },
    {
      e:333
    }
  ]
}

json['newDemo'] = changeV(json,3);
console.log('json new ->',json);
function changeV(aa,v) {
  let m = [];
  separateIt(aa.demo,v).forEach(element => {
    m.push(processArray(element));
  });
  return m;
}

function separateIt(arr, size) {
  let newArr = [];
  let sliceIt;
  for (let i = 0; i < arr.length; i += size) {
      sliceIt = arr.slice(i, i + size);
      newArr.push(sliceIt);
  }
  return newArr;
}

function processArray (onlyArray) {
  let merge;
  for (let i = 0; i < onlyArray.length; i++) {
    merge = {...merge,...onlyArray[i]};
  }
  return merge;
}


let demoArr = [
  {
    a:1,
    b:2
  },
  {
    a:3,
    b:4
  },
  {
    a:5,
    b:6
  },
  {
    a:7,
    b:8
  }
];
// remove array by key index
function removeIndex(demoArr,index) {
  let demokeys = demoArr.keys();
  let newArr = [];
  for (let x of demokeys) {
    newArr.push(x);
  }

  const isAvail = newArr.indexOf(index);
  if (isAvail > -1) {
    newArr.splice(isAvail, 1); 
  }

  return newArr;
}

let r = removeIndex(demoArr,0);
console.log('demoArr',r);

//Firt-Order Funtion
let firstClassFunction = function name(param1) {
  return function (param2) {
    console.log(param1+" "+param2)
  }
}

firstClassFunction("hi")("dhiman")
let addFun = (a,b)=>a+b;
console.log('addFun',addFun(6,9));

//High-Order Funtion
const btn = document.getElementById('btn1');
const clickedbtn = () =>{ console.log('clickedbtn clicked');}
btn.addEventListener('click',clickedbtn);
// abd = 22222222222222222222
// var abd;

{/* <p id="abc"></p> */}
callA();
document.getElementById('abc').innerHTML = a * a; 
function callA() {
  a = 4;
}












