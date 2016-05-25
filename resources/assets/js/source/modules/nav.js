app.module('nav', {

    navOpen: false,

    elements: {
        mobileButton: $('#mobile-button'),
        headerNav: $('#header-nav')
    },

    onAppReady: function() {
        this.elements.mobileButton.on('click', function() {
            app.notify('ToggleNav')
        });
    },
    
    onScroll: function (posY) {
        if (this.navOpen)
            app.notify('CloseNav');
    },

    onToggleNav: function() {
        this.navOpen
            ? app.notify('CloseNav')
            : app.notify('OpenNav');
    },

    onOpenNav: function() {
        app._html.addClass('prevent-scroll');
        app._body.addClass('animating');
        app._body.addClass('nav-open');

        var that = this;
        setTimeout(function() {
            that.stopAnimation();
            that.navOpen = true;
        }, 200);

    },

    onCloseNav: function() {
        app._html.removeClass('prevent-scroll');
        app._body.addClass('animating');
        app._body.removeClass('nav-open');

        var that = this;
        setTimeout(function () {
            that.stopAnimation();
            that.navOpen = false;
        }, 200);
    },

    stopAnimation: function() {
        app._body.removeClass('animating');
    }
});