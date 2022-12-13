import { useState }    			    from 'react';
import { LinearGradient } 			from 'expo-linear-gradient';
import { 
	SafeAreaView,
	StyleSheet
}                       			from 'react-native';
import AppLoading 					from 'expo-app-loading';
import { useFonts } 				from 'expo-font';
import colors 						from './src/utils/colors';
import StartGameScreen 				from './src/screens/start-game-screen';
import GameScreen 					from './src/screens/game-screen';
import GameOverScreen 				from './src/screens/game-over-screen';

export default function App() {
	const [ fontsLoaded ] = useFonts({
		'open-sans'		: require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});

	const [ userNumber, setUserNumber ] = useState();
	const [ gameIsOver, setGameIsOver ] = useState(false);
	const [ guessRounds, setGuessRounds ] = useState(0);

	if (!fontsLoaded) {
		return <AppLoading />
	}

	const userNumberHandler = number => {
		setUserNumber(number);
		setGameIsOver(false);
	}
	const gameOverHandler = (numberOfRounds) => {
		setGameIsOver(true);
		setGuessRounds(numberOfRounds)
	}

	const startNewGameHandler = () => {
		setUserNumber(null);
		setGuessRounds(0);
	}

	let screen = <StartGameScreen onPickNumber={ userNumberHandler } />;

	if (userNumber) {
		screen = <GameScreen userNumber={ userNumber } onGameOver={ gameOverHandler } />
	}

	if (gameIsOver && userNumber) {
		screen = <GameOverScreen 
					userNumber		= { userNumber } 
					roundsNumber 	= { guessRounds }
					onStartNewGame	= { startNewGameHandler }
				/>
	}


	return (
		<LinearGradient 
			colors	= {[ colors.iceBlue, colors.darkerBlue ]} 
			style	= { styles.root }
		>
			<SafeAreaView style={ styles.root }>
				{ screen }
			</SafeAreaView>
		</LinearGradient>
	);r
}

const styles = StyleSheet.create({
	root: {
		flex				: 1,
		//backgroundColor		: colors.iceBlue
	}
});
