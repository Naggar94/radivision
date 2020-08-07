var str;
str = "Mary had a little lamb";
var words = str.match(/[a-zA-Z]+/g);
var spaces = str.match(/ +/g);
var result = "";
for(var i=0;i<spaces.length;i++){
	result += spaces[i];
}

for(var i=words.length-1;i>=0;i--){
	//I Don't get why should I prepend the spaces, it makes no sense, but we can easily manipulate the output by adding the spaces between the words.
	result += words[i];
}

console.log(result);