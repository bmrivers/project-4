const rootURL =  'http://ws.audioscrobbler.com/2.0/?';
const key = process.env.LASTFM_KEY ;

export default function getSearchResults(track) {
    return fetch(
        `${rootURL}method=track.search&track=${track}&api_key=${key}&format=json`
    ).then(res => res.json())
}