// Start here - simple
function foo() {
    console.log('foo')
}
foo()

// Then show how both goo and foo are now pointing
// to the same function
var goo = foo
goo()


function newFoo(name) {
    console.log('foo ' + name)
}

// Now foo is pointing to a new function
foo = newFoo
foo('me')
goo()

// We can also write it like this (anonymous function)
foo = function (name) {
    console.log('foo ' + name)
}
foo('you')

// But either way, goo is still pointing 
// to the original function
goo()

// Slide 96 - passing a function ref as an argument
function runThisFunc(func) {
    console.log('Proud to run: func()')
    func()
    // Log the parameter to show that it points to a function
    console.log(func);
}
function boo() {
    console.log('boo')
}
runThisFunc(boo)

// Slide 97 anonymous functions

// setTimeout(function () { alert('Times up!') }, 3000)

var players = [
    { score: 82, name: 'Muki' },
    { score: 96, name: 'Puki' }
]

// we can't just use players.sort() Sort by what?
// We need to pass a comparison function like compareScores
players.sort(compareScores)

function compareScores(p1, p2){
    return p1.score - p2.score
}

//...or use an anonymous function like this:
players.sort(function (p1, p2) { return p1.score - p2.score })

// Slide 98 hello arrow functions - see you around

// setTimeout(function () { alert('Times up!') }, 3000)
// setTimeout(() => { alert('Times up!') }, 3000)

var players = [
    { score: 82, name: 'Muki' },
    { score: 96, name: 'Puki' }
]

players.sort(function (p1, p2) { return p1.score - p2.score })
players.sort( (p1, p2) => { return p1.score - p2.score })