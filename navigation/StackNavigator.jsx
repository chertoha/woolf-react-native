import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogoutIcon from "../icons/LogoutIcon";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import PostsScreen from "../screens/PostsScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import CommentsScreen from "../screens/CommentsScreen";
import BackButton from "../components/BackButton";

const MainStack = createStackNavigator();

const StackNavigator = () => {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {isLoggedIn ? (
          <>
            <MainStack.Screen name="Home" component={BottomTabNavigator} />
            <MainStack.Screen
              name="Comments"
              component={CommentsScreen}
              options={{
                headerShown: true,
                title: "Коментарі",
                headerLeft: () => <BackButton />,
                // tabBarIcon: ({ focused, color, size }) => null,
                // tabBarStyle: { display: "none" },
              }}
            />
          </>
        ) : (
          <>
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
            />
            <MainStack.Screen name="Login" component={LoginScreen} />
          </>
        )}
        {/* <MainStack.Screen name="Registration" component={RegistrationScreen} /> */}
        {/* <MainStack.Screen name="Login" component={LoginScreen} /> */}
        {/* <MainStack.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            title: "Публікації",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 17,
              lineHeight: 22,
              paddingVertical: 11,
              // borderBottomWidth: 1,
              // borderBottomColor: "black",
            },
            // headerLeft: () => (
            //   <ArrowBackIcon
            //     name="menu"
            //     size={24}
            //     color="black"
            //     onPress={() => alert("Меню")}
            //     style={{ marginLeft: 15 }}
            //   />
            // ),

            headerRight: () => <LogoutIcon style={{ marginRight: 16 }} />,
          }}
        /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
