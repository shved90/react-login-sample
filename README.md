
## Available Scripts

In the project directory, you can run:

### `npm start` or `bun start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Rationale

A small React project aimed to demonstrate my understanding of plain React functionality amongst other tech. I deliberately avoided as much overhead packages as possible, keeping this example lean and clean. There are minimal NPM packages used, and no state management extensions such as Redux - there is no need to overcimplicate things. I believe with proper use of react context, use case for Redux is increadibly small.

In this login sample I demonstrate my understanding of React, in particular State management using Context, this is especially evident in language change functionality. Data is being made available throughout the entire application, allowing for smooth change of languange app-wide with minimal code.

I also lean heavily into Typescript and asserting types to most functions and instances where data expectation is important.

Instead of using cookies to store theme/language data, I leverage localStorage instead, which complies with GDPR and doesnt require a cookie notification banner.

As a temporary measure for the purposes of this demo, I use localStorage for login data as well, although its is not recommended - in case of a shared machine, this data is available to anyone and thus isnt secure. A solution would be to hash the password on the server before storing it locally.

Styling library of choice for this project was Tailwind for its popularity and frequent mentions on job descriptions. its default theme was extensively customised to fit this app design, requiring minimal use of custom styling. Theming was also used to apply light/dark theme to the app.

Not asserting pattern of max password length was a concious decision. I believe user should have the freedom to set whatever password they wish in whatever pattern they prefer, be it password manager assisted generation of character-soup, or an easier to remember passphrase with no special characters but just as hard to crack.

While a good demonstration of skill, this app is by no means complete and there are a lot of nice-to-haves and TODOs I'd like to implement when I have time. Eventually I'd like to implement them all to complete my vision of a fast, UX-friendly login experience within React infrastructure.

## TODO

* Create forgot password view and pass state from loginComponent.
* Add confirmation pages on form submission actions.
* Add validation error messages, double validation via JS to emulate server validation.
* Add an offer to generate password based on [sample JSON dictionary](https://github.com/dwyl/english-words/blob/master/words_dictionary.json).
* Add loading bar for login/registration actions, demonstrate usage of async/await.
* Look into hashing password storage.
* Add ability to go back from registration/forgot password views.
