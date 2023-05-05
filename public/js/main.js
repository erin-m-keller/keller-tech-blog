function toggleTab(event) {
  event.preventDefault();
  
  const clickedTab = event.target;
  const tabId = clickedTab.dataset.tab;
  const tabs = document.querySelectorAll(`[data-tab]`);
  const tabContents = document.querySelectorAll(`.tab-content`);

  tabs.forEach(tab => {
    if (tab.dataset.tab === tabId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  tabContents.forEach(tabContent => {
    if (tabContent.dataset.tab === tabId) {
      tabContent.classList.add('active');
    } else {
      tabContent.classList.remove('active');
    }
  });
}