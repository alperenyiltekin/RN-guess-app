import { 
    useEffect, 
    useState 
}                           from 'react'
import { 
    View,
    StyleSheet, 
    Alert,
    FlatList
}                           from 'react-native'
import { Ionicons }         from '@expo/vector-icons'
import NumberContainer      from '../components/game/number-container'
import Card                 from '../components/ui/card'
import InstructionText      from '../components/ui/instruction-text'
import PrimaryButton        from '../components/ui/primary-button'
import Title                from '../components/ui/title'
import GuessLogItem         from '../components/game/guess-log-item'

const GameScreen = props => {
    let minBoundary = 1;
    let maxBoundary = 100;

    useEffect(() => {
        if (currentGuess === props.userNumber) {
            props.onGameOver(guessRounds.length);
        }
    }, [ currentGuess, props.userNumber, props.onGameOver ])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    const generateRandomNumber = (min, max, exclude) => {
        const rnd = Math.floor(Math.random() * (max - min)) + min;

        if (rnd === exclude) {
            return generateRandomNumber(min, max, exclude);
        } else return rnd;
    }

    const initialGuess = generateRandomNumber(1, 100, props.userNumber)
    const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
    const [ guessRounds, setGuessRounds ] = useState([ initialGuess ]);

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < props.userNumber) ||
            (direction === 'greater' && currentGuess < props.userNumber)
        ) {
            Alert.alert("You know that this is wrong", [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newNumber = generateRandomNumber(minBoundary, maxBoundary,currentGuess);
        setCurrentGuess(newNumber);
        setGuessRounds(prevState => [ ...prevState, newNumber ])
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={ styles.screen }>
            <Title>
                Opponent's Guess
            </Title>
            <NumberContainer>
                { currentGuess }
            </NumberContainer>
            <Card>
                <View>
                    <InstructionText style={ styles.instructionText }>Higher or Lower?</InstructionText>
                    <View style={ styles.buttonsContainer }>
                        <View style={ styles.buttonContainer }>
                            <PrimaryButton onPress={ () => nextGuessHandler('lower') }>
                                <Ionicons 
                                    name    = "md-remove" 
                                    size    = { 24 }
                                    color   = "white"
                                />
                            </PrimaryButton>
                        </View> 
                        <View style={ styles.buttonContainer }>
                            <PrimaryButton onPress={ () => nextGuessHandler('greater') }>
                                <Ionicons 
                                    name    = "md-add" 
                                    size    = { 24 }
                                    color   = "white"
                                />
                            </PrimaryButton>
                        </View>
                    </View>
                </View>
            </Card>
            <View style={ styles.listContainer }>
                <FlatList 
                    data        = { guessRounds }
                    renderItem  = { (itemData) => (
                        <GuessLogItem 
                            roundNumber = { guessRoundsListLength - itemData.index }
                            guess       = { itemData.item }
                        />
                        
                    )}
                    keyExtractor= { (item) => item }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex                    : 1,
        padding                 : 24,
    },
    instructionText: {
        marginBottom            : 12
    },
    buttonsContainer: {
        flexDirection           : 'row'
    },
    buttonContainer: {
        flex                    : 1
    },
    listContainer: {
        flex                    : 1,
        padding                 : 16
    }
})

export default GameScreen;