import AppNavigator from "./components/routes/AppNavigator";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {NumberProvider} from "./contexts/numberContext";

export default function App() {
    return (
        <NumberProvider>
            <StatusBar barStyle="dark-content"/>
            <NavigationContainer>
                <AppNavigator/>
            </NavigationContainer>
        </NumberProvider>
    );
}


