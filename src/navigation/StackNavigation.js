import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { THEME } from "../theme";

import { MainScreen } from "../screens/MainScreen";
import { BookmarkedScreen } from "../screens/BookmarkedScreen";
import { PostScreen } from "../screens/PostScreen";
import { CreateScreen } from "../screens/CreateScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { AboutScreen } from "../screens/AboutScreen";

const Stack = createStackNavigator();

const options = {
    headerStyle: {backgroundColor: THEME.MAIN_COLOR},
    headerTintColor: '#fff',
}

const getCameraIcon = (navigation) => {
    return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take photo" iconName="camera-sharp" onPress={() => navigation.navigate('CreateDrawer')} />
        </HeaderButtons>
    )
};

const getDrawerIcon = (navigation) => {
    return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
        </HeaderButtons>
    )
}

const blogOptions = ({navigation}) => ({
    headerRight: () => getCameraIcon(navigation),
    headerLeft: () => getDrawerIcon(navigation)
});

const aboutOptions = ({navigation}) => ({
    headerLeft: () => getDrawerIcon(navigation)
});

const postOption = (route) => {

    const booked = route.params.booked;

    const toggleHandler = route.params.toggleHandler;

    const iconName = booked ? 'ios-star' : 'ios-star-outline';

    return {
        headerRight: () => {    
            return (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="Take photo" iconName={iconName} onPress={toggleHandler} />
                </HeaderButtons>
            )
        },
    }
}

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="BlogPage" 
                component={MainScreen} 
                options={(navigation) => ({...options, ...blogOptions(navigation), title: 'My Blog'})}
            />
            <Stack.Screen 
                name="PostPage" 
                component={PostScreen} 
                options={({route}) => ({...options, ...postOption(route), title: `Post at ${new Date(route.params.date).toLocaleDateString()}`})}
            />
        </Stack.Navigator>
    );
};

export const BookedStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={(navigation) => ({...options, ...blogOptions(navigation)})}>
            <Stack.Screen 
                name="BookmarkedPage" 
                component={BookmarkedScreen} 
                options={{...options, title: 'Favorite'}}
            />
            <Stack.Screen 
                name="PostPageBooked" 
                component={PostScreen} 
                options={({route}) => ({...options, ...postOption(route), title: `Post at ${new Date(route.params.date).toLocaleDateString()}`})}
            />
        </Stack.Navigator>
    );
};

export const AboutStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={(navigation) => ({...options, ...aboutOptions(navigation)})}>
            <Stack.Screen 
                name="AboutPage"
                component={AboutScreen}
                options={{...options, title: 'About app'}}
            />
        </Stack.Navigator>
    );
};

export const CreateStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={(navigation) => ({...options, ...aboutOptions(navigation)})}>
            <Stack.Screen 
                name="CreatePage"
                component={CreateScreen}
                options={{...options, title: 'Create post'}}
            />
        </Stack.Navigator>
    );
};