import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import style from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';


const Login = ({ onSwitch, onRegister, onLogin, onClick}) => (
  <View style={styles.container}>
    <View style={styles.iconTextContainer}>
        <TouchableOpacity onPress={onClick}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
      </View >
    <View style={style.h1}>
      <Text variant="displayLarge" style={style.loginText}>STUD</Text>
      <Text variant="displayLarge" style={style.logText}>GET</Text>
    </View>
    <TextInput 
      label="Phone number, username, or email" 
      mode="outlined" 
      style={styles.input} 
    />
    <TextInput 
      label="Password" 
      mode="outlined" 
      secureTextEntry 
      style={styles.input} 
    />
    <Button mode="contained" style={styles.button} onPress={onLogin}>
      Login
    </Button>
    <Button mode="text" onPress={onSwitch}>
      Forgot Password?
    </Button>
    <Button mode="text" onPress={onRegister}>
      Sign Up
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
  iconTextContainer: {
    position: 'absolute', 
    top: 45, 
    left: 16,
    zIndex: 1,
  },
  input: {
    marginBottom: 16,
    width: '90%',
    alignSelf: 'center', 
  },
  button: {
    marginBottom: 16,
    width: 180, 
    alignSelf: 'center', 
  },
});

export default Login;