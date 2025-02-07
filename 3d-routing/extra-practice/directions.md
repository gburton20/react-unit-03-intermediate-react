# Assignment: Building a Single-Page Application with React Router

**Objective:**

Create a React application that utilizes React Router to navigate between different pages. The app will include a Home page, an About page, and a Users page that fetches data from an API. You will get further practice setting up routing, navigating between routes, and passing data between components.

### Step 1: Set Up the React Project

Use `Create React App` to set up the boilerplate for your application. Install React Router before running the development server to manage navigation in your React application.

1. Open your terminal.

2. Run the following command to create a new React application:

```bash
npx create-react-app react-router-extra-practice-app
```

3. Navigate into your project directory:

```bash
cd react-router-extra-practice-app
```

4. Install React Router:

```bash
npm install react-router-dom
```

**Check:** Verify that React Router is listed as a dependency in your `package.json` file.

Once you have installed React Router and confirmed it's in your dependencies, you’re ready to move on to the next step.

### Step 2: Create the Home Component

1. In your `src` directory, create a file named `Home.js`.
2. Inside `Home.js`, create a function declaration and name it `Home`.
3. Add a `return` statement that returns a `div` element.
4. Inside the `div` element, add an `h1` element with the text "Home Page".
5. Export the `Home` function.
6. In `index.js`, import and wrap your app in the `BrowserRouter` component from `react-router-dom`.
7. Inside `App.js`, set up the router by importing the necessary components from `react-router-dom`.
8. In the `return` statement, create a `div` with the `className` of "App".
9. Inside that `div`, create another `div` with a `className` of "content".
10.  Inside the "content" `div`, set up the `Routes` and `Route` components to define your routes.
11. For now, include only the `Home` component.
12. Start the development server:

```
npm start
```

**Check:** Ensure that the `Home` component is displayed correctly when you navigate to the root URL (`/`).

Once you've created the `Home` component and confirmed it renders correctly, you’re ready to move on to the next step.

### Step 3: Create the About Component

1. In your `src` directory, create a file named `About.js`.
2. Inside `About.js`, create a function declaration and name it `About`.
3. Add a `return` statement that returns a `div` element.
4. Inside the `div` element, add an `h1` element with the text "About Page".
5. Export the `About` function.
6. Update the `App` component's routes to include the `About` component.

**Check:** Ensure the `About` component is displayed correctly when you navigate to the `/about` URL.

Once you've created the `About` component and confirmed it renders correctly, you’re ready to move on to the next step.

### Step 4: Create the Users Component

1. In your `src` directory, create a file named `Users.js`.
2. Inside `Users.js`, create a function declaration and name it `Users`.
3. Initialize a state variable called `users` with an empty array using the `useState` hook.
4. Import the `useEffect` hook and create a `useEffect` call.
5. Inside the `useEffect` call, create an `async` function named `fetchUsers`.
6. In the `fetchUsers` function, make a `fetch` call to the URL `https://jsonplaceholder.typicode.com/users` and store the result in a variable.
7. Convert the result to JSON and store it in another variable.
8. Update the `users` state variable with the JSON result.
9. Call the `fetchUsers` function inside the `useEffect`.
10. Inside the `Users` function, add a `return` statement that returns a `div`.
11. Inside the `div` element, map over the `users` state variable and return a nested `div` element for each user in the `users` array. Give each nested `div` the class of `user-item`.
12. For each user, display the `name`, `email`, and `phone` properties inside `p` elements.
13. Export the `Users` function.
14. Update the `App` component's routes to include the `Users` component.

**Check**: Ensure the `Users` component fetches and displays the user data correctly when you navigate to the `/users` URL.

Once you've created the `Users` component and confirmed it renders correctly, you’re ready to move on to the next step.

### Step 5: Create the Navbar Component

Create a navigation bar to help users navigate between the different pages.

1. In your `src` directory, create a file named `Navbar.js`.
2. Inside `Navbar.js`, create a function declaration and name it `Navbar`.
3. Use `Link` from `react-router-dom` to create navigation links to the Home, About, and Users pages.
4. Add a `return` statement that returns a `nav` element.
5. Inside the `nav` element, add `Link` components for Home, About, and Users with `to` attributes set to `/`, `/about`, and `/users` respectively.
6. Export the `Navbar` function.
7. In `App.js`, import the `Navbar` component and render it in the return statement, _inside_ the "App" `div` but _above_ the "content" `div`.

**Check**: Ensure the `Navbar` component is displayed correctly and that the navigation links work as expected.

Once you've created the `Navbar` component and confirmed it renders and works correctly, you’re ready to move on to the next step.

### Step 6: Style the Navbar Component

Enhance the appearance of the Navbar with some basic styling.

1. Create a CSS file named `Navbar.css` in the `src` directory.
2. Add styles to ensure the Navbar looks polished and professional.

**File:** `Navbar.css`

```css
nav {
  background-color: #333;
  padding: 10px;
}

nav a {
  color: white;
  margin-right: 10px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
```

3. Import the CSS file in your Navbar component.

**Check**: Ensure the Navbar component is styled correctly and that the navigation links display with the correct styles.

Once you've styled the Navbar and confirmed it renders correctly, you’re ready to move on to the next step.

### Step 7: Add Some Basic Styling to Your Application

Let's add some basic styling to your application to improve its appearance.

1. Replace the CSS in `App.css` with the following:

**File:** `App.css`

```css
.App {
  font-family: Arial, sans-serif;
  text-align: center;
}

.content {
  padding: 20px;
}

.user-item {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}
```

2. Import the CSS file in your App component.

**Check**: Ensure the application is styled correctly and that the styling is applied consistently across all components.

Once you've added the basic styling and confirmed it renders correctly, you’re ready to move on to the next step.

### Step 8: Final Testing and Review

Now that you’ve built your app, it’s time to test and review everything to ensure it works as expected.

1. **Run Your App:**

   - Make sure your development server is running:

```
npm start
```

2. **Test Your Components:**

   - Verify that the Navbar displays correctly and that the navigation links work as expected.
   - Ensure the Home, About, and Users pages display correctly.
   - Confirm that the Users page correctly fetches and displays user data from the API.

3. **Check Navigation:**

   - Navigate through different routes and ensure that the content updates without refreshing the page.
   - Use the browser's back and forward buttons to check the navigation history.

#### Summary:

- You’ve successfully created a React application that utilizes React Router to navigate between different pages.
- You’ve implemented a Home, About, and Users page that fetches data from an API.
- You’ve learned how to set up routing, navigate between routes, and pass data between components.

Congratulations on completing the assignment! Feel free to ask if you need further assistance or have any questions.
