//Call Apply Bind Example
{
    let obj = {name:'Dhiman'};

    function show(age,com) {
        console.log("Hi",this.name,age,com);
    }
    show.call(obj,'32','Capgemini');
    show.apply(obj,['32','Capgemini']);
    show.bind(obj,'32','Capgemini')();
}

//Output base question
{
    let age = 21

    function showAge(){
        let age = 10;
        console.log(this.age)
    }
    const personObj = {
        age:40,
        showAge(){
            console.log(this.age)
        }
    }

    let person = {age: 30};

    showAge(); //undefined
    showAge.call(person); //30
    personObj.showAge(); //40
    personObj.showAge.call(person); //30
}

{
    var status = 'outer';
    setTimeout(() => {
        var status = 'closer';
        data = {
            status : 'inner',
            print() {
                console.log(this.status)
            }
        }
        data.print();
        data.print.call(this)
    }, 0);
}

{
    const animals = [
        {species:'Lion',name:"king"},
        {species:'Whale',name:"Queen"}
    ]

    function printAnimals(i) {
        this.print = function (){
            console.log(i+" "+this.species+" : "+this.name)
        }
        this.print();
    }
    animals.forEach((e,i) => {
        printAnimals.call(e,i)
    });
}
// Array push and Append using Apply
{
    let arr1 = [1,2,4];
    let arr2 = [5,6,7];
    arr1.push.apply(arr1,arr2)
    console.log("000",arr1);
}
//Find out the max value from an Array
{
    const numarry = [1,2,3,0,6,14];
    console.log(Math.max.apply('',numarry))
    console.log(Math.max(...numarry))
    console.log(Math.min.apply('',numarry))
    console.log(Math.min(...numarry))
}

// Bound dunction
{
    function f(t){
        console.log("obj",t,this);
    }
    let obj = {name:'1233'}
    let user = {
        g: f.bind(obj,'g'),
        h: f.bind(null,'h')
    }
    user.g();
    user.h();
}
    // Bind Chaining
{
    function show() {
        console.log(this.name)
    }

    f = f.bind({name:'dhiman'}).bind({name:'suman'})
    f();
}