import { checkAuth, logout } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');

// add event listener to the logout button and call logout

logoutButton.addEventListener('click', async () => {
    logout();
    checkAuth();

    console.log("if you're seeing this the logout didnt work");
});

// use checkAuth function to redirect is user not authenticated
checkAuth();
