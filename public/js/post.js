const handlePost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const postContent = document.querySelector('#post').value.trim();

    if (title && postContent) {

        // add route
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, postContent }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // add route
            document.location.replace('/');
        } else {
            alert('Please enter a post');
        }
    }
};
// add route
const handleComment = async (event) => {
    event.preventDefault();

    const commentContent = document.querySelector('#comment').value.trim();

    if (commentContent.ok) {
        // add route
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ commentContent }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {

            document.location.replace('/');
        } else {
            alert('Please enter a post');
        }
    }
};

const delButtonHandler = async (event) => {
    // TODO: data-id comes from handlebars-- make it post.name or something
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // TODO: might adjust homepage depending on handlebars
        document.location.replace('/homepage');
      } else {
        alert('Failed to delete project');
      }
    }
  };


document
    .querySelector('.postForm')
    .addEventListener('submit', handlePost);

document
    .querySelector('.commentForm')
    .addEventListener('submit', handleComment);

document
// TODO: .project-list needs to be changed
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
