'use strict'

// Movies And Actors (see doc)
// – createMovie, createMovies
// – find actor with highest salary
// – get movies of actor. (func that return a movies array)

// var movie = {
//     id : 101,
//     name : ‘Harry Potter’,
//     actors:[{name: ‘Daniel Redcliffe’, salary: 9000}]
// }

var gNextId = 101
var gMovies = createMovies()

function createMovies(){
    var ac1 = createActor('ac1', 100)
    var ac2 = createActor('ac2', 200)
    var ac3 = createActor('ac3', 300)

    var m1 = createMovie('m1', [ac1, ac2, ac3]) // Start like this...

    // ...then without vars, like this:
    var m2 = createMovie('m2', [createActor('ac1', 100), createActor('ac3', 100), createActor('ac4', 200)])

    var movies = [m1, m2]    
    return movies // return [m1, m2] ???
}

function createMovie(name, actors){
    var movie = {
        id: gNextId++,
        name: name,
        actors: actors
    }
    return movie
}

function createActor(name, salary){
    return {
        name: name,
        salary: salary
    }
}

console.log('getHighestPaidActor(): ', getHighestPaidActor())

function getHighestPaidActor(){
    var highestPaidActor = null // Actor, not maxSalary. !!!
    
    for(var i = 0; i < gMovies.length; i++){ 
        var currMovie = gMovies[i] //  +++1 currMovie and then currMovie.actors

        for (var j = 0; j < currMovie.actors.length; j++) {
            //  +++2 currActor. then ---1 currMovie...
            var currActor = currMovie.actors[j]
            var currActorSalary = currMovie.actors[j].salary // ???

            // start without null test (!highestPaidActor) xxx
            if (!highestPaidActor || highestPaidActor.salary < currActor.salary){
                highestPaidActor = currMovie.actors[j]
            }
        }
    }
    return highestPaidActor
}

console.log('getActorMovies(ac1): ', getActorMovies('ac1'))
console.log('getActorMovies(ac2): ', getActorMovies('ac2'))

function getActorMovies(actorName){
    var movies = []

    for(var i = 0; i < gMovies.length; i++){
        var currMovie = gMovies[i] // +++1

        for(var j = 0; j < currMovie.actors.length; j++){
            var currActor = currMovie.actors[j] // +++2

            if(currActor.name === actorName){
                movies.push(currMovie) // We are pushing the movie and not the actor !!!
                break // ???
            }
        }
    }
    return movies
}