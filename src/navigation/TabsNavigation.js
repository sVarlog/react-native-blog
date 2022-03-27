import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BookedStackNavigator, MainStackNavigator } from "./StackNavigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
    headerShown: false
};

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={screenOptionStyle} >
            <Tab.Screen 
                name="HomeTab" 
                component={MainStackNavigator} 
                options={{title: 'Home', 
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                )}}
            />
            <Tab.Screen 
                name="Booked" 
                component={BookedStackNavigator} 
                options={{title: 'Favorite',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="star" color={color} size={size} />
                )}}
            />
        </Tab.Navigator>
    );
};