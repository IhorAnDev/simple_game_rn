import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import StartGameScreen from "../../screens/StartGameScreen";
import GameScreen from "../../screens/GameScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="StartGame"
                component={StartGameScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Game"
                component={GameScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
