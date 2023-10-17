import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const goToViewer = () => {
    navigation.navigate('Viewer');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our App</Text>
      <Text style={styles.description}>This is our  home screen.</Text>
      <Button title="Go to Viewer" onPress={goToViewer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});
