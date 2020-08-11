import React from 'react';
import { View } from 'react-native';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import Colors from './constants/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={HomeScreen} options={headerOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const headerOptions = {
    headerTitle: 'Dashboard',
    headerStyle: { backgroundColor: Colors.primaryColor },
    headerTitleAlign: 'center',
    headerTintColor: '#FFF'
}

export default Routes;