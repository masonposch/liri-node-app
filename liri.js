//Require data from keys.js
var liri = require('./keys.js');




//key information
var consumerKey = liri.twitterKeys.consumer_key;
var consumerSecret = liri.twitterKeys.consumer_secret;
var accessTokenKey = liri.twitterKeys.access_token_key;
var accessTokenSecret = liri.twitterKeys.access_token_secret;

//test for successful retrieval of keys
console.log(consumerKey);
console.log(consumerSecret);
console.log(accessTokenKey);
console.log(accessTokenSecret);



/////////////////////////////////////////////////////////////////////////////////////////////


//Tell Liri which commands to take
if(process.argv[2] === 'my-tweets'){
	myTweets();
} else if (process.argv[2] === 'spotify-this-song'){
	spotifyThisSong(process.argv[3]);
} else if (process.argv[2] === 'movie-this'){
	movieThis(process.argv[3]);
} else {
	console.log("Sorry, I'm currently too dumb to process this.");
}



/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


//Twitter command
function myTweets(){

}



//Spotify command
function spotifyThisSong(){
	
}



//Movie command
function movieThis(){
	
}


/////////////////////////////////////////////////////////////////////////////////////////////







