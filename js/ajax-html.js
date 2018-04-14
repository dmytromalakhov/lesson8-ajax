document.getElementById('get-ajax')
    .addEventListener('click', getAjax);
    
function getAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200){
            document.getElementById('ajax').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'ajax.html', true);
    xhr.send();
}