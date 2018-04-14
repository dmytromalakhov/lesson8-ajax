document.getElementById('get-json')
    .addEventListener('click', getJson);
    
function getJson() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200){
            const clientData = JSON.parse(xhr.responseText);
            document.getElementById('client-name').innerText = clientData.name;
            document.getElementById('client-age').innerText = clientData.age;
            document.getElementById('client-address').innerText = clientData.address;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}