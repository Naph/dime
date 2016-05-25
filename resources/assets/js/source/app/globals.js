app.add({
    _pathRoot: window.location.href.match(/^(?:[^/]*\/){3}([^/]*)/)[0].replace(/\/$/, ""),
    _route: window.location.href.replace(/\/$/, ""),
    _document: $(document),
    _html: $('html'),
    _body: $('body'),

    _mobileEvent: function(element) {
        return new Hammer(element);
    }
});