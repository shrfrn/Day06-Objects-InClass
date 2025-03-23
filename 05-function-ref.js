// Start here - simple
function foo() {
    console.log('foo')
}
foo()

// Then show how both goo and foo are now pointing
// to the same function

// var goo = foo
// goo()


function newFoo(name) {
    console.log('foo ' + name)
}

// Now foo is pointing to a new function

// foo = newFoo
// foo('me')
// goo()

// We can also write it like this (anonymous function)

// foo = function (name) {
//     console.log('foo ' + name)
// }

// foo('you')

// But either way, goo is still pointing 
// to the original function

// goo()

// Passing a function ref as an argument

// setTimeout(foo, 2000)
// setTimeout(function () { console.log('foo') }, 2000)
// setTimeout(() => { console.log('foo') }, 2000)

// setInterval(() => { console.log('foo') }, 2000)

function runThisFunc(func) {
    // Log the parameter to show that it points to a function
    // console.log(func)

    console.log('About to run: func()')
    func()
}

function boo() {
    console.log('boo')
}

// runThisFunc(boo)

function runThisFuncInLoop(func) {
    // Log the parameter to show that it points to a function
    // console.log(func)

    console.log('About to run func 10 times...')
    var i = 10
    while (i) {
        func(i)
        i--
    }
}

function goo(i) {
    console.log('goo', i)
}

// runThisFuncInLoop(goo)

// Anonymous functions

// setTimeout(function () { alert('Times up!') }, 3000)

// Slide 98 hello arrow functions - see you around

// setTimeout(function () { alert('Times up!') }, 3000)
// setTimeout(() => { alert('Times up!') }, 3000)