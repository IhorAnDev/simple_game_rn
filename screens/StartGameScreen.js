import {Alert, TextInput, View} from "react-native";
import {useDispatch} from 'react-redux';
import {useState} from "react";
import PrimaryButton from "../components/PrimaryButton";
import styles from "./styles/screens_styles";
import BackgroundWrapper from "../components/BackgroundWrapper";
import {useNavigation} from "@react-navigation/native";
import {setChosenNumber} from "../features/number/numberSlice";

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
        console.log(enteredValue);
        dispatch(setChosenNumber(chosenNumber));
        navigation.navigate('Game');
    }


    const resetInputHandler = () => {
        setEnteredValue('');
    }

    return (
        <BackgroundWrapper>
            <View style={styles.inputContainer}>
                <TextInput style={styles.numberInput}
                           maxLength={2}
                           keyboardType="number-pad"
                           autoCapitalize="none"
                           autoCorrect={false}
                           onChangeText={valueChangeHandler}
                           value={enteredValue}
                />
                <View style={styles.wrapperButtonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </BackgroundWrapper>
    );
}


export default StartGameScreen;
