# Instructions
We'll be making a simple single page React app that allows us to choose from a dropdown list of book genres and view a list of books within that genre. Here is an example of how the app will be [modelled](https://drive.google.com/file/d/1TWM3bhDDYdaxaPLvnFcZy-8zhyrsm7KL/view)

## Step 1
Making an API call using axios (a Javascript library used to make HTTP requests) inside a useEffect hook

In the App.js
- Import useEffect from React
- Create a useEffect hook that outputs a message to the console __once__ after the component has __mounted__ (remember to make use of the lecture slides)

- Install axios `npm i axios` and import it into your App.js as follows `import axios from 'axios'`
- Inside your useEffect hook use axios to make an API call to the following url: `http://openlibrary.org/subjects/thriller.json?limit=5` and output the response data to the console (remember to make use of your tutors)
<details>
<summary>Solution</summary>
<code>
  useEffect(() => {
    <br />
      axios.get(http://openlibrary.org/subjects/thriller.json?limit=5).then(response => console.log(response.data))
    <br />
  }, [])
</code>
</details>
<br />

## Step 2
Creating child components

- Create a `components` directory in the `src` directory
- In the components directory create a `Header.js` React component 
- In `Header.js`
    - Create a heading e.g. Book Search
    - Add a `<select>` dropdown menu containing 4 options: Thriller, Fantasy, Cats, Science ([how to create a select dropdown menu](https://www.w3schools.com/tags/tag_select.asp) - remember google is your friend!)
        - Make sure to set the value of the options to lowercase i.e. 
        `<option value="thriller">Thriller</option>`
    - Import the Header component into your App.js and use it within your return statement, you should be able to see the dropdown on the live site

- In the components directory create a `BooksContainer.js` React component, this component will be parent to 2 children (`BooksHeader.js` and `BooksList.js`) but for now should return only an empty div
- Import the BooksContainer component into your App.js and use it within your return statement underneath the Header component

- In the components directory create a `BooksHeader.js` React component, within the return statement add a paragraph containing the following text: Here is a list of books from your chosen subject
- Import the BooksHeader component into your BooksContainer.js

- In the components directory create a `BooksList.js` React component, this component will be used to display a list of books but should return an empty div for now
- Import the BooksList component into your BooksContainer.js

Checkpoint: Do you understand the [parent to child relationship of the components we've created thus far?](https://drive.google.com/file/d/1TWM3bhDDYdaxaPLvnFcZy-8zhyrsm7KL/view)
<br />
## Step 3
Making our API call based on the selected book genre

- Back in our App.js we want to import the useState hook and create a 'state manager'
    - subject/setSubject (with an initial value set to 'thriller')
- Modify the url string in the useEffect so instead of a hardcoded subject i.e. 'thriller' the subject is dictated by our subject state value, you will need to make the string a template literal
- Remember to add the subject variable to the dependency array of the useEffect as we now not only want the API call to be made when the component mounts but also when it updates
<details>
<summary>Solution</summary>
<code>
      axios.get(`http://openlibrary.org/subjects/${subject}.json?limit=5`)
</code>
</details>

- Create a handler function to update the state 
    - We've not covered event handling in depth yet but [this silde](https://docs.google.com/presentation/d/1jyaNLBVo-97cAE1r9Oq5QHyvNux4Cdj4gUX4EBWlfFY/edit#slide=id.ga3d8f8fdc1_0_603) will show you what you need to do 
- Pass your function down to the child Header component as a prop (ask your tutor if you're unsure on this)
- Destructure your prop in the Header component
- Add an `onChange` prop to the opening select tag and set that equal to the handler function you just destructured

When you change subjects in the dropdown you should now see the contents of the data in the console update to match your selected subject!

Though, we would like to view this data in our application as opposed to the console which is what we'll be doing in the next step.
<br />

## Step 4
- Back in our App.js we want to create a 'state manager'
    - booksData/setBooksData (with an initial value set to null)
- We then want to `setBooksData` with the response from our API call instead of outputting it to the console
<details>
<summary>Solution</summary>
<code>
      .then(response => setBooksData(response.data))
</code>
</details>

- Pass down a `booksData` prop to the BooksContainer component
- Destructure your prop in the BooksContainer component
- Pass down a `booksData` prop to the BooksList component
- Destructure your prop in the BooksList component
(This is an example of prop drilling in order to get data where you want it in your application)

- In your BooksList component create an unorganised list 
- Within your unorganised list you want to map over the `booksData.works` and return a list item for each element in the array containing:
    - the book title
    - the book's author

At this point you likely have an error in your application, why might this be?
<details>
<summary>Solution</summary>
<code>
      On the initial render booksData is null so we need to ensure that we only try to map over booksData when it exists!
      <br /><br />
      {booksData && booksData.works.map((book, index) => {
          <br />
          ...
</code>
</details>

Check the console for any other errors and/or warnings
<details>
<summary>Hint</summary>
<code>
      Have you included a key for each individual list item?
</code>
</details>
<br />

## Step 5
Replacing prop drilling with React Context

In App.js
- Import createContext from react 
- Create a variable `BooksContext` under your import statements and set that equal to `createContext()`
    - Add an export keyword before the variable you've just created
- Wrap the top level div in App.js with a `<BooksContext.Provider>` (remember to close the provider after the closing div)
- Add a value prop to the opening tag of the `<BooksContext.Provider>` and set that equal to an __object__ containing the `booksData` state and the function handler we created earlier to update the subject state
- As we are no longer prop drilling we can remove or comment out the props we have passed down to the Header and BooksContainer components in our App.js (this will temporariliy break our application as we implement context)

In the Header.js
- We can now remove/comment out the destructuring of the function handler we created earlier to update the subject state and replace it with:
`const { whateverICalledMyFunction } = useContext(BooksContext)`

In the BooksContainer.js
- We can also remove/comment out the destructuring of booksData. We won't be replacing it with anything as we no longer need to prop drill!

In the BooksList.js
- We can now remove/comment out the destructuring of booksData and replace it with:
`const { booksData } = useContext(BooksContext)`
<br />

## Step 6
Congratulations on getting this far! 🎉

As a stretch exercise, move your context into its own "provider" file (using the lecture slides as a guide).


<br /><br />

----------------------- 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
