# `useEffect` Pokemon Assignment

### Step 1: Set Up the React Project

Use `Create React App` to set up the boilerplate for your application. Ensure your project is running successfully before proceeding.

1. Open your terminal.

2. Run the following command to create a new React application:

```bash
npx create-react-app pokemon-toggle-app
```

3. Navigate into your project directory:

```bash
cd pokemon-toggle-app
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000` to see the default Create React App template.

Once you have verified that the basic Create React App boilerplate is up and running in your browser, you’re ready to move on to the next step.

### Step 2: Exploring the PokeAPI

Spend some time exploring the PokeAPI. Familiarize yourself with how to make requests and the structure of the data returned.

##### Access the API:

1. Visit the PokeAPI documentation: [https://pokeapi.co/docs/v2](https://pokeapi.co/docs/v2)
2. Use your browser or a tool like Postman to make a GET request to `https://pokeapi.co/api/v2/pokemon/{name or id}`.
3. Replace `{name or id}` with a Pokémon's name (e.g., `bulbasaur`) or ID (e.g., `1`).

##### Review the JSON Response:

Example JSON response for Bulbasaur:

```json
{
  "name": "bulbasaur",
  "id": 1,
  "sprites": {
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
  },
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ]
}
```

Focus on fields like name, id, sprites, and types.

Once you've reviewed and understood the structure of the JSON response, you're ready to move on to the next step.

### Step 3: Designing the React App

This step is broken down into detailed sub-steps for each component of the app. Follow these steps carefully to build the app incrementally.

##### Search Bar

Create an input field where users can enter the name of a Pokémon and a button to trigger the search.

1. **Add State for Search Query:**

   - Create a state variable to manage the search query input.
   - Example:

```jsx
const [searchQuery, setSearchQuery] = useState("");
```

2. **Handle Input Changes:**

   - Add an `onChange` event to update the state whenever the user types in the input field.
   - Example:

```jsx
<input
  type="text"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  placeholder="Enter Pokémon name"
/>
```

3. **Trigger the Search:**

   - Create a function to handle form submission and set another state for the Pokémon name.
   - Example:

```jsx
const handleSearch = (e) => {
  e.preventDefault();
  setPokemonName(searchQuery.toLowerCase());
};
```

##### Display Area

Create an area to display the fetched Pokémon's image. Use state to manage the displayed image and whether to show the front or back image.

1. **Add State for Pokémon Image:**

   - Create a state variable to manage the Pokémon image URL.
   - Example:

```jsx
const [pokemonImage, setPokemonImage] = useState("");
```

2. **Manage Front/Back Image Toggle:**

   - Create a state variable to manage whether the front or back image is displayed.
   - Example:

```jsx
const [isFront, setIsFront] = useState(true);
```

##### Toggle Functionality

Implement functionality to toggle between the front and back images when the image is clicked. Use `useEffect` to fetch the image based on the current state.

1. **Create an Effect Hook:**

   - Use `useEffect` to make an API request based on the `isFront` and `pokemonName` states.
   - The `useEffect` should be dependent on a state variable that updates when the user submits the Pokémon name.
   - Example:

```jsx
useEffect(() => {
  const fetchPokemonImage = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();
    setPokemonImage(
      data.sprites[isFront ? "front_default" : "back_default"]
    );
  };

  if (pokemonName) {
    fetchPokemonImage();
  }
}, [isFront, pokemonName]);
```

2. **Handle Image Click:**

   - Add an `onClick` event to the image to toggle the `isFront` state.
   - Example:

```jsx
<div onClick={() => setIsFront((prevIsFront) => !prevIsFront)}>
  <img src={pokemonImage} alt={pokemonName} />
</div>
```

##### Putting It All Together

Combine the components (Search Bar, Display Area, and Toggle Functionality) to create a cohesive user experience.

1. **Structure the Component:**

   - Create a main component to house the search bar, display area, and toggle functionality.
   - Example structure:

```jsx
return (
  <div>
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button type="submit">Search</button>
    </form>
    {pokemonImage && (
      <div onClick={() => setIsFront((prevIsFront) => !prevIsFront)}>
        <img src={pokemonImage} alt={pokemonName} />
      </div>
    )}
  </div>
);
```

2. **Test Your App:**

   - Test your app thoroughly to ensure it works as expected.
   - Handle various edge cases, such as invalid Pokémon names or network errors.

### Bonus Challenges

- Allow users to search for Pokémon by their ID as well as by their name.
- Add additional details about the Pokémon, such as its type, abilities, and stats.
- Style the app to make it visually appealing.
