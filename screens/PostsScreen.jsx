import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

const PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>sldlkjsldfkjsldfkjl</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
        <Text>To Comments</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // borderWidth: 1,
    // borderTopColor: "#B3B3B3",
    // borderBottomColor: "#B3B3B3",
  },
});

export default PostsScreen;
