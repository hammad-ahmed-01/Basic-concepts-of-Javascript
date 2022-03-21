// author : Hammad Ahmed
// Javascript VS code

// a function 'func1' is defined
function func1()
{
  // variable x is initialized with undefined as its value
  var x;
  // value of x is printed with the following command
  console.log('value of x right now is :')
  console.log(x);
  // x iterates through a for loop with new value
  for(x=0;x<5;x++)
  {
    // if condition to check whether the initial value 'undefined' is still there or not
    // the value of x is overwritten so the following condition would not be fulfilled
    if(x==undefined)
    {
        console.log('global x is undefined');
    }
    // the loop would iterate from the new value 0 up till 4 with 5 iterations
    else
    {
      console.log();
        console.log('global x is defined');
        console.log(x,'is the current value');
    }

  }
  // after the loop ends, the following is printed
  console.log();
  console.log('loop ends')
}
// func1() is called for execution
func1();
