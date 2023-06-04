import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return(
        <View style = {styles.currenciesContainer}>
        <Text style = {styles.currencyFlag}>{props.flag}</Text>
            <Text style = {styles.currencyName}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    currenciesContainer: {
        alignItems: 'center',
    },
    currencyFlag: {
        fontSize: 28,
        marginBottom: 4,
        color: '#FFFFFF'
    },
    currencyName: {
        fontSize: 14,
        color: '#000000'
    },
});

export default CurrencyButton;