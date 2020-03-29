# Guess A Number Game

It is a React-Native App which is built by using [Expo](https://expo.io/).

It is really easy to start with.
```
expo init my-new-project
cd my-new-project
expo start
```
It is a game to let user input a number and let the phone to randomly guess it. During the guessing, user needs to provide hint (smaller/larger) to the phone.

## App Demo
<img  src="https://github.com/fishxxxx/RN-NumberGame/blob/master/app_demo1.gif" width="300">

## File Structure
```
├─ assets
│	├─ fonts
│	│	├─ OpenSans-Bold.ttf
│	│	└─ OpenSans-Regular.ttf
│	├─ icon.png
│	├─ images
│	│	└─ game_over.jpg
│	└─ splash.png
│
├─ components
│	├─ BodyText.js
│	├─ Card.js
│	├─ CustomButton.js
│	├─ Header.js
│	├─ Input.js
│	├─ NumberContainer.js
│	└─ TitleText.js
│
├─ constants
│	├─ colors.js
│	└─ default-styles.js
│
├─ screens
│	├─ GameOverPage.js
│	├─ GamePage.js
│	└─ StartGamePage.js
│
└─ App.js
```
