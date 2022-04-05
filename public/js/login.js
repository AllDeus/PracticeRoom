const loginFormHandler = async (event) => {
    event.preventDefault();
    // username is email
    const username = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // await response from /auth/login, verify { username ,password }
    if (username && password) {
        // username is email
        const response = await fetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // TODO: replace /profile with redirected page
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#name-signup').value.trim();
    // username is email
    const username = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && username && password) {
        const response = await fetch('/auth/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // TODO: replace /profile with redirected page
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

const toggleSignup = () => {

}

const toggleLogin = () => {

}



document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
