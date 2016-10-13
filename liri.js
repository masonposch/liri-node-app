
//Require data from Twitter NPM
var twitter = require('twitter');

//Require data from keys.js
var liri = require('./keys.js');





//key information
var client = new twitter({
	consumer_key: liri.twitterKeys.consumer_key,
	consumer_secret: liri.twitterKeys.consumer_secret,
	access_token_key: liri.twitterKeys.access_token_key,
	access_token_secret: liri.twitterKeys.access_token_secret
});

console.log(client);
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
	var twitterURL = 'https://api.twitter.com/1.1/statuses/user_timeline.json&screen_name=msnpsch&count=20';
	
	client.get(twitterURL, function(error, tweets, response) {
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







