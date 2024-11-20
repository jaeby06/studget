import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Transactions = ({onSwitch}) => {
  return (
    <View style={styles.container}>
     <View style={styles.container2}>
      <View style={styles.iconTextContainer}>
        <TouchableOpacity style={styles.button} onPress={onSwitch} >
          <Feather name="arrow-left" size={30} color="#fff"/>
        </TouchableOpacity>
      </View >
      <Text style={styles.bal} >Account Balance</Text>
      <Text style={{marginBottom: 20, fontSize: 34 ,color: '#fff'}} >₱ 1,000,000</Text>
      <View style={styles.info}>
      <TouchableOpacity>
          <Feather name="arrow-up-left" size={40} color="#fff" borderRadius={50} justifyContent="center"/>
        </TouchableOpacity>
        <View style={styles.Income}>
          <Text style={styles.in}>Income</Text>
          <Text style={styles.word}>₱ 123,456</Text>
        </View>
        <TouchableOpacity>
          <Feather name="arrow-down-right" size={40} color="#fff" borderRadius={50} justifyContent="center"/>
        </TouchableOpacity>
        <View style={styles.Expenses}>
          <Text style={styles.in}>Expenses</Text>
          <Text style={styles.word}>₱ 67,890</Text>
        </View>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  container2: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#68409C',
    borderRadius: 25,
    width: '100%',
    height: '40%',
  },
  container3: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '30%',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  text: {
    justifyContent: 'center', 
    alignItems: 'center',
    fontSize: 24,
    color: '#fff',
    marginLeft: "15%" ,
    marginRight: "35%"
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#fff'
  },
  Income: {
    flexDirection: 'column',
    alignItems: 'center', 
    marginRight: 60,
    marginLeft: 10
  },
  Expenses: {
    flexDirection: 'column',
    alignItems: 'center', 
    marginLeft: 10
  },
  bal:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  num:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  in:{
    fontSize: 16,
    color: '#fff'
  },
  word:{
    fontSize: 16,
    color: '#fff'
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default Transactions;