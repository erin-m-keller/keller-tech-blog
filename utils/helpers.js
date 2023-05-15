// initialize variables
const moment = require('moment');

module.exports = {
    /**
     * @isActive
     * checks if link in header matches
     * the current path, if so, it adds
     * an active class to the nav item
     */
    isActive: function(url) {
        return (url === this.url) ? 'active' : '';
    },
    /**
     * @formatDate
     * accepts a date object and uses
     * moment.js to format the date 
     * and time
     */
    formatDate: function(date) {
        return moment(date).format('MMMM Do YYYY, h:mm a');
    },
    /**
     * @toJson
     * stringifies a handlebar object
     */
    toJson: function (obj) {
        return JSON.stringify(obj, null, 3);
    }
};
