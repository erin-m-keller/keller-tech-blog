const moment = require('moment');

module.exports = {
    isActive: function(url) {
        return (url === this.url) ? 'active' : '';
    },
    json: function(context) {
        return JSON.stringify(context);
    },
    formatDate: function(date) {
        return moment(date).format('YYYY-MM-DD h:mm:ss A');
    }
  };
  