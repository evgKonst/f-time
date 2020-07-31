import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./fireScreens/LoadingScreen";
import RegisterScreen from "./fireScreens/RegisterScreen";
import HomeScreen from "./fireScreens/HomeScreen";
import LoginScreen from "./fireScreens/LoginScreen";
import App from "./Application";
import dotenv from "dotenv";

import * as firebase from "firebase";

dotenv.config();

var firebaseConfig = {
  apiKey: "AIzaSyDv-IaTVlmdj8e2eH5bkEmJU8YP2dB79JA",
  authDomain: "ftime-d9474.firebaseapp.com",
  databaseURL: "https://ftime-d9474.firebaseio.com",
  projectId: "ftime-d9474",
  storageBucket: "ftime-d9474.appspot.com",
  messagingSenderId: "991438182271",
  appId: "1:991438182271:web:b74a712343b1e68343ac4a",
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  ["F-TIME"]: App,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    { initialRouteName: "Loading" }
  )
);
