/*
* File: App.js
* Author: Varas-Tóth Gergő
* Copyright: 2025, Varas-Tóth Gergő
* Group: Szoft II/I/N
* Date: 2025-02-01
* Github: https://github.com/Valaki2004
* Licenc: GNU GPL
*/
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import "@expo/metro-runtime";
export default function App() {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [surface, setSurface] = useState(null);

  const calculateSurface = () => {
    const r = parseFloat(radius);
    const h = parseFloat(height);

    if (isNaN(r) || isNaN(h) || r <= 0 || h <= 0) {
      Alert.alert('Hiba', 'Kérlek, adj meg érvényes pozitív számokat a sugárhoz és a magassághoz!');
      return;
    }

    const surfaceArea = 2 * Math.PI * r * (r + h);
    setSurface(surfaceArea.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Henger felszínének kiszámítása</Text>

      <View style={styles.inputRow}>
  <Text style={styles.label}>Sugár:</Text>
  <TextInput
    style={styles.input}
    keyboardType="numeric"
    value={radius}
    onChangeText={setRadius}
  />
</View>

<View style={styles.inputRow}>
  <Text style={styles.label}>Magasság:</Text>
  <TextInput
    style={styles.input}
    keyboardType="numeric"
    value={height}
    onChangeText={setHeight}
  />
</View>
      <Button title="Számítás" onPress={calculateSurface} />

      {surface && (
        <Text style={styles.result}>
          A hengernek a felszíne: {surface}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "bisque",
  },
  title: {
    fontSize: 24,
  },
  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
  inputRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  input: {
    backgroundColor:"red",
    width: 100,  
    height: 40,
    marginLeft: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  }
});