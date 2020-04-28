# Guess A Number Game  
  
## Table of Content
1. [Project information](#appinfo)
2. [Technologies](#technologies)
3. [Design](#design)
4. [Features](#features)
5. [Installation](#installation)
6. [Inspiration](#inspiration)


<a name="appinfo"></a>
## Project information
It is a React-Native App. It is a game to let user input a number and let the phone to randomly guess it. During the guessing, user needs to provide hint (smaller/larger) to the phone.  
<img  src="https://github.com/fishxxxx/RN-NumberGame/blob/master/app_demo1.gif" width="300">

<a name="technologies"></a>
## Technology
 - [Expo](https://expo.io/)
 - [React-native](https://reactnative.dev/)
    - View, Text, StyleSheet, Alert, ScrollView
 - [React-Hook](https://reactjs.org/docs/hooks-intro.html)
 - using Google Fonts

<a name="design"></a>
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

<a name="features"></a>
## Features
 - move between different pages
 - display every moves made by phone
 - error reminder
 - winning page
 
<a name="installation"></a>
## Installation
```
npm install expo-cli --global
expo start

# open Android / iOS Emulator 
```

<a name="inspiration"></a>
## Inspiration
This is base on [React Native - The Practical Guide 2020](https://www.udemy.com/course/react-native-the-practical-guide/) by Maximilian Schwarzmüller
