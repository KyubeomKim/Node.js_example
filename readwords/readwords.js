var censor = require("censorify_kyubeom");
console.log(censor.getCensordWords());
console.log(censor.censor("Some very sad, bad and mad text."));
censor.addCensoredWord("gloomy");
console.log(censor.getCensordWords);
console.log(censor.censor("A very gloomy day."));