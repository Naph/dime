function Observable(){}
Observable.prototype = {

    modules: [],

    add: function (name, module) {
        this.listeners = this.listeners || {};
        if (module) {
            this[name] = module;
        } else if (this.modules[name]) {
            module = this.modules[name];
        } else {
            module = name;
        }
        if (module.init && module.init(this) === false) {
            return;
        }
        for (var method in module){
            if (/^on[A-Z]/.test(method)) {
                this.listeners[method] = this.listeners[method] || [];
                this.listeners[method].push(module);
            }
            if (/^_[a-z]/.test(method)) {
                this[method] = module[method];
            }
        }
    },

    notify: function(event) {
        var method = 'on'+event;
        var listeners = this.listeners[method];
        var length = listeners ? listeners.length : 0;
        var args = [].slice.call(arguments, 1);
        for (var i = 0; i < length; i++){
            listeners[i][method].apply(listeners[i], args);
        }
    },

    module: function(name, module) {
        //TODO: test
        this.modules[name] = module;
    }
};
