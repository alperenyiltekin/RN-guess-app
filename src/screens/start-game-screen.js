import { useState }         from 'react'
import { 
    StyleSheet, 
    TextInput, 
    View,
    Text, 
    Alert 
}                           from 'react-native'
import Card from '../components/ui/card';
import InstructionText from '../components/ui/instruction-text';
import PrimaryButton        from '../components/ui/primary-button'
import Title                from '../components/ui/title';
import colors               from '../utils/colors';

export default function StartGameScreen(props) {
    const [ enteredNumber, setEnteredNumber ] = useState('');

    const textInputHandler = (text) => {
        setEnteredNumber(text)
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number !', 
                'Number has a number between 1-99',
                [{ text: 'I got it', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        props.onPickNumber(chosenNumber);
    }

    return (
        <View style={ styles.rootContainer }>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>
                    Enter a number
                </InstructionText>
                <TextInput 
                    style           = { styles.textInput }
                    value           = { enteredNumber } 
                    onChangeText    = { textInputHandler }
                    maxLength       = { 2 }
                    keyboardType    = 'number-pad'
                    autoCapitalize  = 'none'
                    autoCorrect     = { false }
                />
                <View style={ styles.buttonsContainer }>
                    <View style= { styles.buttonContainer }>
                        <PrimaryButton onPress={ resetInputHandler }>
                            { 'reset' }
                        </PrimaryButton>
                    </View>
                    <View style={ styles.buttonContainer }>
                        <PrimaryButton onPress={ confirmInputHandler }>
                            <Text>
                                { 'confirm' }
                            </Text>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex                    : 1,
        marginTop               : 100,
        alignItems              : 'center'
    },
    textInput: {
        height                  : 50,
        width                   : 50,
        fontSize                : 32,
        fontWeight              : 'bold',
        color                   : colors.darkerBlue,
        borderBottomColor       : colors.darkerBlue,
        borderBottomWidth       : 2,
        marginVertical          : 8,
        textAlign               : 'center',
    }
}) 