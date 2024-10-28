import { Image, StyleSheet, Text, View } from "react-native";
import FeedbackIcon from "../icons/FeedbackIcon";
import LocationIcon from "../icons/LocationIcon";

const PostCard = ({ card: { img, title, comments, location } }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={img} style={styles.cardImage} />

      <Text style={styles.cardTitle}>{title}</Text>

      <View style={styles.cardMeta}>
        <View style={[styles.iconedWrapper, { gap: 6 }]}>
          <Text>
            <FeedbackIcon />
          </Text>
          <Text>{comments}</Text>
        </View>

        <View style={[styles.iconedWrapper, { gap: 3 }]}>
          <Text>
            <LocationIcon />
          </Text>
          <Text>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {},

  cardImage: {
    borderRadius: 8,
    width: "100%",
    height: 240,
  },

  cardTitle: {
    marginTop: 8,
  },

  cardMeta: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  iconedWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  cardComments: {},

  cardLocation: {},
});

export default PostCard;
