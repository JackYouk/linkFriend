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

let website = 'mozilla.org';
// Mozilla host security checker api
function scanHost(url){
    fetch(`https://http-observatory.security.mozilla.org/api/v1/analyze?host=${url}&rescan=true`,
    {
        method: 'POST'
    })
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
}
scanHost(website);


// app ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// cross check different apis, return value of trustworthiness

// UI ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// root
const root = $('#root');

// header
const headerContainer = $('<div class="row">');
let headerH1 = $('<h1 class="col-12 bg-primary text-white d-flex justify-content-center">')
    .text('LinkFriend');
headerContainer.append(headerH1);
root.append(headerContainer);

// input bar
const inputContainer = $('<div class="row">');
let inputArea = $('<div class="col-12 d-flex justify-content-center">');
    let inputGroup = $('<div class="input-group m-3 col-6">');
        let inputInput = $('<input type="text" class="form-control" placeholder="Enter Link Here :)" aria-label="" aria-describedby="button-addon2">');
        let inputBtn = $('<button class="btn btn-outline-secondary" type="button" id="button-addon2">')
            .text('✓');
        inputGroup.append(inputInput);
        inputGroup.append(inputBtn);
    inputArea.append(inputGroup);
inputContainer.append(inputArea);
root.append(inputContainer);

// scanning label
function genScanLabel(status){
    const scanContainer = $('<div class="row">');
    let scanArea = $('<div class="col-12 d-flex justify-content-center">');
        let scanDiv = $('<div class"bg-primary">')
            let scanGif = $('<iframe src="https://giphy.com/embed/JGUMPPTMRCVPbSncVF" width="100" height="100" frameBorder="0" class="giphy-embed" allowFullScreen>');
            scanDiv.append(scanGif);
            let scanP = $('<p class="">')
                .text('Scanning...');
            scanDiv.append(scanP);
        scanArea.append(scanDiv);
    scanContainer.append(scanArea);
    root.append(scanContainer);
}
genScanLabel();



// scale
const scaleContainer = $('<div class="row">');
function genScale(grade){
    scaleContainer.empty();
    let scaleArea = $('<div class="col-12 d-flex justify-content-center">');
        let scaleBarGroup = $('<div class="progress col-6 p-0">');
            let scaleBar = $('<div class="progress-bar" role="progressbar">')
                .css('width', `${grade}%`);
            if(grade > 74){
                scaleBar.addClass('bg-success');
            }else if(grade > 24){
                scaleBar.addClass('bg-warning');
            }else{
                scaleBar.addClass('bg-danger');
            }
            scaleBarGroup.append(scaleBar);
        scaleArea.append(scaleBarGroup);
    scaleContainer.append(scaleArea);
    root.append(scaleContainer);
}
genScale(50);


// more info page
