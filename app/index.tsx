import { Link } from "expo-router";
import { Text, View } from "react-native";

const displayContent: {
  header: string;
  prependText: string;
  instructions: string;
  buttonHeader: string;
} = {
  header: "Color Moving Game",
  prependText: "How To Play",
  instructions:
    "Your goal is to move items one-by-one until each container is filled with items of one color. You can only move items to empty containers or to containers where the topmost item matches their color. If a container has 10 items, it is full and can no longer be added to. Empty containers can receive items of any color.",
  buttonHeader: "Tap Start To Begin",
};

export default function StartScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{displayContent.header}</Text>
      <Text>{displayContent.prependText}</Text>
      <Text>{displayContent.instructions}</Text>
      <Text>{displayContent.buttonHeader}</Text>
      <Link href="/game">Start Game</Link>
    </View>
  );
}
