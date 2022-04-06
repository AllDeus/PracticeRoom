const userQuery = document.querySelector('.userQuery');

// handles user query
const handleQuery = async (event) => {
    event.preventDefault();

    const performer = document.querySelector('.performer').value.trim();

    if (performer) {

        // add route
        const response = await fetch(`/api/seatGeekRoutes/${performer}`, {
            method: 'GET',

            headers: { 'Content-Type': 'application/json' },
        });


        if (response.ok) {
            window.location = `/api/seatGeekRoutes/${performer}`;

        } else {
            alert('There was a problem. Please try again later');
        }
    } else {
        alert('Please enter an artist');
    }
};

// handles event listener
const handleButton = async () => {

    if (userQuery) {
        userQuery.addEventListener('submit', handleQuery);
    }
};

handleButton();