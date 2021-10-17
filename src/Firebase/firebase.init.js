import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/*  Steps for Authentication

----------------------------------

Initial Setup

1. firebase: create project
2.create web app
3. Get Configaration
4. Initialize firebase
5. enable auth method

--------------------------------

Step -2:
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

_________________________________

step -3;
1. set up sign in method
2. setup sign out method
3. user state
4. special observer

*/