module.exports = {
    isActive: (url) => {
        const currentPagePath = window.location.pathname;
        console.log(currentPagePath);
        return (url === this.url) ? 'active' : '';
    }
  };
  