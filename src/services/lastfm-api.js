const rootURL =  'http://ws.audioscrobbler.com/2.0/?';


export default function getSearchResults(track) {
    return fetch(
        `${rootURL}method=track.search&track=${track}&api_key=bcd81844eb6a6ac8bddcd7d4ea96c255&format=json`
    ).then(res => res.json())
}