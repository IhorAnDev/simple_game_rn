import {View, Text, Pressable} from "react-native";
import React from "react";
import styles from "../screens/styles/screens_styles";

const PrimaryButton = ({children, onPress}) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => pressed ?
                [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                       onPress={onPress}
                       android_ripple={{color: "#9f0654"}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    );
}

export default PrimaryButton;
