var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inStr) {
	for (idx in censoredWords) {
		inStr = inStr.replace(censorWords[idx], "****");
	}
	for (idx in customCensroedWords){
		inStr = inStr.replace(customCensoredWords[idx], "****");
	}
	return inStr;
}
function addCensoredWord(word) {
	customCensoredWords.push(word);
}
function getCensordWords(){
	return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;