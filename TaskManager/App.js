import React, { Component, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, SectionList, ScrollView, Button, Image, TextInput } from 'react-native';


const App = () => {
  const [text, setText] = useState('');

  const DATA = [
    {
      data: ['Mobile App Development', 
      'Web Development', 'Push Ups', 'Software Engineering',
    'Algebra', 'Biking', 'Baking', 'Hiking', 'Swimming',
  'Reading', 'Coding', 'Walking', 'Surfing', 'Skating', 'Playing Game'],
    }
  ]

  return(
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
        <Text style={styles.text}>Hello, Devs</Text>
        <Text style={styles.taskText}>
          14 tasks today</Text>
        </View>
        <Image style={styles.image} source={require('./mockup files/Profile Image.png')}/>
      </View>

      <View style={styles.view1}>
        <View style={styles.subHeader}>
          <Image style={styles.inputImage} source={require('./mockup files/Vector (1).png')}/>
          <TextInput 
            style={styles.input}
            onChangeText={setText}
            placeholder='Search'
            keyboardType='default'
            value={text}
          /> 
        </View>
        <Image style={styles.sView} source={require('./mockup files/Group 2.png')}/>
      </View>

      <View>
        <Text>Categories</Text>
      </View>

      <View>
        <ScrollView>
          <Image source={require('./mockup files/young woman working online.png')}/>
          <Image source={require('./mockup files/young woman working at desk.png')}/>
        </ScrollView>
      </View>
      <View>
        <Text>Ongoing Task</Text>
      </View>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F0E8',
    
  },

  sView: {
   marginLeft: 50,
   width: 50,
   height: 48,
  },

  view1: {
    flexDirection: 'row',
    marginTop: 0,
  },

  item: {
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    marginVertical: 8,
    width: 354,
    height: 128,
  },

  header: {
    flex: 1,
    width: 354,
    height: 52,
    top: 52,
    left: 20,
    gap: 134,
    flexDirection: 'row',
  },

  subHeader: {
    width: 290,
    height: 49,
    border: 1,
    flexDirection: 'row',
    backgroundColor: '#FBF9F7',
  },

  text: {
    fontFamily: 'Lato',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.4,
    textAlign: 'left',
  },

  taskText:{
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.4,
    textAlign: 'left',

  },

  image: {
    marginLeft: 50,
    width: 50,
    height: 50,
  },

  inputImage: {
    width:15,
    height: 15,
    left: 3.97,
    top: 3,
    border: 1.5,
  },
  
  input: {
    marginLeft: 10,
    border: 14,
    width: 48,
    height: 19,
    Left: 20,
  }
  
});

export default App;