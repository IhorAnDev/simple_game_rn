import {View, Text, Alert} from "react-native";
import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from "react";
import {useNumber} from "../contexts/numberContext";
import {useSelector} from "react-redux";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import {useNavigation, useRoute} from "@react-navigation/native";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min + 1) + min);
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = () => {

    const {chosenNumber} = useSelector((state) => state.number);
    const initialGuess = generateRandomBetween(1, 100, chosenNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const navigation = useNavigation();

    const route = useRoute();
    const {resetInputHandler} = route.params;

    useEffect(() => {
        if (currentGuess === chosenNumber) {
            // Alert.alert('You won!',
            //     'Restart the game to try again',
            //     [{text: 'Okay', style: 'destructive', onPress: () => navigation.navigate('StartGame')}])
            resetInputHandler();
            navigation.navigate('GameOverScreen');
        }
    }, [currentGuess, chosenNumber]);

    function nextGuessHandler(direction) {
        if (
            // true &&  45 < 55
            (direction === 'lower' && currentGuess < chosenNumber) ||
            // true &&  65 > 55
            (direction === 'greater' && currentGuess > chosenNumber)
        ) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [
                {text: 'Sorry!', style: 'cancel'},
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        console.log(maxBoundary, minBoundary);
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber)
    }

    return (
        <BackgroundWrapper>
            <View style={styles.gameScreen}>
                <Title style={styles.titleText}>Opponent's guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View>
                    <Text>Higher or lower</Text>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                </View>
                {/*<View>LOG ROUNDS</View>*/}
            </View>
        </BackgroundWrapper>
    );
}

const styles = StyleSheet.create({
    gameScreen: {
        flex: 1,
        padding: 24,

    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.white,
        borderWidth: 2,
        borderColor: Colors.white,
        padding: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
    }
});
export default GameScreen;
