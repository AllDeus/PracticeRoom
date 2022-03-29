const handleBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const blogContent = document.querySelector('#blog').value.trim();

    if (title && blogContent) {

        const response = await fetch('/discussion', {
            method: 'POST',
            body: JSON.stringify({ title, blogContent }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log('hello');
        if (response.ok) {

            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};
document
    .querySelector('.blogForm')
    .addEventListener('submit', handleBlog);
