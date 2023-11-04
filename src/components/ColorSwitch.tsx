import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';

const ColorSwitch = ({currentTheme, setCurrentTheme}) => {
    const { colors } = useTheme();

    const changeColor = () => {
        // Rounded button with a color in useTheme
        // When pressed, change the color of the button
        // to secondary color in useTheme
        // When pressed again, change the color of the button
        console.log(currentTheme)

        switch (currentTheme) {
            case 'white':
                setCurrentTheme('black')
                break;
            case 'black':
                setCurrentTheme('white')
                break;
            
            default:
                break;
        }
    }
  return (
    <TouchableOpacity style={[styles.colorButton, {backgroundColor: colors.secondary}]} onPress={changeColor}>
    </TouchableOpacity>
  )
}

export default ColorSwitch

const styles = StyleSheet.create({
    colorButton: {
        position: 'absolute',
        top: 48,
        right: 32,
        width: 32,
        height: 32,
        borderRadius: 50,
    }
})