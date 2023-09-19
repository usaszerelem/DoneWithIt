import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View, Text, useWindowDimensions } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';

export default function App() {
    return <ViewImageScreen />;
}
