const handlePost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const postContent = document.querySelector('#post').value.trim();

    if (title && postContent) {

        // add route
        const response = await fetch('/', {
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
        const response = await fetch('/', {
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


document
    .querySelector('.postForm')
    .addEventListener('submit', handlePost);

document
    .querySelector('.commentForm')
    .addEventListener('submit', handleComment);