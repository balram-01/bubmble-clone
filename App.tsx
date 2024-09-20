import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Swiper from "react-native-deck-swiper";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const SwipeCardUI = () => {
  const [cards] = useState([
    {
      id: 1,
      name: "Prajwal",
      age: 20,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Suyog",
      age: 21,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Neha",
      age: 22,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 4,
      name: "Amit",
      age: 23,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 5,
      name: "Rohit",
      age: 19,
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 6,
      name: "Sneha",
      age: 20,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 7,
      name: "Kajal",
      age: 24,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 8,
      name: "Rajesh",
      age: 21,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 9,
      name: "Pooja",
      age: 22,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 10,
      name: "Ankita",
      age: 23,
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ]);

  const [swipedLeftCount, setSwipedLeftCount] = useState(0);
  const [swipedRightCount, setSwipedRightCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const totalCards = cards.length;

  const [outOfLikes, setOutOfLikes] = useState(false);
  const [outOfProfiles, setOutOfProfiles] = useState(false);

  const onSwipedLeft = () => {
    setSwipedLeftCount((prev) => prev + 1);
    if (swipedLeftCount + 1 === totalCards) {
      setFinished(true);
      setOutOfProfiles(true);
    }
  };

  const onSwipedRight = () => {
    setSwipedRightCount((prev) => prev + 1);
    if (swipedRightCount + 1 === totalCards) {
      setFinished(true);
      setOutOfLikes(true);
    }
  };

  return (
    <View style={styles.container}>
      <>
        <View style={styles.topBar}>
          <Icon name="bars" size={24} color="#000" />
          {outOfLikes ? (
            <Text style={styles.outOfLikesText}>Out of likes</Text>
          ) : outOfProfiles ? (
            <Text style={styles.outOfLikesText}>Out of profiles</Text>
          ) : (
            <Text style={styles.outOfLikesText}>Bumble</Text>
          )}
          <Icon name="user-circle" size={24} color="#000" />
        </View>
        {finished ? (
          <View style={styles.finishedMessage}>
            <Text style={styles.finishedText}>Done for today!</Text>
          </View>
        ) : (
          <Swiper
            cards={cards}
            renderCard={(card) => (
              <View style={styles.card}>
                <Image
                  source={{ uri: card.image }}
                  style={styles.cardImage}
                  resizeMethod="scale"
                />
                <View style={styles.bffBadge}>
                  <Text style={styles.bffText}>bff</Text>
                </View>

                <View style={styles.badgeContainer}>
                  <View style={styles.newHereBadge}>
                    <Text style={styles.newHereText}>New here</Text>
                  </View>
                  <Text style={styles.userInfo}>
                    {card.name}, {card.age}
                  </Text>
                </View>
                <View style={styles.likeButton}>
                  <Icon name="star" size={32} color="#303430" />
                </View>
              </View>
            )}
            onSwipedLeft={onSwipedLeft}
            onSwipedRight={onSwipedRight}
            backgroundColor="transparent"
            stackSize={3}
          />
        )}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  finishedMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  finishedText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  outOfLikesText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    backgroundColor: "#FFC107",
    padding: 8,
    borderRadius: 30,
  },
  card: {
    width: width - 20,
    height: "100%",
    borderRadius: 15,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    resizeMode: "cover",
  },
  bffBadge: {
    position: "absolute",
    top: 15,
    left: 15,
    borderRadius: 40,
    padding: 10,
    zIndex: 1,
  },
  bffText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
    backgroundColor: "#FFC107",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderColor: "#34313A",
    borderWidth: 1,
  },
  userInfo: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
    zIndex: 1,
  },
  newHereBadge: {
    backgroundColor: "#FFC107",
    borderRadius: 20,
    padding: 8,
    zIndex: 1,
  },
  newHereText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  likeButton: {
    position: "absolute",
    bottom: 20,
    right: 15,
    backgroundColor: "#FEC301",
    borderRadius: 50,
    padding: 10,
    elevation: 5,
    zIndex: 1,
  },
  badgeContainer: {
    position: "absolute",
    bottom: 0,
    left: 15,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 100,
    zIndex: 1,
  },
});

export default SwipeCardUI;
