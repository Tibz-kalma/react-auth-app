### Test Cases for Manual Testing

#### Test Case 1: Verify Landing Page Loads Successfully
**Test Objective:** Ensure the Landing Page loads correctly when navigating to the root URL.

**Steps:**
1. Open a web browser.
2. Navigate to `http://localhost:3000/`.

**Expected Result:** The Landing Page should load, and the text "Landing Page" should be visible.

#### Test Case 2: Verify Login Page Loads Successfully
**Test Objective:** Ensure the Login Page loads correctly when navigating to the `/login` URL.

**Steps:**
1. Open a web browser.
2. Navigate to `http://localhost:3000/login`.

**Expected Result:** The Login Page should load, and the text "Login Page" should be visible.

#### Test Case 3: Verify Successful Login
**Test Objective:** Ensure a user can log in with valid credentials.

**Steps:**
1. Open a web browser.
2. Navigate to `http://localhost:3000/login`.
3. Enter a valid username and password.
4. Click the "Login" button.

**Expected Result:** The user should be redirected to the dashboard, and a welcome message should be displayed.

#### Test Case 4: Verify Login with Invalid Credentials
**Test Objective:** Ensure the application handles invalid login attempts correctly.

**Steps:**
1. Open a web browser.
2. Navigate to `http://localhost:3000/login`.
3. Enter an invalid username and/or password.
4. Click the "Login" button.

**Expected Result:** An error message should be displayed indicating that the login attempt was unsuccessful.

#### Test Case 5: Verify Logout Functionality
**Test Objective:** Ensure a user can log out successfully.

**Steps:**
1. Log in to the application with valid credentials.
2. Click the "Logout" button.

**Expected Result:** The user should be redirected to the Login Page, and the session should be terminated.

#### Test Case 6: Verify Navigation to Profile Page
**Test Objective:** Ensure the user can navigate to the Profile Page after logging in.

**Steps:**
1. Log in to the application with valid credentials.
2. Click on the "Profile" link in the navigation menu.

**Expected Result:** The Profile Page should load, displaying the user's profile information.

#### Test Case 7: Verify Access to Protected Routes Without Authentication
**Test Objective:** Ensure that protected routes are not accessible without authentication.

**Steps:**
1. Open a web browser.
2. Navigate to a protected route (e.g., `http://localhost:3000/dashboard`) without logging in.

**Expected Result:** The user should be redirected to the Login Page.

#### Test Case 8: Verify Password Reset Functionality
**Test Objective:** Ensure that the password reset functionality works correctly.

**Steps:**
1. Open a web browser.
2. Navigate to `http://localhost:3000/forgot-password`.
3. Enter a valid email address.
4. Click the "Reset Password" button.

**Expected Result:** A success message should be displayed, and an email should be sent to the provided address with password reset instructions.

#### Test Case 9: Verify Error Handling for Non-Existent Pages
**Test Objective:** Ensure that the application handles non-existent pages correctly.

**Steps:**
1. Open a web browser.
2. Navigate to a non-existent URL (e.g., `http://localhost:3000/non-existent-page`).

**Expected Result:** A 404 error page should be displayed, indicating that the page does not exist.