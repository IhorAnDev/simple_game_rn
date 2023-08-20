import AppNavigator from "./components/routes/AppNavigator";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {NumberProvider} from "./contexts/numberContext";
import {Provider} from "react-redux";
import store from "./store/store";
import React from "react";

export default function App() {
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


