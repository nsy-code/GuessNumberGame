import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import CustomButton from '../components/CustomButton'

const GameOverPage = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/game_over.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <BodyText style={styles.textResult}>The AI needed
                <Text style={styles.highlight}> {props.roundsNumber} </Text>
                rounds to guess the number
                <Text style={styles.highlight}> {props.userNumber} </Text>
            </BodyText>
            <CustomButton onPress={props.onRestart}>New Game</CustomButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: '80%',
        height: 200,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
    },
    textResult:{
        textAlign: 'center',
        fontSize:20,
    },
    highlight:{
        color: 'red',
        fontFamily: 'open-sans-bold',
    },
});

export default GameOverPage;
