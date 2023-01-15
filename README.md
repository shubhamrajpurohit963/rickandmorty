# Rick and Morty App

### A React native app which shows rick & morty characters list in an infinite scroll view along with characters & episode details.

#### Tech used - React Native 0.70.6 (Latest as of 15/01/2023)

### APK

[APK LINK!](https://drive.google.com/file/d/1WxCRpbCNqT2N0vNbH5SyLW6Rs0ARkeGX/view?usp=sharing)

### App Video Demo

[App Video Demo](https://drive.google.com/file/d/1VW0v9zqlYY4V2bRDjbAJ8-QDwncd6Kz9/view?usp=sharing)

### Project Details:

1. APIs by : The Rick and Morty API (https://rickandmortyapi.com/documentation/#rest)
2. UI libary : React Native Paper (https://reactnativepaper.com/)
3. Icons : React Native Vector Icons (https://aboutreact.com/react-native-vector-icons/)

**_PROJECT has linting enabled (eslint)_**
**_PROJECT includes UI & Function testing testcases & setup (testing-library/react-native)_**

### App Details:

1. Character’s picture.
2. Character’s information (name, species, gender, etc.)
3. Origin and current location (name, dimension, amount of residents, etc.)
4. Name of the chapters the character is featured in.

## Installation :

Setup the React Native CLI Development environment for your machine if you haven't already: [Follow this guide](https://reactnative.dev/docs/environment-setup)

Now, follow the below steps in order to run the app:

1. Clone this repo using Sourcetree or using git.
2. `yarn install` to install node packages
3. `cd ios && pod install && cd ../` to generate ios pod files (skip if building for android only on windows)
4. `npx react-native start` to start the metro server (keep running in terminal)
5. `react-native run-android` (in separate/new terminal) to run app in android simulator. Before running android please open the android simulator to run the app
6. `react-native run-ios` (in separate/new terminal) to run the app in ios simulator
