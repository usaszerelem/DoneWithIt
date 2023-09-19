import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={{
                uri: 'https://picsum.photos/200/300',
            }}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/favicon.png')} style={styles.logoImage} />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    logoImage: {
        width: 100,
        height: 100,
    },
});

export default WelcomeScreen;
