app.add({
    _pathRoot: window.location.href.match(/^(?:[^/]*\/){3}([^/]*)/)[0].replace(/\/$/, ""),
    _route: window.location.href.replace(/\/$/, ""),
    _document: $(document),
    _html: $('html'),
    _body: $('body'),

    _mobileEvent: function(element) {
        return new Hammer(element);
    },

    _confirmAction: function(text, callback) {
        confirm(text) ? typeof callback === 'function' && callback() : window.event.preventDefault();
    }
});
