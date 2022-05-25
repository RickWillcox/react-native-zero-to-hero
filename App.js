import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Linking, YellowBox } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.body1}>
        <View style={styles.view1}>
          <Text>1</Text>
        </View>
        <View style={styles.view2}>
          <Text>2</Text>
        </View>
        <View style={styles.view3}>
          <Text>3</Text>
        </View>
      </View>

      <View style={styles.body2}>
        <View style={styles.view4}>
          <Text>4</Text>
        </View>
        <View style={styles.view5}>
          <Text>5</Text>
        </View>
      </View>

      <View style={styles.body3}>
        <View style={styles.view6}>
          <Text>6</Text>
        </View>
        <View style={styles.view7}>
          <Text>7</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000FF',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body2: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#0000FF',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body3: {
    flex: 7,
    flexDirection: 'row',
    backgroundColor: '#0000FF',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: '#1ff6d0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: '#ef0707',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: '#75f61f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 3,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 3,
    backgroundColor: '#2919e8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'montserrat',
    color: 'white',
    margin: 10,
  },
});
