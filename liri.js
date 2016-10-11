//Require data from keys.js
var liri = require('./keys.js');




//key information
var twitterInfo = ({
	consumerKey: liri.twitterKeys.consumer_key,
	consumerSecret: liri.twitterKeys.consumer_secret,
	accessTokenKey: liri.twitterKeys.access_token_key,
	accessTokenSecret: liri.twitterKeys.access_token_secret
});

//test for successful retrieval of keys
console.log(twitterInfo);


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

	console.log("Here are your last 20 Tweets.");

}



//Spotify command
function spotifyThisSong(){

	console.log("Here is your favorite song.");
	
}



//Movie command
function movieThis(){

	console.log("Here is a cool movie.");
	
}


/////////////////////////////////////////////////////////////////////////////////////////////







