import AppNavigator from "./components/routes/AppNavigator";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {NumberProvider} from "./contexts/numberContext";
import {Provider} from "react-redux";
import store from "./store/store";
import React, {useCallback, useEffect, useState} from "react";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function App() {

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    // Use useEffect to handle splash screen and font loading
    useEffect(() => {
        async function loadAppResources() {
           await SplashScreen.preventAutoHideAsync(); // Prevent automatic hiding of the splash screen

            if (!fontsLoaded) {
                // If fonts are not yet loaded, wait for them to load
                await Promise.all([
                    // Load other async resources here if needed
                ]);
            }

            await SplashScreen.hideAsync(); // Hide the splash screen when loading is complete
        }

        loadAppResources();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        // Render a loading screen here if fonts are not loaded
        return null; // You can customize this loading screen if needed
    }

    return (
        <Provider store={store}>
            <NumberProvider>
                <StatusBar barStyle="dark-content"/>
                <NavigationContainer>
                    <AppNavigator/>
                </NavigationContainer>
            </NumberProvider>
        </Provider>
    );
}


