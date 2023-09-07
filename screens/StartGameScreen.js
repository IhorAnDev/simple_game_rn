import {Alert, TextInput, View, StyleSheet, Text} from "react-native";
import {useDispatch} from 'react-redux';
import {useState} from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import styles from "./styles/screens_styles";
import BackgroundWrapper from "../components/BackgroundWrapper";
import {useNavigation} from "@react-navigation/native";
import {setChosenNumber} from "../features/number/numberSlice";
import Title from "../components/ui/Title";
import Card from "../components/ui/Сard";
import InstructionText from "../components/ui/InstructionText";
import ButtonContainer from "../components/ui/ButtonContainer";

const StartGameScreen = (props) => {

    const navigation = useNavigation();
    const [enteredValue, setEnteredValue] = useState('');

    const dispatch = useDispatch();
    const valueChangeHandler = (value) => {
        setEnteredValue(value);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (chosenNumber <= 0 || chosenNumber > 99 || isNaN(chosenNumber)) {
            Alert.alert('Invalid number',
                'Please enter a valid number between 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        dispatch(setChosenNumber(chosenNumber));
        navigation.navigate('GameScreen');
    }


    const resetInputHandler = () => {
        setEnteredValue('');
    }

    return (
        <BackgroundWrapper>
            <View style={styles.gameContainer}>
                <Title style={styles.titleText}>Guess My Number</Title>
                <Card>
                    <InstructionText>Enter a number</InstructionText>
                    <TextInput style={styles.numberInput}
                               maxLength={2}
                               keyboardType="number-pad"
                               autoCapitalize="none"
                               autoCorrect={false}
                               onChangeText={valueChangeHandler}
                               value={enteredValue}
                    />
                    <View style={styles.wrapperButtonsContainer}>
                        <ButtonContainer>
                            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                        </ButtonContainer>
                        <ButtonContainer>
                            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                        </ButtonContainer>
                    </View>
                </Card>
            </View>
        </BackgroundWrapper>
    )
        ;
}


export default StartGameScreen;
