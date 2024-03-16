import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
  return (
    <>
      <StatusBar translucent />
      <MainNavigation />
    </>
  );
}
