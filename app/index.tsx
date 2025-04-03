import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello again</Text>
      <Text style={styles.text}>Testing April 03 , 2025 7:30 PM</Text>
      <Link href="/about" style={styles.button}>
        {" "}
        About
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
    color: "yellow",
  },
  button: {
    backgroundColor: "brown",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    padding: 10,
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
// @ts-ignore
