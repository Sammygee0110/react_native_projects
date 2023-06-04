import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    useColorScheme,
    StyleSheet
} from 'react-native';

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
    return(
            <View style = {styles.container}>
                <Text style = {{color:(isDarkMode ? '#ffffff': '#000000')}}>Hello!</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default AppPro;