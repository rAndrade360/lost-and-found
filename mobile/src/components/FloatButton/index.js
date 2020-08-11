import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const FloatButton = ({ handleClick }) => {
    return (
        <TouchableOpacity onPress={handleClick} style={styles.button}>
            <Text>
                <MaterialCommunityIcons name='plus' color='#FFF' size={25} />
            </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colors.primaryColor,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50,
        right: 50,
        elevation: 5,
        shadowColor: '#0006',

    }
})

export default FloatButton;

