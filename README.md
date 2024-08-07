# 2006-MACS2-JENTS

## Project Mission Statement
In Singapore, buying public housing for the first time can be a daunting task for young adults. As such, we have elected to create a convenient and intuitive website for Singaporeans to get easy access to the housing market.

## Deployed App (Non-stable)
https://simply-stay.vercel.app/

NOTE: The vercel app is non-stable, meaning that some features such as the register/login with google function, or the google maps display, does not work. For best performance, localhost is highly recommended.

## How To Setup
1. Clone the repository
2. Go to the file directory with command prompt
3. Type `npm install` to install the dependencies needed for the project
4. Create a `.env` file at the root folder containing the following variables needed for the Firebase configuration:
```env
REACT_APP_API_KEY = "YOUR_FIREBASE_API_KEY"
REACT_APP_AUTH_DOMAIN = "YOUR_FIREBASE_AUTH_DOMAIN"
REACT_APP_PROJECT_ID = "YOUR_FIREBASE_PROJECT_ID"
REACT_APP_STORAGE_BUCKET = "YOUR_FIREBASE_STORAGE_BUCKET"
REACT_APP_MESSAGING_SENDER_ID = "YOUR_FIREBASE_MESSAGING_SENDER_ID"
REACT_APP_APP_ID = "YOUR_FIREBASE_APP_ID"
REACT_APP_MEASUREMENT_ID = "YOUR_FIREBASE_MEASUREMENT_ID"
```
6. Type `npm start`
7. Have fun!

## Tech Stack
FR(A)N \[Firebase, React (Ant Design UI), Node.js\]
<div>
<img src = "http://img.shields.io/badge/firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black" alt = "Firebase">
<img src = "http://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=black" alt = "React">
<img src = "http://img.shields.io/badge/antdesign-0170FE?style=flat-square&logo=antdesign&logoColor=black" alt = "Ant Design UI">
<img src = "http://img.shields.io/badge/nodejs-339933?style=flat-square&logo=nodedotjs&logoColor=black" alt = "nodejs">
</div>
<div>
<img src="http://img.shields.io/badge/Javascript-fcd400?style=flat-square&logo=javascript&logoColor=black" alt="Javascript">
<img src = "http://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=black" alt = "npm">
<img src="https://img.shields.io/badge/React Router-black?style=flat-square&logo=reactrouter&logoColor=CA4245" alt="React-Router">
</div>

## Folder Organisation and Guide
```
├── SimplyStay
|   ├── Documentation
|   ├── public
|   ├── src
        ├── Components
        ├── FlatData
        ├── Images
        ├── Pages
        ├── Utility
        ├── App.css
        ├── App.js
        ├── firebase.js
        ├── index.css
        ├── index.js
        ├── reportWebVitals.js
|   ├── .gitignore
|   ├── README.md
|   ├── package-lock.json
|   ├── package.json
```

### `Documentation` folder
All of the necessary documentation, such as the SRS document and analysis models, can be found here.

#### `Components` folder
The `Components` folder contains the necessary components needed to make the website function. Each component has its own documentation at the start of the file.

#### `FlatData` folder
The `FlatData` folder contains flat information for all of the flats in the website.

#### `Images` folder
The `Images` folder contains images used in the website.

#### `Pages` folder
The `Pages` folder contains the UI for the website.

#### `Utility` folder
The `Utility` folder contains important functions used in the website.

#### `App.js` & `App.css`
Displays the main app.

#### `firebase.js`
Contains the configuration for our Firestore database.

#### `index.js` & `index.css`
When `npm start` is called, these two files will be called to render the main app.

#### `reportWebVitals.js`
Necessary for the deployed Vercel app to function.

## Group Members:
- [Jia Ji](https://github.com/JiaJi99)
- [Enric](https://github.com/etdz)
- [Nigel](https://github.com/nigelip)
- [Jared](https://github.com/themandude2)
- [Zheng Jie](https://github.com/saffronrust)
