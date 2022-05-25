import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Linking } from 'react-native-web';

export default function App() {
  const [name, setName] = useState('Rick');
  const [session, setSession] = useState({number: 0, title: 'state'});
  const [current, setCurrent] = useState(true);
  const [count, setCount] = useState({count: 0, clicked: 0});

  const changeName = () => {
    if (name === 'Rick') {
      setName('Morty');
    } else{
      setName('Rick');
    }
  }

  const incrementCounter = () => {
    setCount({count: count.count + 5, clicked: count.clicked + 1});
  }

  const resetCounter = () => {
    setCount({count: 0, clicked: 0});
  }

  const incrementSession = () => {
    setSession({number: session.number + 1, title: 'session'});
    setCurrent(false);
  }
  

  return (
    <View style={styles.body}>
      <Text style={styles.text}>My name is {name}</Text>  
      <Text style={styles.text}>The session number is {session.number}</Text>  
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>  
      <Button title='Change name' onPress={changeName}> </Button>
      <Button title='Increment session' onPress={incrementSession}> </Button>
      <Text style={styles.text}>Total Count: {count.count}</Text>
      <Text style={styles.text}>Total Clicks: {count.clicked}</Text>
      <Button title='Increment Counter' onPress={incrementCounter}> </Button>
      <Button title='Reset Counter' onPress={resetCounter}> </Button>



    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'montserrat',
    color: 'white',
    margin: 10,
  }
});
