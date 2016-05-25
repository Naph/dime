app.add('loader', {

    init: function() {
        app.notify('AppReady');
        setTimeout(function(){
            app._body.removeClass('ready-delay');
        }, 16);
    }
});