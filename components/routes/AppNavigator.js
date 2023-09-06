import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import StartGameScreen from "../../screens/StartGameScreen";
import GameScreen from "../../screens/GameScreen";
import GameOverScreen from "../../screens/GameOverScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="StartGameScreen"
                component={StartGameScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="GameScreen"
                component={GameScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="GameOverScreen"
                component={GameOverScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
