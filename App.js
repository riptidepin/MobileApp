import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Button } from "@react-native-material/core";

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/Barbie.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Barbie App</Text>
      <Text style={styles.description}>
        Explore the magical world of Barbie and unleash your imagination!
      </Text>
      <Button
        title="Register"
        onPress={() => alert("Register button clicked!")}
        style={styles.button}
      />
      <Button
        title="Login"
        onPress={() => alert("Login button clicked!")}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCE4EC", // Light pink color
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FF69B4", // Hot pink color
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#444444", // Dark gray color
  },
  button: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "#F06292", // Pink color
  },
});

export default App;
