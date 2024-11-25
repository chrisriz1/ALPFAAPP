import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Wait until fonts are loaded
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/alpfa_logo.png')}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        {/* Add a LinearGradient to create the fade effect */}
        <LinearGradient
          colors={['transparent', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 1)']}
          style={styles.gradient}
        />
      </ImageBackground>

      {/* Content container below the gradient */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>ALPFA</Text>
        <Text style={styles.subtitleTitle}>Rutgers - NB</Text>
        <Text style={styles.subtitle}>Association of Latino Professionals for America</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="email-outline" size={24} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Continue with Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
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
    backgroundColor: '#fff',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '50%', // Set to half the screen height
    justifyContent: 'flex-end', // Position gradient at the bottom
  },
  image: {
    resizeMode: 'cover', // Ensures the image covers the top half properly
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%', // Make gradient cover the bottom half of the image
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start', // Align content to the top of the remaining half
    alignItems: 'center',
    paddingTop: 20, // Add some padding to separate the content from the gradient
  },
  title: {
    fontSize: 48,
    color: '#d71920', // ALPFA red color
    fontFamily: 'Poppins_700Bold',
    marginBottom: 5,
  },
  subtitleTitle: {
    fontSize: 28, // Adjust this size so Rutgers - NB looks good
    color: '#d71920', // ALPFA red color for consistency
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Poppins_700Bold',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d71920', // ALPFA red color
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 15,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    marginBottom: 20,
  },
  signInLink: {
    color: '#007bff', // Blue color for the link
    fontWeight: 'bold',
  },
});
