import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Not Found Screen" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go Home
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "yellow",
  },
  button: {
    backgroundColor: "green",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    padding: 10,
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
