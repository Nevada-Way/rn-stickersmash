import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Link href="/+not-found" style={styles.button}>
        {" "}
        Try the 404 Error screen
      </Link>
    </View>
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
    color: "red",
  },
  button: {
    backgroundColor: "blue",
    fontSize: 12,
    color: "white",
    textAlign: "center",
    padding: 10,
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
