var name, mail, phone, complain;

    $('input[value = Submit]').click(function() {

        name = $('#nameID').val();
        mail = $('#mailID').val();
        phone = $('#phoneID').val();
        complain = $('#complainID').val();

        $('#nameVal').append('Name: ' + name);
        $('#emailVal').append('email: ' + mail);
        $('#phoneVal').append('Phone: ' + phone);
        $('#complainVal').append('Complain: ' + complain);
        
        
        $('.formContainer').css('display', 'none');
        $('#formVals').css('display', 'block');

    })

    $('input[value = Back]').click(function() {
        
        $('#formVals').children().empty()

        $('#formVals').css('display', 'none');
        $('.formContainer').css('display', 'block');
    });