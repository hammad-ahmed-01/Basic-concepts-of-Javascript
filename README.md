<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="#">
    <img src="javascript_logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Basic Concept of JavaScript </h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><strong>Explore the MDN docs »</strong></a>
    <br />
    
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#JS1">JavaScript Concept 1 - Execution Context</a></li>
    <li><a href="#JS2">Javascript Concept 2 - Scope of Variables</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

I want to create a repository to share with the world how I approach the core concepts of JavaScript -- You can find all about it in this repository

Codes related to basic JS concepts of Javascript syntax, variables, functions, conditional structures, loops/iterations etc

Here's why:

- You shouldn't be opening stackoverflow everytime just because you are weak at the concepts instead you should go through this repository and learn the concepts so that it can save you your precious time .
- This will help you better understand and debug JavaScript :smile:

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## JS1

In this file , you will find more about execution context

The code is basically about declaring a variable with no initial value and then running it through a loop resulting in value change. The concepts of functions, conditional statemets and loops have been used.

The function is declared in the first step.

A variable is declared in the function with an initial value of undefined and that value is printed # in JS, undefined is treated as a value for a variale if no assignment is made to it.
The variable is iterated through a for loop with a change of value from firstly undefined, then 0 uptil 4.

After the loop ends, a line of code is executed after that.

The function is closed and called in the next step.

As soon as the function is called, the whole code inside it is executed in real terms on the screen.
The function can also be called before even declaring the function, because JS Debugger initializes it at the start of the code and looks for the function throughout the whole code, the moment it is called.

<p align="right">(<a href="#top">back to top</a>)</p>

## JS2

In this file you will know about the scope of variable inside and outside a block and a function.

The code is basically about declaring a variable with var at the start and changing its value with let and const declarations. Also identifying the scope of a variable.

We have one variable in this program and two function. As soon as the program starts, a variable is declared in the Global Execution context, with undefined as its initial value. The functions are also stored in the memory space at the start of the program. So, as soon as it is called, the debugger searches for that function throughout the whole program.

A variable x is initialized with 1 as its var declared value. 

A function func1() is created and the same variable undergoes a value change of 10 within the function.

Another function func2() is created and the variable is iterated over for loop with var declared value of 5 at the end of the loop

A block is created and the value of x changes to 20 with const declaration. #const is block scoped so this value is limited within the block. This value is then printed.

A block is created and the value of x again changes to 30 with let declaration. # let is block scoped so this value is limited within the block. This value is then printed.

The block ends and the value of x is again printed, but now it'll print 5 as the last two values were block scoped.

func2() ends and after that the value of x is again printed but now it'll print 10 as the last 3 values were function scoped.

func1() ends and the first value of x is printed because all the other changes were function scoped.

<p align="right">(<a href="#top">back to top</a>)</p>
