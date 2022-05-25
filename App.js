import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Linking } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello World</Text>  
      <Button title='Zero to Hero' style={styles.text} onPress={()=>{Linking.openURL('https://www.google.com')}}> </Button>
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
