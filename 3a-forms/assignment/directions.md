# State Forms - Assignment

**Objective:**

Learn how to use `useState` to manage form state in React and dynamically render the results of answering a trivia question with the results from that form data. This assignment will guide you through creating a form, managing its state, and displaying the form data in a results card.

**Overview:**

There are 3 components in this project:

- **`App`:** The main component that renders the form and the results.
- **`TriviaForm`:** A form component that manages the form state and handles form submission.
- **`ResultsCard`:** A component that displays the form data for the user.

Here is the overall architecture of components, state, and props:

- The `App` component renders both other components and receives the form data from the `TriviaForm` component.
  - It receives the form data by passing a function as a prop to the `TriviaForm` component.
  - The `TriviaForm` component calls this function with the form data when the form is submitted.
  - `App` then passes the form data to the `ResultsCard` component, rendering `ResultsCard` conditionally when there _is_ form data to display.
- The `TriviaForm` component manages the form state and handles form submission.
  - It uses `useState` to manage the form state.
  - It has a form submission handler that prevents the default form submission behavior and calls the function it receives as a prop from `App` with the form data.
  - It renders the form fields and handles changes in the form fields.
  - It passes the form data to the function it receives as a prop from `App` when the form is submitted.
- The `ResultsCard` component handles displaying the results of submitting the form.
  - It receives the form data as props from `App`.
  - It then renders that data as results for the user.

### Steps

1. **Set Up Your Project:**

- Open the terminal to the `assignment` directory--the simplest way to do so is to right-click on the `assignment` folder in VS Code and select "Open in Integrated Terminal".

- In the terminal, type `npm create vite .` and hit enter/return. The `.` is important--this will create a new Vite project in the current directory.

- It will warn you that there are files here currently. Use the arrow keys and Enter/Return to select "Ignore files and continue". This allows us to keep our readme and any data/assets files we have in our new project folder.

- Choose React and then JavaScript from the following menus, using arrow keys and Enter/Return.

- Install dependencies by entering `npm install` in the terminal.

- Run the app by typing `npm run dev` in the terminal. This will provide a clickable link to open the app in your default browser, or you can navigate to the localhost URL in your browser.

2. **Install Bootstrap:**

- In the terminal, install Bootstrap by running:

```bash
npm install bootstrap
```

- Import Bootstrap into your project. In **/src/main.jsx** or **/src/App.jsx**, add the following line:

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

- Remove the import of `index.css` in `main.jsx` and _all_ imports in `App.jsx`.

3. **Create the `TriviaForm` Component:**

- In the **/src/** folder, create a new file named `TriviaForm.jsx`.
- Inside this file, define a functional component named `TriviaForm`. Don't forget to export it!
- Add a form structure (the HTML is below) with fields for:
  - Name
  - Answer

Here’s the HTML structure for the form:

```html
<form>
  <div>
    <label>Your Name:</label>
    <input type="text" name="name" onChange={handleChange} />
  </div>
  <div>
	<label>Answer the following question:</label>
  </div>
  <div>
    <label>Your Answer:</label>
    <input type="text" name="answer" onChange={handleChange} />
  </div>
  <button type="submit">Submit</button>
</form>
```

4. **Initialize State for the `TriviaForm` Fields:**

- Inside the `TriviaForm` component, use `useState` to create state for the following form fields:
  - `name`
  - `answer`
  
You can **either** do the above with an object, or with 1 state variable for each field. The object approach is recommended, particularly when you have more fields, but the choice is yours.
  
5. **Handle Changes in `TriviaForm` Fields**

- Either define a separate function for each field where you handle a change in that field and update the state for that field only, or define a single dynamic handler function to update the state based on whatever form field it's working with, based on its `name` attribute.
- In the change handler (or handlers), update state to match the form field's value. If you're using one state object, remember to use the spread operator, not mutate state. Log the current form state to the console. We'll use this later to confirm that our state updating is working.
- Add your state-updating change handlers to each form field in the JSX as an `onChange` attribute. Remember that when we use a function as an event handler, we do _not_ call the function ourselves--the browser calls it when the event happens--so do not add parentheses after your function name when setting the `onChange` attributes.

6. **Add Questions**

- Create a `questions-dev-mode.json` file in `src`. It should have the following contents:

``` json
[
  {
    "question": "What is the capital of France?",
    "answer": "Paris"
  },
  {
    "question": "What is 2 + 2?",
    "answer": "4"
  },
  {
    "question": "What color is the sky on a clear day?",
    "answer": "Blue"
  }
]
```

- You can create a more full and real `questions-dev-mode.json` file later, when you're done with the assignment. For now, the simplicity of these questions and being able to know the answer will really help with testing, which is why it's our Dev Mode file.

7. **Render `TriviaForm`**

In the App component:

- Remove all code inside the `App` function. Remove all imports if you didn't do so earlier.
- Import your questions with `import questions from './questions-dev-mode.json';`
- Select a random question from the questions array and store it in state. You can pass your imported questions into the following function to get back a random question:

```javascript
function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);

  return questions[randomIndex];
};
```

- Render the `TriviaForm` component, passing the random question object as a prop called `question`.

In `TriviaForm.jsx`:
- In `TriviaForm.jsx`, in the change handler, update state to match the values in the form fields. Then, to confirm this works, log the current form state to the console. Back in the browser, input something for each form field manually and check the browser console to confirm that the state updating works. It's possible that the state will be one step behind the form fields, but that's okay--that's just `useState` being asynchronous.
- You should now be getting the question object as a prop from the App component, so accept `props` in the `TriviaForm` function's argument list, and render the question text under the "Answer the following question:" `label`. If you're not sure what fields the `question` objects have, check `questions-dev-mode.json`.

In the browser:
  - Confirm that the question is being displayed in the form.
  - Input something for each form field manually and check the browser console to confirm that the state updating works. It's possible that the state will be one step behind the form fields, but that's okay--that's just `useState` being asynchronous. **Remove all log statements once you've confirmed this works.**

8. **Handle `TriviaForm` Submission:**

In `App.jsx`:

- Add a function to handle form submission. This function should take in the form data as an argument. For now, simply log that data. Ensure that, once we're submitting, the log will come from form submission by removing the log statement from the form's change handler(s), if you haven't already.
- Pass this function as a prop to the `TriviaForm` component.

In the `TriviaForm` component:

- Add a form submission handler function that
  - Prevents the default form submission behavior by calling the `event.preventDefault` method.
  - Passes the form state to the function it receives as a prop from App.
- Add your new form submission handler function as an `onSubmit` on the `form` element.

In the browser:
- Submit the form, and confirm that your app is logging that submitted data.

9. **Create the `ResultsCard` Component:**

- In the **/src/** folder, create a new file named `ResultsCard.jsx`.
- Inside this file, define a functional component named `ResultsCard`. Don't forget to export it!
- Take in `props` as an argument to the `ResultsCard` function. 
- Render your props as elements. This component should expect to receive as props:
  - The name of the person who submitted the form.
  - The answer they submitted.
  - The question object that was randomly selected. You'll want to display the question text and the correct answer from this object--again, if you're unsure what properties the question object has, check `questions-dev-mode.json`.
- Optional but recommended: display whether the user's answer matched the correct answer by conditionally rendering "Correct!" or "Incorrect!" You can create a value above the return statement and use an `if` statement to set it to "Correct!" or "Incorrect!" based on whether the user's answer matches the correct answer, and then render that value in the JSX. Or, alternately, use a ternary operator to conditionally evaluate to the correct text, placing that ternary right in the JSX so that it renders.

10. **Render the `ResultsCard`:**

In `App.jsx`:

- Change the form submission function so that instead of logging the data, it saves it in state. Set the `formData` state to be `null`by default, and then set it to the form data when the form is submitted.
- In the `App` component, render the `ResultsCard` component with the props it's expecting--the question object, the answer from the form submission, and the name from the form submission. Don't render it if there is no submitted form data--you can do this by conditionally rendering the `ResultsCard` component based on whether the form data is present in state.

In the `ResultsCard` component:

11. **Check Your Browser:**

- Save all your files and check your browser. You should be able to enter data into the form, submit it, and see it displayed.

**Bonus Tasks**:

- Style the card, making it visually appealing. One way you could go is the [Bootstrap's Card component](https://getbootstrap.com/docs/5.3/components/card/), but feel free to use your own styles or another set of Bootstrap components.
- Add a "New Question" button to reset things. Think through what state needs to be reset for that to happen.
- Track how many questions the user has gotten right and how many they've gotten wrong. Present this however you'd like.
- Add more trivia questions. You may still want to import dev mode questions instead at times for simplicity of development.

