export const fetchWeatherData = async (city) => {
 try {
   const apiKey = "8c8b2ce03ef974a2f3ef27b6c24aaddf";
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
   const data = await response.json();
   return data;
 } catch (error) {
   throw error;
 }
};