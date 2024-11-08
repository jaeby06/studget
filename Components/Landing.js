
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import style from './styles'


const Landing = ({onSwitch, onRegister}) => (
  <View style={styles.container}>
    <View style={style.h1}>
    <Text variant="displayLarge" style={style.loginText}>STUD</Text>
    <Text variant="displayLarge" style={style.logText}>GET</Text>
    </View>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.recoveryText}>Best way to save your money.</Text>
    </View>
    <View style={styles.h1}>
      <Text variant="headlineMedium" style={styles.recoveryText}>Let's get started...</Text>
    </View>
    <Button mode="contained" style={styles.button} onPress={onSwitch}>
      Login
    </Button>
    <Button mode="contained" style={styles.button} onPress={onRegister}>
      Signup
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'#BA75D2'
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -40
  },
  recoveryText: {
    fontSize: 12,
    color: '#fff' 
  },
  h1: {
    marginBottom: -9,
    marginRight: 60
  },
  input: {
    marginBottom: 10,
    width: 300, 
    alignSelf: 'center',
  },
  button: {
    marginBottom: 10,
    width: 150, 
    alignSelf: 'center', 
  },
});

export default Landing;
