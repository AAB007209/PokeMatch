# PokeMatch
This a Basic JS project called Memory Game - Pokematch. For learning the Basic concepts of JavaScript.

<br />

## Key Concepts learnt while building this Project :

### 1. Asynchronous JavaScript (Promises and async/await):
   * **Concept**: Handling asynchronous operations in JavaScript, particularly fetching data from an API.
   * **Application**: The loadPokemon function uses fetch and Promise.all to retrieve data from the Pokémon API, and async/await to handle the asynchronous nature of these requests smoothly.

### 2. DOM Manipulation:
   * **Concept**: Interacting with and updating the Document Object Model (DOM) to change what’s displayed on the web page.
   * **Application**: Functions like displayPokemon, clickCard, and resetGame manipulate the DOM by creating and updating elements dynamically based on user interactions and API data.

### 3. Event Handling:
  * **Concept**: Capturing and responding to user interactions such as clicks.
  * **Application**: The clickCard function is triggered when a user clicks on a card, and handles game logic such as flipping the cards and checking for matches.

### 4. Data Attributes:
  * **Concept**: Using custom data attributes (data-*) to store extra information on HTML elements.
  * **Application**: The cards use data-pokemon attributes to store the Pokémon names, which are then used to compare cards when a user makes a selection.

### 5. Array Manipulation:
  * **Concept**: Working with JavaScript arrays to store, sort, and manipulate data.
  * **Application**: Pokémon data is stored in arrays, shuffled, and mapped to dynamically generate HTML elements representing the cards.

### 6. Object Destructuring:
  * **Concept**: Extracting values from objects and arrays into distinct variables.
  * **Application**: The code uses destructuring to extract front and back elements of a card and to access specific Pokémon properties.

### 7. Conditional Rendering:
  * **Concept**: Displaying different content or styles based on certain conditions.
  * **Application**: The project conditionally renders the cards based on the current state of the game (e.g., hiding the front of the card if it’s not been matched). The project uses CSS to style the cards, apply color based on Pokémon type, and animate card flips with the .rotated class.

### 8. Game Logic and State Management
  * **Concept**: Managing the state of a game, including keeping track of matches, user selections, and game progress. Also using delays when required using setTimeout().
  * **Application**: The project manages game state variables like isPaused, firstPick, and matches, and uses logic in the clickCard function to determine game outcomes.

<hr />

### API used in this Project - https://pokeapi.co

### References :
* Youtube Reference Video - https://www.youtube.com/watch?v=Z2O3QxpcdSk
* Reference Github Link of Project - https://github.com/jamesqquick/javascript-memory-match/tree/master

