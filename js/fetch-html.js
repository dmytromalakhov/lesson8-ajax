document.getElementById('get-fetch-ajax')
    .addEventListener('click', fetchHtml);
    
function fetchHtml (){
    fetch ('ajax.html')
        .then( res => res.text() )
        .then( html => document.getElementById('ajax')
            .innerHTML = html );
}