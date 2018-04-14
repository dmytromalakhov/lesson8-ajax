document.getElementById('get-fetch-json')
    .addEventListener('click', fetchJson);
    
function fetchJson (){
    fetch ('client-data.json')
        .then( res => res.json() )
        .then( clientData => {
            document.getElementById('client-name').innerText = clientData.name;
            document.getElementById('client-age').innerText = clientData.age;
            document.getElementById('client-address').innerText = clientData.address;
        })
}