import {View, Text} from "react-native";
import {StyleSheet} from 'react-native';
import React from "react";
import {useNumber} from "../contexts/numberContext";
import {useSelector} from "react-redux";
import BackgroundWrapper from "../components/BackgroundWrapper";

const GameScreen = () => {

    const {chosenNumber} = useSelector((state) => state.number);

    return (
        <BackgroundWrapper>
            <View style={styles.gameScreen}>
                <Text style={styles.gameScreenText}>{chosenNumber}</Text>
            </View>
        </BackgroundWrapper>
    );
}

const styles = StyleSheet.create({
    gameScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameScreenText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ddb52f',
    }
});
export default GameScreen;
