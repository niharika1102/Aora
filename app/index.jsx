import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import { Link } from 'expo-router';
import tw from 'twrnc'

export default function App() {
  return (
    <View style={tw `flex-1 items-center justify-center bg-white`}>
      <Text style={tw `text-3xl`}>Aora</Text>
      <StatusBar style="auto"/>
      <Link href="/profile" style={{color: 'red'}}>Go to profile</Link>
    </View>
  )
}