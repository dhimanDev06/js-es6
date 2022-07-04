// Object
let user = {
    name: 'Dhiman',
    age: 32
}

user.name = "Dhiman Bhattacharya" // to update ojbect key value
delete user.age; // to delete object key
console.log(user);

const func = function (a) {
    delete a; // delete keyword only used with object property not local variable
    return a;
}
console.log(func(5))

// dynamic key

const property = 'name'
const value = 'dhiman'
const userOb = {
    [property] : value
}

console.log(userOb);

// object key loop
{
    const user = {
        name: 'Dhiman',
        age: 32,
        company: 'Capgemini'
    }
    for (const key in user) {
        console.log(key, '==>',user[key]);
    }
}

// Question 1
// what will be the out put
{

    const obj = {
        a:1,
        b:2,
        a:3 // it will update a key value with 3 but position will be same before 
    }
    console.log(obj);
}

// Question 2
// Multiply by any number

{

    let obj = {
        a:100,
        b:200,
        name:'test'
    }
multiplyNum(obj,2);
function multiplyNum(params,by) {
    for (const key in params) {
        if(typeof params[key] == 'number'){
            console.log(params[key] * by)
            params[key] = params[key]*by;
        }

    }
    return params;
}
console.log(obj)
}


// Question 3
// output ?
{

    const a = {}
    const b = { key: 'b'} // object can't convert into a key
    const c = { key: 'c'}
    a[b] = 123
    a[c] = 456
    console.log(a); // a key is [object Object] and will return 456
}
// Question 4
// JSON.stringify and JSON.parse
{
    const a = {
        name:'dhiman',
        age: 32,
        company: 'capgemini'
    }

    localStorage.setItem('user',JSON.stringify(a,['name','company']));
    console.log(JSON.parse(localStorage.getItem('user')));
}

// Question 5
// spread operator and what will be the out put ?

{
    console.log([..."dhiman"]); // turn in to array

    let u = { name: 'dhiman', age:'32'};
    let a = { admin:true,...u};
    console.log(a);
}

// Question 6
// what will be the out put ?
{

    const shape = {
        rediour : 12,
        diameter(){
            return this.rediour * 2;
        },
        perimeter :()=> 2 * Math.PI * this.rediour // this keyword used to get window object
    }

    console.log(shape.diameter()); // 24
    console.log(shape.perimeter()); // NaN

}

// Question 7
// Destructuring

{

    let user = {
        name: 'Dhiman',
        age: 32,
        fullname:{
            first: 'Dhiman',
            last:'Bhattacharya'
        }
    }

    const name = 43;
    const {age} = user; 
    const {name : myname} = user // : myname used to remane
    const {fullname:{last}} = user // nested Destructuring
    console.log(age, myname, last); // 32
}

// Qusetion 8
function getItem(one,two,...arg) { // rest parameter must be last in the parameter list, it can't be in the middile
    return [...one,two,...arg]
}
console.log(getItem(['a','b','c'],'aa','178'));

// Question 9
{
    let a = {test:'hey'}
    let b;
    b = a;// its simple provide object referce(shalow copy), if try {...a} the its deep cply;
    a.test = 'hi'
    console.log(b,a);
}

// Question 10
{
    console.log({a:1}=={a:1}); // return false, different memory space
    console.log({a:1}==={a:1}); // retrun false, different memory space
}

// Question 11
{
    let p = { name : 'Dhiman'};
    let member = [p];
    p = null;
    // p.name = null
    console.log(member);
}

// Question 12
{
    const value = {number : 10}
    const multply = (a = { ...value}) =>{
        console.log(a.number  *= 2);
    }
    multply(); // 20 cloning
    multply(); // 20 cloning
    multply(value); // 20 not cloning, it will update object by ref
    multply(value); // 40 not cloning, it will update object by ref
    multply(value); // 80 not cloning, it will update object by ref
}

// Question 13
{

    function changeValueByRef(params) {
        params.age = 20;    // it will update by ref
        params = {          // new Obect
            name: 'Dhiman', // object re-assassin
            age:32          //
        }
        return params;      // retun new Obect
    }

    const personObj1 = {
        name:'Suman',
        age:34
    }
    const personObj2 = changeValueByRef(personObj1);
    console.log(personObj1); // update age onle bcoz name key no have
    console.log(personObj2); // retun new Param object

}

// Question 14
// Deep copy or Object Clone
{

    const user = {
        name:'Dhiman',
        age: 32
    }

    const u1 = Object.assign({},user);
    const u2 = JSON.parse(JSON.stringify(user));
    const u3 = { ...user };
    delete user.age;
    user.name = "Suman"
    console.log(u1,u2,u3,user);


}