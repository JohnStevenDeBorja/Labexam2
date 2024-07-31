import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";

const backgroundImageUri = "https://manybackgrounds.com/images/hd/bad-weather-portrait-kfzhecgp2q8w2xmz.jpg"; // Replace with your actual image URI

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
 },
 backgroundImage: {
   flex: 1,
   width: "100%",
   height: "100%",
   resizeMode: "cover", // or 'contain' as per your requirement
 },
 heading: {
   fontSize: 24,
   fontWeight: "bold",
   marginBottom: 16,
   color: "white",
   padding: 10, // Optional: Adds padding to the text
 },
});

const HomeScreen = ({ navigation }) => {
 return (
   <ImageBackground source={{ uri: backgroundImageUri }} style={styles.backgroundImage}>
     <View style={styles.container}>
       <Text style={styles.heading}>Welcome to Weather App</Text>
       <Button
         title="Search City"
         onPress={() => navigation.navigate("Search")}
       />
     </View>
   </ImageBackground>
 );
};

export default HomeScreen;
