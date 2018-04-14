$('form input[type=submit]').click(sendForm);

function sendForm(e) {
    if ( $('#main-form')[0].checkValidity() ) {
        e.preventDefault();
        $.ajax({
            url: 'https://tranquil-sierra-86540.herokuapp.com/coast93@mail.ru',
            method: 'POST',
            data: {
                name: $('#form-name').val(),
                email: $('#client-email').val()
            },
            dataType: 'json'
        })
        .done( $('#form-done').html('<b>Thank you</b>') );
    }
}