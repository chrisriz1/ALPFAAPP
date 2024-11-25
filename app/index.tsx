import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../config/firebaseConfig";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "YOUR_WEB_CLIENT_ID", // Replace with your Web Client ID from Google Cloud Console
    iosClientId: "369385211483-1apjsm40e539tvoca6n7j25d5in0osfd.apps.googleusercontent.com",
    androidClientId: "YOUR_ANDROID_CLIENT_ID",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      // Create credential using the id_token
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          console.log("Logged in:", userCredential.user);
        })
        .catch((error) => {
          console.error("Error during Google login:", error);
        });
    }
  }, [response]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/alpfa_logo.png")}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <LinearGradient
          colors={["transparent", "rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 1)"]}
          style={styles.gradient}
        />
      </ImageBackground>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>ALPFA</Text>
        <Text style={styles.subtitleTitle}>Rutgers - NB</Text>
        <Text style={styles.subtitle}>Association of Latino Professionals for America</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="email-outline" size={24} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Continue with Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
            <AntDesign name="google" size={24} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="apple" size={24} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign In!</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  image: {
    resizeMode: "cover",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "60%",
  },
  contentContainer: {
    position: "absolute",
    top: "50%",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 48,
    color: "#d71920",
    fontFamily: "Poppins_700Bold",
    marginBottom: 5,
  },
  subtitleTitle: {
    fontSize: 28,
    color: "#d71920",
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d71920",
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 10,
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signInText: {
    fontSize: 16,
    color: "#333",
    marginTop: 20,
    marginBottom: 20,
  },
  signInLink: {
    color: "#007bff",
    fontWeight: "bold",
  },
});
