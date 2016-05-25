app.module('window', {
    
    lastPositionY: window.scrollY,
    lastWindowWidth: window.innerWidth,

    onAppReady: function() {
        this.addEvent('scroll');
        this.addEvent('resize', app.notify('Resize', this.lastWindowWidth));
    },

    scroll: function() {
       this.lastPositionY = window.scrollY;
       requestAnimationFrame(this.updateScroll.bind(this));
    },

    updateScroll: function() {
       app.notify('Scroll', this.lastPositionY)
    },

    resize: function() {
        this.lastWindowWidth = window.innerWidth;
        requestAnimationFrame(this.updateResize.bind(this));
    },

    updateResize: function() {
        app.notify('Resize', this.lastWindowWidth)
    },

    addEvent: function (eventName, callback) {
        window.addEventListener(eventName, this[eventName].bind(this));
        typeof callback == "function" && callback();
    }
});