import React from 'react'
import { 
    View, 
    Text,
    Pressable, 
    StyleSheet
}                       from 'react-native'
import colors from '../../utils/colors'
const PrimaryButton = (props) => {
    // const pressHandler = () => {
    //     console.log('Pressed');
    // }

    return (
        <View style={ styles.buttonOuterContainer }>
            <Pressable 
                style           = { ({ pressed }) => 
                    pressed 
                        ?   [ styles.buttonInnerContainer, styles.pressed] 
                        :   styles.buttonInnerContainer 
                }
                onPress         = { props.onPress } 
                android_ripple  = {{ color: 'white' }}
            >
                <Text style={ styles.buttonText }>
                    { props.children }
                </Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: colors.darkBlue,
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: colors.iceBlue,
        textAlign: 'center',
    },
    pressed: {
        opacity: .75,
    }
})


export default PrimaryButton;