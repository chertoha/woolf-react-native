import "react-native-gesture-handler";
import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigator from "./navigation/StackNavigator";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config";
import { loginUser, logoutUser } from "./redux/auth/slice";

SplashScreen.preventAutoHideAsync();

const AuthListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log("user", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const email = user.email;
        const displayName = user.displayName;
        // ...
        // console.log("onAuthStateChanged -> Logged ->", user);
        dispatch(loginUser({ uid, email, displayName }));
      } else {
        // User is signed out
        // ...
        // console.log("onAuthStateChanged -> Not Logged");
        dispatch(logoutUser());
      }
    });
  }, [dispatch]);

  return <StackNavigator />;
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <Provider store={store.store}>
        <PersistGate
          loading={<Text>Loading...</Text>}
          persistor={store.persistor}
        >
          <AuthListener />
        </PersistGate>
      </Provider>
    </>
  );
}
