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

function toggleComments(element,postId) {
  const showBtn = element.querySelector('.show-btn'),
        hideBtn = element.querySelector('.hide-btn'),
        commentsWrapper = document.getElementById("comments-wrapper-" + postId);
  
  showBtn.classList.toggle('hidden');
  hideBtn.classList.toggle('hidden');
  commentsWrapper.classList.toggle('hidden');
}

const updateComments = (commentsData, postId) => {
  const commentsWrapper = document.querySelector(`#comments-wrapper-${postId}`);
  commentsWrapper.innerHTML = '';

  commentsData.forEach((comment) => {
    const commentElement = document.createElement('div'),
          formattedDate = moment(comment.comment_date).format('YYYY-MM-DD h:mm:ss A');
    commentElement.className = 'comment';
    commentElement.innerHTML = `
      <div class="content">
        <a class="author">${comment.user.user_name}</a>
        <div class="metadata">
          <div class="date">${formattedDate}</div>
        </div>
        <div class="text">${comment.comment_content}</div>
      </div>
    `;
    commentsWrapper.appendChild(commentElement);
  });
  const formElement = document.createElement('div');
  formElement.innerHTML = `
    <form class="ui reply form">
      <div class="field">
        <textarea id="comment-content" required></textarea>
      </div>
      <div class="ui primary submit labeled icon button" onclick="addComment(event,{{post.id}})">
        <i class="icon edit"></i> Add Reply
      </div>
    </form>
  `;
  commentsWrapper.appendChild(formElement);
};

const addComment = async (event, postId) => {
  event.preventDefault();
  const commentContent = document.querySelector('#comment-content').value;
  const userId = document.querySelector('#user-id').value;

  if (commentContent && userId && postId) {
    const response = await fetch('/api/comment/add', {
      method: 'POST',
      body: JSON.stringify({ comment_content: commentContent, user_id: userId, post_id: postId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log(`/api/comment/getComments/${postId}`);
      // Fetch the updated comments for the specific post
      const commentsResponse = await fetch(`/api/comment/getComments/${postId}`);
      if (commentsResponse.ok) {
        const commentsData = await commentsResponse.json();
        // Update the comments section with the new comments
        updateComments(commentsData, postId);
      } else {
        alert('Failed to fetch updated comments');
      }
    } else {
      alert(JSON.stringify(response) + ' - Failed to add a comment');
    }
  }
};

const addBlog = async (event) => {
  event.preventDefault();
  console.log("add blog");
  const blogTitle = document.querySelector('#blog-title').value,
        blogContent = document.querySelector('#blog-content').value,
        userId = document.querySelector('#blog-user-id').value;
  if (blogTitle && blogContent && userId) {
    const response = await fetch('/api/blog/add', {
      method: 'POST',
      body: JSON.stringify({ post_title: blogTitle, post_content: blogContent, user_id: userId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // show success message
    } else {
      alert(JSON.stringify(response) + ' - Failed to add a comment');
    }
  }
};