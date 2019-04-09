var request = require('request');
var rootURL = 'http://api.spotify.com/v1/search';

module.exports = {
    searchResults,
    show
}


function searchResults(req, res) {
    // let user = this.state.user;
    let user = req.user;
    let options = {
        url = ``
    }
    request(options, function(err, response, body) {
        var spotifyData = JSON.parse(body);
        res.render('/', {
            spotifyData,
            user
        })
    }) 
}