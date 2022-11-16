import { signupUser, signInUser, redirectIfLoggedIn } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmailInput = document.getElementById('sign-in-email');
const signInPasswordInput = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmailInput = document.getElementById('sign-up-email');
const signUpPasswordInput = document.getElementById('sign-up-password');

// Wire up sign in and sign up forms to supabase
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // should return user data if successful signup
    const user = await signupUser(signUpEmailInput.value, signUpPasswordInput.value);

    // check if logged in after signing up, redirect to other page if so
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.log(user);
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // return user data if successful login
    const user = await signInUser(signInEmailInput.value, signInPasswordInput.value);

    // check user data to see if successful login, redirect if so
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.log(user);
    }
});

// Redirect to /other-page when page loads if user is authenticated
//redirectIfLoggedIn();
