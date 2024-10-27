import "react-native-gesture-handler";
import RegistrationScreen from "./screens/RegistrationScreen";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import bgImage from "./assets/bgd.jpg";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ArrowBackIcon from "./icons/ArrowBackIcon";
import LogoutIcon from "./icons/LogoutIcon";
import StackNavigator from "./navigation/StackNavigator";

SplashScreen.preventAutoHideAsync();
const MainStack = createStackNavigator();

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
    // <>
    //   {/* <LoginScreen /> */}
    //   {/* <RegistrationScreen /> */}
    //   <PostsScreen />
    // </>

    <StackNavigator />
    // <NavigationContainer>
    //   <MainStack.Navigator initialRouteName="Posts">
    //     <MainStack.Screen name="Registration" component={RegistrationScreen} />
    //     <MainStack.Screen name="Login" component={LoginScreen} />
    //     <MainStack.Screen
    //       name="Posts"
    //       component={PostsScreen}
    //       options={{
    //         title: "Публікації",
    //         headerTitleAlign: "center",
    //         headerTitleStyle: {
    //           fontSize: 17,
    //           lineHeight: 22,
    //           paddingVertical: 11,
    //           // borderBottomWidth: 1,
    //           // borderBottomColor: "black",
    //         },
    //         // headerLeft: () => (
    //         //   <ArrowBackIcon
    //         //     name="menu"
    //         //     size={24}
    //         //     color="black"
    //         //     onPress={() => alert("Меню")}
    //         //     style={{ marginLeft: 15 }}
    //         //   />
    //         // ),

    //         headerRight: () => <LogoutIcon style={{ marginRight: 16 }} />,
    //       }}
    //     />
    //   </MainStack.Navigator>
    // </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   text: {
//     fontFamily: "Roboto-Bold",
//   },
//   // bg: {
//   //   flex: 1,
//   //   justifyContent: "center",
//   // },
// });
