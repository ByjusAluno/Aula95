import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Inicial from "./screens/Inicial";


export default function App() {
  return (
    <View>
      <Inicial/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
