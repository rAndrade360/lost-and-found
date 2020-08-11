import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeLost from '../HomeLost';
import HomeFound from '../HomeFound';
import Colors from '../../constants/Colors';
const Tab = createMaterialTopTabNavigator();
const Home = () => {
    return (
        <Tab.Navigator initialRouteName='HomeLost' tabBarOptions={tabBarOption} >
            <Tab.Screen name='HomeLost' component={HomeLost} options={{ tabBarLabel: "Lost" }} />
            <Tab.Screen name='HomeFound' component={HomeFound} options={{ tabBarLabel: "Found" }} />
        </Tab.Navigator>
    )
}

const tabBarOption = {
    activeTintColor: Colors.primaryColor,
    indicatorStyle: { backgroundColor: Colors.primaryColor },
    labelStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
}


export default Home;