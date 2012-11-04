var plates = require('ender-plates');
$.ender({
    render: function (data, map) {
        return this.html(plates.bind(this.html(), data, map));
    }
}, true);