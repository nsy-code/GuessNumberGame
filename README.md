# Guess A Number Game

## Project information
It is a React-Native App. It is a game to let user input a number and let the phone to randomly guess it. During the guessing, user needs to provide hint (smaller/larger) to the phone.  
<img  src="https://github.com/fishxxxx/RN-NumberGame/blob/master/app_demo1.gif" width="300">

## Technology
 - [Expo](https://expo.io/)
 - [React-native](https://reactnative.dev/)
 - [React-Hook](https://reactjs.org/docs/hooks-intro.html)
 
## Installation
```
npm install expo-cli --global
expo start

# open Android / iOS Emulator 
```

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

## Inspiration
This is base on [React Native - The Practical Guide 2020](https://www.udemy.com/course/react-native-the-practical-guide/) by Maximilian Schwarzmüller
