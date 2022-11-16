// Enter Supabase Information
const SUPABASE_URL = 'https://sagftzksyhlnwvwqislb.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZ2Z0emtzeWhsbnd2d3Fpc2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgxMzcsImV4cCI6MTk4MzY4NDEzN30.YKP0xHsE1Oo9sKmU0QIHWN5YTQFCCQYfW4p1zJ1iOtw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// returns a user, if there is one
export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

// signs in new user, puts auth token in local browser storage
export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    return response.user;
}

// signs in existing user, puts auth token in local browser storage
export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}

// call on page load: when called, redirects to login page if not logged in
export async function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

// called on page load, redirects away from page if user is already logged in
export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page/');
    }
}

// logs out user, redirects to login page
export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}
