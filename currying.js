{
    function fuc(a) {
        return function (b) {
            return function (c) {
                return `${a}${b}${c}`;
            }
        }
    }

    console.log(fuc(3)(3)(4));
}

{
    function calCulate(type) {
        if(type == 'SUM'){
            return function (b) {
                return function (c) {
                    return b + c;
                }
            } 
        }else if(type == 'MUL'){
            return function (b) {
                return function (c) {
                    return b * c;
                }
            }
        }
    }

    let SUM = calCulate('SUM');
    console.log(SUM(3)(4));
    console.log(SUM(5)(4));
    
    let mul = calCulate('MUL');
    console.log(mul(3)(4));
    console.log(mul(13)(4));

}
//infinite curring
{
    function incu(a) {
        return function (b) {
            if (b) return incu(a + b);
            return a;
        }
    }
    console.log(incu(2)(3)(4)(5)(6)(7));

}
// curring in application
{
    function funDom(dom){
        return function (v) {
            document.getElementById(dom).innerHTML = v
        }
    }
    let domf = funDom('h1');

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            domf('Dhiman '+ i);
        }, i * 1000);
    }

}