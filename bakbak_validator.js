$.fn.bakbak_validator = function(options) {
    return this.each(function() {
        $(this).focusout(function() {
            run_validator($(this).val(), options);
        });
    });
};


function run_validator(address_text, options) {
    // don't run validator without input
    if (!address_text) {
        return;
    }

    // length check
    if (address_text.length > 512) {
        error_message = 'Stream exceeds maxiumum allowable length of 512.';
        if (options && options.error) {
            options.error(error_message);
        }
        else {
            console.log(error_message);
        }
        return;
    }

    // validator is in progress
    if (options && options.in_progress) {
        options.in_progress();
    }

    var success = false;

    // make ajax call to get validation results
    $.ajax({
        type: "GET",
        url: 'http://mail.bakbak.io/api/validate',
        data: { email: address_text},
        dataType: "json",
        crossDomain: true,
        success: function(data, status_text) {
            success = true;
            if (options && options.success) {
                options.success(data);
            }
        },
        error: function(request, status_text, error) {
            success = true;
            error_message = 'Error occurred, unable to validate address.';

            if (options && options.error) {
                options.error(error_message);
            }
            else {
                console.log(error_message);
            }
        }
    });

    // timeout incase of some kind of internal server error
    setTimeout(function() {
        error_message = 'Error occurred, unable to validate address.';
        if (!success) {
            if (options && options.error) {
                options.error(error_message);
            }
            else {
                console.log(error_message);
            }
        }
    }, 30000);

}