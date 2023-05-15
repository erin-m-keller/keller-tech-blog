const moment = require('moment');

module.exports = {
    isActive: function(url) {
        return (url === this.url) ? 'active' : '';
    },
    json: function(context) {
        return JSON.stringify(context);
    },
    formatDate: function(date) {
        return moment(date).format('MMMM Do YYYY, h:mm a');
    },
    toJson: function (obj) {
        return JSON.stringify(obj, null, 3);
    }
};
