const newFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();
    //get post ID to use when creating new comment
    const postId = document.querySelector('#comment-content').getAttribute('post_id');

    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, postId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
     
      if (response.ok) {
        document.location.replace(`/posts/${postId}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);
  
