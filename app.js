import { signupUser, redirectIfLoggedIn } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');
const signUpEmailInput = document.getElementById('sign-up-email');
const signUpPasswordInput = document.getElementById('sign-up-password');

// Wire up sign in and sign up forms to supabase
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // should return user data if successful signup
    const user = await signupUser(signUpEmailInput.value, signUpPasswordInput.value);
    console.log(user);

    // check if logged in after signing up, redirect to content page if so
    if (user) {
        //     redirectIfLoggedIn();
    } else {
        console.log(user);
    }
});
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
