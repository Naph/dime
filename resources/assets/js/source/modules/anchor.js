app.module('anchor', {

    elements: {
        navAnchor:      $('nav').find('a[href="' + app._pathRoot + '"]'),
        subNavAnchor:   $('.sub-nav').find('a[href="' + app._route + '"]')
    },
    
    onAppReady: function () {
        this.elements.navAnchor.last().addClass('active');
        this.elements.subNavAnchor.last().addClass('active');
    }
});