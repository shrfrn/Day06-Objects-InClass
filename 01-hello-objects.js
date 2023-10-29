// Defining an object variable
var client = {
    fullName: 'Muki Ben David',
    balance: 426
}

// Log an object
console.log('client: ', client)

// Log a property - dot notation
console.log('client.fullName: ', client.fullName)

// A more in depth example with an array (strings) property
var movie = {
    name: 'Fight Club',
    actors: ['Brad Pitt', 'Edward Norton']
}

// Later change to an array of actor objects like this...
var actor1 = { name: 'Brad Pitt', salary: 10000 }
var actor2 = { name: 'Meatloaf', salary: 600 }

var movie = {
    name: 'Fight Club',
    actors: [actor1, actor2]
}

//...or like this
var movie = {
    name: 'Fight Club',
    actors: [{ name: 'Brad Pitt', salary: 10000 },{ name: 'Meatloaf', salary: 600 }]
}

// Log an object
console.log('movie: ', movie)

// Log a single property
console.log('movie.name: ', movie.name)
console.log('movie.actors: ', movie.actors)
console.log('movie.actors[0]: ', movie.actors[0])

// Log a property which does not exist
console.log('movie.rating: ', movie.rating)

//Assign into a property
movie.name = 'Fight Club!!'
console.log('movie: ', movie)

movie.name += '!'
console.log('movie: ', movie)

// push into an array property
movie.actors.push({ name: 'Edward Norton', salary: 7000 })
console.log('movie: ', movie)

// Access a property which doesn't exist = undefined
console.log('movie.rating: ', movie.rating)

// Assign into a property which doesn't exist
movie.rating = 4
console.log('movie.rating: ', movie.rating)
console.log('movie: ', movie)

// Show this syntax...
movie['rating'] = 5
console.log('movie: ', movie)

// ...and like this too.
var anotherKey = 'releaseYear'
movie[anotherKey] = '1999'
console.log('movie: ', movie)

// Garbage collector clears object from memory
movie = null
console.log('movie: ', movie)

// Object forced to become a string = [Object Object]
var str = client + ''
console.log('str: ', str)

// Object var is a reference
var copy = client
console.log('copy: ', copy)

copy.name += '!'
console.log('client: ', client)

client = null
console.log('copy: ', copy)
