import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from '../twrnc.config';
import React from 'react';

export default function App() {
  return (
    <View style={tw`p-4 android:pt-2 bg-[#FF0000]`}>
      <Text style={tw `text-[15px] text-[#aaa] items-center text-bold font-[Poppins]`}>Hello World</Text>
    </View>
  );
}