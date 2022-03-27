import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import { bootstrap } from './src/bootstrap';

import { NavigationContainer } from '@react-navigation/native';

import { BottomTabNavigator } from './src/navigation/TabsNavigation';
import { DrawerNavigation } from './src/navigation/DrawerNavigation';

export default function App() {
	const [isReady, setIsReady] = useState(false);

	if (!isReady) {
		return <AppLoading 
			startAsync={bootstrap}
			onFinish={() => setIsReady(true)}
			onError={() => console.log(error)}
		/>
	}

	return (
		<NavigationContainer>
			<DrawerNavigation />
		</NavigationContainer>
	)

	// return <AppNavigation />
};