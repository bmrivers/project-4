// const request = require('request');
// const LASTFM_KEY = process.env.LASTFM_KEY ;
// const rootURL =  'http://ws.audioscrobbler.com/2.0/?'


// async function getSearchResults(req, res) {
//     var options = {
//         url: `${rootURL}method=track.search&track=${req.body}&api_key=${LASTFM_KEY}&format=json`    
//     }
//     request(options, (err, response, body) => {
//         // res.json(options)
//         if (!err && response.statusCode == 200) {
//             var tracksData = JSON.parse(body);
//             // console.log(tracksData)
//         } else {
//             console.log(err)
//         }
//     });
// };


// module.exports = {
//     getSearchResults
// }
