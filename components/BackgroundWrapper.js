import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {ImageBackground} from 'react-native';

const BackgroundWrapper = ({children}) => {
    return (
        <LinearGradient
            colors={['#961254', '#ddb52f']}
            style={{flex: 1}}
        >
            <ImageBackground
                source={require('../assets/img/dices.jpg')}
                resizeMode="cover"
                style={{flex: 1}}
                imageStyle={{opacity: 0.5}}
            >
                {children}
            </ImageBackground>
        </LinearGradient>
    );
};

export default BackgroundWrapper;
