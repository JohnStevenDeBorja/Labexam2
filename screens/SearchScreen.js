import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from "react-native";
import { fetchWeatherData } from "../api/weather";

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
 input: {
   marginBottom: 10,
   paddingHorizontal: 10,
   width: 200,
   height: 40,
   borderColor: "black",
   borderWidth: 1,
   backgroundColor: "gray",
   color: "white",
 },
 weatherText: {
   fontSize: 20,
   fontWeight: "bold",
   color: "white", // Text color for weather information
 },
});

const SearchScreen = ({ navigation }) => {
 const [city, setCity] = useState("");
 const [weatherData, setWeatherData] = useState(null);

 const handleSearch = async () => {
   try {
     const data = await fetchWeatherData(city);
     setWeatherData(data);
   } catch (error) {
     // Handle the error
   }
 };

 return (
   <ImageBackground source={{ uri: backgroundImageUri }} style={styles.backgroundImage}>
     <View style={styles.container}>
       <TextInput
         style={styles.input}
         placeholder="Enter a city"
         onChangeText={(text) => setCity(text)}
         value={city}
       />
       <Button title="Search" onPress={handleSearch} />
       {weatherData && (
         <View>
           <Text style={styles.weatherText}>
             {weatherData.name}, {weatherData.sys.country}: {weatherData.main.temp}°C
           </Text>
         </View>
       )}
     </View>
   </ImageBackground>
 );
};

export default SearchScreen;
