import React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";

const WelcomeScreen = params => {
  return <View style={styles.container}>
      <Image source={{
      uri: "data:image/jpeg;base64,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"
    }} style={styles.logo} />
      <Text style={styles.mainText}>Welcome back!</Text>
      <Text style={styles.subText}>Brought to you by ATC Work Solutions!</Text>
      <Button buttonText={"Sign Up"} />
      <Button buttonText={"Log In"} outline={true} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    paddingBottom: 50
  },
  logo: {
    width: 250,
    height: 277,
    resizeMode: "contain",
    marginBottom: 20,
    alignSelf: "center"
  },
  mainText: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center"
  },
  subText: {
    fontSize: 14,
    color: "rgba(0,0,0,0.7)",
    textAlign: "center",
    marginHorizontal: 40,
    marginVertical: 10,
    fontWeight: "400",
    lineHeight: 50
  }
});
export default WelcomeScreen;

const Button = params => {
  const btnStyle = {
    backgroundColor: params.outline ? "#fff" : "#000",
    borderColor: params.outline ? "#000" : "#fff",
    borderWidth: 1
  };
  const btnText = {
    color: params.outline ? "#000" : "#fff"
  };
  return <View style={buttonStyles.btnContainer}>
      <Pressable style={[buttonStyles.btn, btnStyle]} onPress={params.onPress}>
        <Pressable><Text style={[buttonStyles.btnText, btnText]}>{params.buttonText}</Text></Pressable>
        <View style={styles.childrenContainer}>{params.children}</View>
      </Pressable>
    </View>;
};

const buttonStyles = StyleSheet.create({
  btnContainer: {
    paddingTop: 10,
    paddingHorizontal: 40,
    justifyContent: "center",
    marginTop: 20
  },
  btn: {
    backgroundColor: "black",
    height: 50,
    width: "100%",
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    elevation: 10,
    flexDirection: "row"
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  childrenContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});