import { 
    StyleSheet, 
    Text 
}                   from 'react-native'
import colors       from '../../utils/colors';

const InstructionText = props => {
	return (
		<Text style={[ styles.instructionText, props.style ]}>
			{ props.children }
		</Text>
	)
}

const styles = StyleSheet.create({
	instructionText: {
		fontFamily				: 'open-sans',
		color                   : colors.darkBlue,
		fontSize                : 24
	}
})

export default InstructionText;