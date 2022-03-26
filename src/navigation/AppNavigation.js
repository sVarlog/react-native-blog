import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { BookmarkedScreen } from '../screens/BookmarkedScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { THEME } from '../theme';

const Stack = createNativeStackNavigator();

const options = {
    headerStyle: {backgroundColor: THEME.MAIN_COLOR},
    headerTintColor: '#fff',
}

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Blog">
                <Stack.Screen 
                    name="Blog" 
                    component={MainScreen} 
                    options={{...options, title: 'My Blog'}}
                />
                <Stack.Screen 
                    name="Post" 
                    component={PostScreen} 
                    options={({route}) => ({...options, title: `Post at ${new Date(route.params.date).toLocaleDateString()}`})}
                />
                <Stack.Screen 
                    name="Bookmarked" 
                    component={BookmarkedScreen} 
                    options={{...options, title: 'Bookmarked'}}
                />
                <Stack.Screen 
                    name="Create" 
                    component={CreateScreen} 
                    options={{...options, title: 'Create post'}}
                />
                <Stack.Screen 
                    name="About" 
                    component={AboutScreen} 
                    options={{...options, title: 'About'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}