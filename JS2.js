// variable x is called before its declaration with initial value of undefined
console.log(x);
// variable x is assigned the value 1
var x=1;
// func1() is called before its declaration as a memory slot is created at the start of a program and as soon as the function is called, it searches for it in the program
func1();
// func1() is declared
function func1()
{
    // the variable x has been assigned a new value 10 but only within function scope
    var x=10;
    // another function func2() has been called inside func1() before its declaration
    func2();
    // func2() is declared
    function func2()
    {
        // x is iterated over a for loop resulting in value change
        for(var x=2;x<5;x++)
        {
            console.log(x);
        }
        // a block is created
        {
            // x is again assigned a const value 20
            const x=20;
            // the value is printed
            console.log(x);
            // const is block scoped so the assigned value remains within the scope of block
        }
        // another block is created
        {
            // x is again assigned a let value 30
            let x=30;
            // the value is printed
            console.log(x);
            // let is block scoped so the assigned value remains within the scope of block
        }
        // the value of x after the loop end is printed as it was var #Global Scope and the previous two values were let and const #Block Scope
        console.log(x);
    }
    // the value of x before initialization of func2() will be printed as the updated values were only within the function scope
    console.log(x);
}
// the value of x at the start of the program before initialization of func1() will be printed as the updated values were only within the function scope
console.log(x);