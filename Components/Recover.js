
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import style from './styles'


const Recovery = ({ onSwitch }) => (
  <View style={styles.container}>
    <View style={style.h1}>
    <Text variant="displayLarge" style={style.loginText}>STUD</Text>
    <Text variant="displayLarge" style={style.logText}>GET</Text>
    </View>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.recoveryText}>Can't access your account?      </Text>
    </View>
    <TextInput label="Username, or email" mode="outlined" style={styles.input} />
    <Button mode="contained" style={styles.button} onPress={() => {}}>
      Send Login Recovery Link
    </Button>
    <Button mode="text" onPress={onSwitch}>
      Back to Login
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
  recoveryText: {
    fontWeight: 'bold',
    color: '#fff' 
  },
  input: {
    marginBottom: 16,
    width: 300, 
    alignSelf: 'center',
  },
  button: {
    marginBottom: 16,
    width: 250, 
    alignSelf: 'center', 
  },
});

export default Recovery;
