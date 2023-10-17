import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ViewerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viewer Screen</Text>
      <Text style={styles.description}>This is the Viewer screen.</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

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

export default ViewerScreen;
