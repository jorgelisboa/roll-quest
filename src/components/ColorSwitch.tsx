import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';

const ColorSwitch = () => {
    const { colors } = useTheme();

    const changeColor = () => {
        // Rounded button with a color in useTheme
        // When pressed, change the color of the button
        // to secondary color in useTheme
        // When pressed again, change the color of the button

        if (colors.primary === "#fff") {
            colors.primary = "#000"
        } else if (colors.primary === "#000") {
            colors.primary = "#fff"
        }
    }
  return (
    <TouchableOpacity style={[styles.colorButton, {backgroundColor: colors.primary}]} onPress={changeColor}>
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
        borderWidth: 2,
    }
})