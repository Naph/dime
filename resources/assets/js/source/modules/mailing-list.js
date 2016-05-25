app.module('mailing-list', {
    forms: {
        mailingList: $('#mailing-list')
    },

    onAppReady: function() {
        this.forms.mailingList.on('submit', {method: 'footer'}, this.submitMailingList);
    },

    submitMailingList: function(event) {
        event.preventDefault();

        var parent = this;
        var formData = $(this).serializeArray();
        formData.push({name: 'method', value: event.data.method});

        $.post({
            url: this.forms.mailingList.attr('action'),
            data: formData,
            success: function(data) {
                if (data.success) {
                    app.notify('AlertSuccess',
                        $(parent),
                        'Thank you for join the mailing list. You will receive a confirmation email.',
                        true
                    )
                }
            },
            error: function() {
                // try again without ajax
                $(parent).unbind('submit').submit()
            }
        })
    },

    onAlertSuccess: function($object, message, strong) {
        if (strong) {
            $object.html('<p class="alert alert-success">' + message + '</p>');
        }
        else {
            $object.prepend('<p class="alert alert-success">' + message + '</p>');
        }
    }
});