
//Require data from Twitter NPM
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

//Require data from keys.js
var liri = require('./keys.js');





//key information
var client = new twitter({
	consumer_key: liri.twitterKeys.consumer_key,
	consumer_secret: liri.twitterKeys.consumer_secret,
	access_token_key: liri.twitterKeys.access_token_key,
	access_token_secret: liri.twitterKeys.access_token_secret
});


// var spotty = new spotify({
// 	client_ID: liri.spotifyKeys.consumer_key,
// 	client_secret: liri.spotifyKeys.consumer_secret
// });

// console.log(client);
/////////////////////////////////////////////////////////////////////////////////////////////


//Tell Liri which commands to take
if(process.argv[2] === 'my-tweets'){
	myTweets();
} else if (process.argv[2] === 'spotify-this-song'){
	spotifyThisSong();
} else if (process.argv[2] === 'movie-this'){
	movieThis();
} else {
	console.log("Sorry, I'm currently too dumb to process this.");
}



/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


//Twitter command
function myTweets(){
	var twitterURL = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
	
	client.get(twitterURL, function(error, tweets, response) {
	  var tweets = tweet.text;
	  console.log(tweets);
	});
}



//Spotify command
function spotifyThisSong(song){

spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    else if (!process.argv[3]){
    	process.argv[3] === "the-sign-ace-of-base";
    	var songInfo = data.tracks.items[0];
    	var songResult = 
                     console.log("Song: " + songInfo.name);
                     console.log("Artist: " + songInfo.artists[0].name);
                     console.log("Song Preview: " + songInfo.preview_url);
                     console.log("Album: " + songInfo.album.name)
    } else {
    	var songInfo = data.tracks.items[0];
    	var songResult = 
                     console.log("Song: " + songInfo.name);
                     console.log("Artist: " + songInfo.artists[0].name);
                     console.log("Song Preview: " + songInfo.preview_url);
                     console.log("Album: " + songInfo.album.name)
    }
 
    // Do something with 'data' 
});
	
}



//Movie command
function movieThis(){

	request('http://www.omdbapi.com/?s=' + process.argv[3], function (error, response, body) {
	  	// if (!error && response.statusCode == 200) {
	    	console.log(response.body); // Show the HTML for the Google homepage. 
	  	// 
	})
	
}


/////////////////////////////////////////////////////////////////////////////////////////////







