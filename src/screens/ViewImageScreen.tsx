import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.containerButtons}>
                <View style={styles.closeIcon}></View>
                <View style={styles.deleteIcon}></View>
            </View>
            <View style={styles.containerImage}>
                <Image
                    source={{
                        uri: 'https://picsum.photos/200/300',
                    }}
                    style={styles.image}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        marginTop: 20,
    },
    containerImage: {
        flexDirection: 'column',
    },
    image: {
        width: '100%',
        height: '100%',
    },

    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'orange',
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
    },
});

export default ViewImageScreen;
