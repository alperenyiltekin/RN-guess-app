import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/ui/primary-button';
import Title from '../components/ui/title';
import colors from '../utils/colors';

const GameOverScreen = props => {
	return (
		<View style={ styles.rootContainer }>
			<Title>GAME OVER!</Title>
			<View style={ styles.imageContainer }>
				<Image 
					style	= { styles.image }
					source	= { require('../../assets/success.png') }
				/>
			</View>
			<Text style={ styles.summaryText }>
				Phone needed <Text style={ styles.highlight }>{ props.roundsNumber }</Text> rounds to guess the number <Text style={ styles.highlight }>{ props.userNumber }</Text>
			</Text>
			<PrimaryButton onPress={ onStartNewGame }>{ 'Start New Game' }</PrimaryButton>
		</View>
	)
}

const styles = StyleSheet.create({
	rootContainer: {
		flex				: 1,
		padding				: 24,
		justifyContent		: 'center',
		alignItems			: 'center',
	},
	imageContainer: {
		width				: 300,
		height				: 300,
		borderRadius		: 150,
		borderWidth			: 3,
		borderColor			: colors.darkerBlue,
		overflow			: 'hidden',
		margin				: 36
	},
	image: {
		width				: '100%',
		height				: '100%'
	},
	summaryText: {
		fontFamily			: 'open-sans',
		fontSize			: 24,
		textAlign			: 'center',
		marginBottom		: 24
	},
	highlight: {
		fontFamily			: 'open-sans-bold',
		color				: colors.mdBlue,
	}
})

export default GameOverScreen;