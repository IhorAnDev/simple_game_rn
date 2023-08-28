import {StyleSheet} from 'react-native';
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        marginHorizontal: 24,
        elevation: 6,
        shadowColor: '#72063c',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 3,
        alignItems: 'center',
    },
    wrapperButtonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 0.36
    },
    pressed: {
        opacity: 0.75,
    },
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.5
    }
});

export default styles;
