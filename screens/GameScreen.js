import {View, Alert} from "react-native";
import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import {useNavigation, useRoute} from "@react-navigation/native";
import Card from "../components/ui/Сard";
import InstructionText from "../components/ui/InstructionText";
import ButtonContainerWrapper from "../components/ui/ButtonContainerWrapper";
import ButtonContainer from "../components/ui/ButtonContainer";
import {Ionicons} from '@expo/vector-icons';


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


    useEffect(() => {
        if (currentGuess === chosenNumber) {
            // Alert.alert('You won!',
            //     'Restart the game to try again',
            //     [{text: 'Okay', style: 'destructive', onPress: () => navigation.navigate('StartGame')}])
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
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber)
    }

    return (
        <BackgroundWrapper>
            <View style={styles.gameScreen}>
                <Title style={styles.titleText}>Opponent's guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card>
                    <InstructionText style={styles.guideText}> Higher or lower?</InstructionText>
                    <ButtonContainerWrapper>
                        <ButtonContainer>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name="md-remove" size={24} color={Colors.white}/>
                            </PrimaryButton>
                        </ButtonContainer>
                        <ButtonContainer>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name="md-add" size={24} color={Colors.white}/>
                            </PrimaryButton>
                        </ButtonContainer>
                    </ButtonContainerWrapper>
                </Card>
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
        fontFamily: 'open-sans-bold',
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
    },
    guideText: {
        marginBottom: 22,
    },
});
export default GameScreen;
