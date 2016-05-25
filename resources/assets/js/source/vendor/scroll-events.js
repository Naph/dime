app.add('scrollEvents', {

    // Based on https://github.com/srijansrivastava/documentScrollEvents/

    scrolling: false,
    scrollingStopped: false,
    scrollDirection : 'none',
    scrollTop: 0,
    getScrollTop: function(){
        return this.scrollTop;
    },
    setScrollTop: function(y){
         this.scrollTop = y;
    },
    isScrolling: function(){
        return this.scrolling;
    },
    setScrolling: function(bool){
        var oldVal = this.isScrolling();
        this.scrolling = bool;
        if(bool){
            this.executeCallbacks('scroll');
            if(oldVal !== bool){
                this.executeCallbacks('scrollStarted');
            }
        }else{
            this.executeCallbacks('scrollStopped');
        }
    },
    getScrollDirection : function(){
        return this.scrollDirection;
    },
    setScrollDirection : function(direction){
        var oldDirection = this.getScrollDirection();
        this.scrollDirection = direction;
        if(direction === 'UP'){
            this.executeCallbacks('scrollToTop');
            if(direction !== oldDirection){
                this.executeCallbacks('scrollToTopStarted');
            }
        }else if(direction === 'DOWN'){
            this.executeCallbacks('scrollToBottom');
            if(direction !== oldDirection){
                this.executeCallbacks('scrollToBottomStarted');
            }
        }
    },
    init : function(){
        this.setScrollTop($(document).scrollTop());
        window.addEventListener('scroll', this.scroll.bind(this));
        document.body.addEventListener('scroll', this.scroll.bind(this));
    },
    scroll: function() {
        requestAnimationFrame(this.updateScroll.bind(this));
    },
    updateScroll: function() {
        var timer = null;
        var that = this;
        this.setScrolling(true);
        var x = this.getScrollTop();

        setTimeout(function(){
            var y = $(document).scrollTop();
            that.setScrollTop(y);
            if(x > y){
                that.setScrollDirection('UP');
            }else{
                that.setScrollDirection('DOWN');
            }
        }, 100);

        if(timer !== 'undefined' && timer !== null){
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            that.setScrolling(false);
            that.setScrollDirection('NONE');
        }, 200);
    },
    executeCallbacks: function(eventName){
        app.notify(eventName.charAt(0).toUpperCase() + eventName.slice(1), this.getScrollTop());
    }
});