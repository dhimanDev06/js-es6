// Js make private property

class test1{
   a = 2;
   #b = 3;
   static c = 4;
}


let t1 = new test1();
console.log(t1.a); //it will show 2 
console.log(t1.b); //undefined
console.log(t1.c); //undefined


// Js new feature .at()

let arr = [1,2,4,6,7,3];

console.log(arr.at(0)); //1
console.log(arr.at(-1)); //2
// It is similar to the array[index] but is not able to be used on the -1 index as like as arrary[-1]


// import fetch from 'node-fetch';

const loadData = async () =>{
  try {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const res = await fetch(url)
    const data = await res.json()
    return data
  }catch(err){
    console.log(err);
  }
}

//const data = await 
loadData().then(res => console.log(res));