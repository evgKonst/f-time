import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Weather() {
  const [temperature, setTemperature] = useState("");
  const [image, setImage] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://api.weatherstack.com/current?access_key=process.env.WHEATHER_API_KEY&query=Saint_Petersbug"
      );
      const result = await response.json();
      setTemperature(result.current.temperature);
      setImage(result.current.weather_icons[0]);
      setCity(result.location.name);
    })();
  }, []);

  return (
    <View>
      <Text>{city}</Text>
      <Text>t: {temperature}c</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `${image}`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
