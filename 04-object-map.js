// Explain c# - not related to object maps
var langVotesMap = { c: 3, 'c#': 5, javascript: 52 }
console.log(langVotesMap)

// 1.Start hard coded
var langName = 'javascript'

// 1. Later 1 - use a prompt:
// Explain why we can's use langVotesMap.langName
var langName = prompt('Which is your favourite language?')
var count = langVotesMap[langName]

// 1. Later 2 - We might check that the prompt returned something
if (langName) {
    // Explain why we can's use langVotesMap.langName
    langVotesMap[langName] = count ? count + 1 : 1
}

// 2. Start with a simple if - else:
if (langVotesMap[langName]) {
    // Explain why we can's use langVotesMap.langName
    langVotesMap[langName]++
} else {
    langVotesMap[langName] = 1
}
// 2. Later, use a short if:
langVotesMap[langName] = count ? count + 1 : 1

for (var langName in langVotesMap) {
    var votesCount = langVotesMap[langName] //can's use langVotesMap.langName
    // if(langName === 'c') break
    console.log('Language: ' + langName + ' has: ' + votesCount + ' votes')
}

var keys = Object.keys(langVotesMap)
console.log('keys: ', keys)

var values = Object.values(langVotesMap)
console.log('values: ', values)