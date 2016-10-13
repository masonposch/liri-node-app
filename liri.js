//Require data from keys.js
var liri = require('./keys.js');

//Require data from Twitter NPM
var twitter = require('twitter');




//key information
var client = new twitter({
	consumerKey: liri.twitterKeys.consumer_key,
	consumerSecret: liri.twitterKeys.consumer_secret,
	accessTokenKey: liri.twitterKeys.access_token_key,
	accessTokenSecret: liri.twitterKeys.access_token_secret
});


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
	client.get('/statuses/user_timeline.json', function(error, tweets, response) {
	    if(error) throw error;
	   	console.log(tweets);  // The favorites. 
		console.log(response);  // Raw response object. 
	});
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







