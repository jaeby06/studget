import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import style from './styles'


const Register = ({ onSwitch }) => (
  <View style={styles.container}>
    <View style={style.h1}>
      <Text variant="displayLarge" style={style.loginText}>STUD</Text>
      <Text variant="displayLarge" style={style.logText}>GET</Text>
    </View>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.registerText}>Create an account</Text>
    </View>
    <TextInput label="Name" mode="outlined" style={styles.input} />
    <TextInput label="Email" mode="outlined" style={styles.input} />
    <TextInput label="Password" mode="outlined" secureTextEntry style={styles.input} />
    <Button mode="contained" style={styles.button} onPress={() => {}}>
      Sign Up
    </Button>
    <Button mode="text" onPress={onSwitch}>
      Already have an account? Login
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
    marginBottom: 20,
  },
  registerText: {
    fontWeight: 'bold', 
    color: '#fff'
  },
  input: {
    marginBottom: 16,
    width: 250, 
    alignSelf: 'center', 
  },
  button: {
    marginBottom: 16,
    width: 120, 
    alignSelf: 'center', 
  },
});

export default Register;