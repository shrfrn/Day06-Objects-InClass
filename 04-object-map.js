'use strict'

var langVotesMap = {
	c: 3,
	'c#': 5,
	javascript: 52,
}

// console.log('langVotesMap:', langVotesMap)
// getLangVote()

function getLangVote() {
	for (var i = 0; i < 2; i++) {
		var langName = prompt('Enter a lang')
		// var langName = 'python'
        
		if (langVotesMap[langName]) {
			langVotesMap[langName] = langVotesMap[langName] + 1
		} else {
			langVotesMap[langName] = 1
		}

		// With short if:
		// langVotesMap[langName] = (langVotesMap[langName]) ? langVotesMap[langName] + 1 : 1
	}
}

////////////////////////////////////////////////////

// printLangVoteMap()

function printLangVoteMap() {
	for (var lang in langVotesMap) {
		console.log(lang, langVotesMap[lang])
	}
}

////////////////////////////////////////////////////

// toArray()

function toArray() {
	var keys = Object.keys(langVotesMap)
	console.log('keys:', keys)

	var values = Object.values(langVotesMap)
	console.log('values:', values)
}