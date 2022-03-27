import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomTabNavigator } from './TabsNavigation';
import { AboutStackNavigator, CreateStackNavigator } from './StackNavigation';
import { THEME } from '../theme';

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
    headerShown: false,
};

const options = {
    drawerActiveTintColor: THEME.MAIN_COLOR,
    drawerLabelStyle: {
        fontFamily: 'open-bold',
        fontSize: 20
    }
}

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={screenOptionStyle}>
            <Drawer.Screen 
                name="HomeDrawer" 
                component={BottomTabNavigator} 
                options={{title: 'Home', ...options}}
            />
            <Drawer.Screen 
                name="CreateDrawer" 
                component={CreateStackNavigator} 
                options={{title: 'Create post', ...options}}
            />
            <Drawer.Screen 
                name="AboutDrawer" 
                component={AboutStackNavigator} 
                options={{title: 'About app', ...options}}
            />
        </Drawer.Navigator>
    )
}