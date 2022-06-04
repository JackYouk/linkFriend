// endpoints

// Phish checker
// https://phishstats.info:2096/api/
// Docs: https://phishstats.info/

// Mozilla https security check
// https://http-observatory.security.mozilla.org/api/v1/analyze?host=www.mozilla.org
// Docs: https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md

// CheckPhish
// https://developers.checkphish.ai/api
// https://checkphish.ai/docs/checkphish-api/


// fetch()
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function(data){

//     })

// data ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let website = 'github.com';
// API #1
fetch(`https://http-observatory.security.mozilla.org/api/v1/analyze?host=${website}`)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })

// API #2
// fetch(`https://developers.checkphish.ai/api/neo/scan`)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function(data){

//     })
// API #3

// app ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// cross check different apis, return value of trustworthiness

// UI ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// root
const root = $('#root');

// header
// input bar
// scale

// more info page
