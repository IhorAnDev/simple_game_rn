import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {ImageBackground, SafeAreaView} from 'react-native';
import Colors from "../constants/colors";

const BackgroundWrapper = ({children}) => {
    return (
        <LinearGradient
            colors={[Colors.primary700, Colors.accent500]}
            style={{flex: 1}}
        >
            <ImageBackground
                source={require('../assets/img/dices.jpg')}
                resizeMode="cover"
                style={{flex: 1}}
                imageStyle={{opacity: 0.5}}
            >
                <SafeAreaView style={{flex: 1}}>
                    {children}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
};

export default BackgroundWrapper;
