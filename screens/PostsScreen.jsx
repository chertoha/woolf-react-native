import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/global";
import avatarImage from "../assets/avatar.jpg";
import woodsImage from "../assets/woods.jpg";

import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";
// import { posts } from "../utils/mockData";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../redux/posts/selectors";
import { setPosts } from "../redux/posts/slice";

const PostsScreen = () => {
  // const [posts, setPosts] = useState([]);
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  // console.log(posts);
  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        // preview: doc.data().preview || woodsImage,
        preview: woodsImage,
        name: doc.data().name || "Noname",
        comments: doc.data().comments || [],
        place: doc.data().place || "no where",
        likes: doc.data().likes || 0,
        location: doc.data().location || null,
      }));

      dispatch(setPosts(data));
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          source={avatarImage}
          resizeMode="cover"
          style={styles.userAvatar}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>

      <View style={styles.list}>
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostCard card={item} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 32 }}></View>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 32,
    paddingHorizontal: 16,
    paddingBottom: 80,
  },

  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  userAvatar: {
    borderRadius: 16,
    width: 60,
    height: 60,
  },

  userName: {
    fontSize: 13,
    fontWeight: "700",
  },

  userEmail: {
    fontSize: 11,
  },

  list: {
    marginTop: 32,
  },
});

export default PostsScreen;
