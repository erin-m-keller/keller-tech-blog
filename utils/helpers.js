module.exports = {
    isActive: function(url) {
        return (url === this.url) ? 'active' : '';
    },
    json: function(context) {
        return JSON.stringify(context);
    }
  };
  