const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);





// const postForm = document.getElementById('postForm');
// const commentForm = document.querySelector('.commentForm');
// const deletePost = document.querySelector('.deletePost');


// const handlePost = async (event) => {
//     event.preventDefault();

//     const title = document.querySelector('#title').value.trim();
//     const PostContent = document.querySelector('#article').value.trim();
//     console.log(title, PostContent);
//     if (title && PostContent) {

//         // add route
//         const response = await fetch('/api/postRoutes', {
//             method: 'POST',
//             body: JSON.stringify({ title, PostContent }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             // add route
//             document.location.replace('/');
//         } else {
//             alert('Please enter a post');
//         }
//     }
// };
// // add route
// const handleComment = async (event) => {
//     event.preventDefault();

//     const commentContent = document.querySelector('#comment').value.trim();

//     if (commentContent.ok) {
//         // add route
//         const response = await fetch('/api/commentRoutes', {
//             method: 'POST',
//             body: JSON.stringify({ content }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {

//             document.location.replace('/');
//         } else {
//             alert('Please enter a post');
//         }
//     }
// };




// const handleDelete = async (event) => {
//     // TODO: data-id comes from handlebars-- make it post.name or something

//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');

//         const response = await fetch(`/api/postRoutes/${id}`, {
//             method: 'DELETE',
//         });

//         if (response.ok) {
//             // TODO: might adjust homepage depending on handlebars
//             document.location.replace('/api/postRoutes');
//         } else {
//             alert('Failed to delete project');
//         }
//     }
// };



// // handles all the event listeners
// const handleButtons = async () => {
//     const delete_buttons = document.querySelectorAll('.deleteBut');

//     if (postForm) {
//         postForm.addEventListener('submit', handlePost);
//     }

//     if (commentForm) {
//         commentForm.addEventListener('submit', handleComment);
//     }

//     delete_buttons.forEach((deletePost) => {

//         deletePost.addEventListener('submit', handleDelete);

//     });

// };


// handleButtons();


// const newFormHandler = async (event) => {
//     event.preventDefault();

//     const content = document.querySelector('#comment-content').value.trim();
//     console.log(content)
//     //get post ID to use when creating new comment
//     const postId = document.querySelector('#comment-content').getAttribute('post_id');
//     console.log(postId)
//     if (content) {
//       const response = await fetch(`/api/comments`, {
//         method: 'POST',
//         body: JSON.stringify({ content, postId }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
     
//       if (response.ok) {
//         document.location.replace(`/posts/${postId}`);
//       } else {
//         alert('Failed to create comment');
//       }
//     }
//   };
  
// document
//   .querySelector('.new-comment-form')
//   .addEventListener('submit', newFormHandler);
  

