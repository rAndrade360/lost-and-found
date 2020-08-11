import React from 'react';
import { StatusBar } from 'react-native';
import Colors from './src/constants/Colors';
import Routes from './src/routes';
const App = () => (
  <>
    <StatusBar barStyle="light-content" translucent backgroundColor={Colors.primaryColor} />
    <Routes />
  </>
);
export default App;
