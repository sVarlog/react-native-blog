import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import { bootstrap } from './src/bootstrap';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { DrawerNavigation } from './src/navigation/DrawerNavigation';
import { store } from './src/store';

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
		<Provider store={store}>
			<NavigationContainer>
				<DrawerNavigation />
			</NavigationContainer>
		</Provider>
	);
};