// Objects – hands-on
// – createPlayer(name) – creates and returns a new player object with random score (0..100)
// – getPlayerById(playerId) – returns a player by its id
// – findBestPlayer(players) returns the best player
// – findBestPlayers(players) returns the best players

// var player = {
//     id : 101,
//     score : 98,
//     name: 'Puki'
// }

var gNextId = 101
var gPlayers = createPlayers()

function createPlayer(name) {
    var player = {
        id: gNextId++,
        score: getRandomInt(1, 100),
        name: name,
    }
    return player
}
function createPlayers() {
    var p1 = createPlayer('Puki')
    var p2 = createPlayer('Muki')
    var p3 = createPlayer('Shuki')

    var players = [p1, p2, p3]
    return players
}

//console.log('getPlayerById(102): ', getPlayerById(102))
function getPlayerById(playerId) {
    for (var i = 0; i < gPlayers.length; i++) {
        const currPlayer = gPlayers[i]
        if (currPlayer.id === playerId) return currPlayer
    }
    return null
}

// console.log('findBestPlayer(): ', findBestPlayer())
function findBestPlayer() {
    var bestPlayer = null
    for (var i = 0; i < gPlayers.length; i++) {
        const currPlayer = gPlayers[i]
        if (!bestPlayer || bestPlayer.score < currPlayer.score)
            bestPlayer = currPlayer
    }
    return bestPlayer
}

// This version supports multiple best players

function findBestPlayers() {
    var bestScore = 0

    for (var i = 0; i < gPlayers.length; i++) {
        var currPlayer = gPlayers[i]
        if (currPlayer.score > bestScore) {
            bestScore = currPlayer.score
        }
    }

    var bestPlayers = []

    for (var j = 0; j < gPlayers.length; j++) {
        var currPlayer = gPlayers[j]
        if (currPlayer.score === bestScore) {
            bestPlayers.push(currPlayer)
        }
    }
    return bestPlayers
}

// This version has only one loop...
function findBestPlayers() {
    var bestScore = 0
    var bestPlayers = null

    for (var i = 0; i < gPlayers.length; i++) {
        if (!bestPlayers || gPlayers[i].score > bestScore) {
            bestScore = gPlayers[i].score
            bestPlayers = [gPlayers[i]]
        } else if(gPlayers[i].score === bestScore){
            bestPlayers.push(gPlayers[i])
        }
    }
    return bestPlayers
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
  