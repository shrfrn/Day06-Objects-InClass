var gNextId = 101

var p1 = createPlayer('Puki')
console.log('p1: ', p1)

var p2 = createPlayer('Muki', 100)
console.log('p2: ', p2)

// This was our original implimentation
function createPlayer(name) {
    var player = {
        id: gNextId++,
        score: getRandomInt(1, 100),
        name: name,
    }
    return player
}

// version 1
// function createPlayer(name, score = 0) {
//     var player = {
//         id: gNextId++,
//         score: score === 0 ? getRandomInt(1, 100) : score,
//         name: name,
//     }
//     return player
// }

// version 2
// function createPlayer(name, score = getRandomInt(1, 100)) {
//     var player = {
//         id: gNextId++,
//         score: score,
//         name: name,
//     }
//     return player
// }
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
