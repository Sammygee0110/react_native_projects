import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Formik } from 'formik';

import * as Yup from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function App() {

  const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
    .min(4, "There should be a minimum of 4 characters")
    .max(16, "There should be a maximum of 16 characters")
    .required("This is a required field!")
  })

  const [password, setPassword] = useState('')
  const [isPasswordGenerated, setisPasswordGenerated] = useState(false)

  const [lowercase, setLowercase] = useState(true)
  const [uppercase, setUppercase] = useState(false)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)

  const genratePassword = (passwordLength: number) => {
    let charactersString = '';

    let upperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCaseString = 'abcdefghijklmnopqrstuvwxyz';
    let numbersString = '1234567890';
    let symbolsString = '!@#$%.,:;/?_-+=\&*';

    if(lowercase){
      charactersString += lowerCaseString;
    }
    if(uppercase){
      charactersString += upperCaseString;
    }
    if(number){
      charactersString += numbersString;
    }
    if(symbol){
      charactersString += symbolsString;
    }

    let passwordString = createPassword(charactersString, passwordLength);
    setPassword(passwordString);
    setisPasswordGenerated(true);
  }
  
  const createPassword = (characters: string, passwordLength: number): string => {
    let result = '';
    for(let i = 0; i < passwordLength; i++){
      const charIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(charIndex)
    }
    return result;
  }

  const resetPasswordState = () => {
    setPassword('');
    setLowercase(true);
    setNumber(false);
    setSymbol(false);
    setUppercase(false);
    setisPasswordGenerated(false);
  }

  return (
    <ScrollView keyboardShouldPersistTaps = 'handled'>
      <SafeAreaView style = {styles.container}>
        <View>
          <Text style = {styles.headerText}>Password Generator</Text>
          <Formik
       initialValues={{ passwordLength: '' }}
       validationSchema={PasswordSchema}
       onSubmit={ values => {
        genratePassword(+values.passwordLength);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleSubmit,
         isValid,
         handleReset
       }) => (
         <>
         <View style = {styles.inputWrapper}>
          <View>
          <Text style = {styles.heading}>Password Length</Text>
          {touched.passwordLength && errors.passwordLength &&(
            <Text style = {styles.errorText}>
              {errors.passwordLength}
            </Text>
          )}
          </View>
            <TextInput
            style = {styles.inputStyle}
            placeholder='Ex .8'
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            keyboardType='numeric'
            />
         </View>
          <View style = {styles.inputWrapper}>
            <Text>Include Lowercase</Text>
            <BouncyCheckbox
            disableBuiltInState
            isChecked = {lowercase}
            onPress={() => {setLowercase(!lowercase)}}
            fillColor='#8D3DAF'
            />
          </View>
          
          <View style = {styles.inputWrapper}>
            <Text>Include Uppercase</Text>
            <BouncyCheckbox
            disableBuiltInState
            isChecked = {uppercase}
            onPress={() => {setUppercase(!uppercase)}}
            fillColor='#E07C24'
            />
          </View>
          
          <View style = {styles.inputWrapper}>
            <Text>Include Numbers</Text>
            <BouncyCheckbox
            disableBuiltInState
            isChecked = {number}
            onPress={() => {setNumber(!number)}}
            fillColor='#5A20CB'
            />
          </View>
          
          <View style = {styles.inputWrapper}>
            <Text>Include Symbols</Text>
            <BouncyCheckbox
            disableBuiltInState
            isChecked = {symbol}
            onPress={() => {setSymbol(!symbol)}}
            fillColor='#35BDD0'
            />
          </View>

          <View style = {styles.actionTab}>
            <TouchableOpacity
            style = {styles.primaryBtn}
            disabled = {!isValid}
            onPress={handleSubmit}
            >
              <Text  style = {styles.primaryBtnTxt}>Generate Password</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style = {styles.secondaryBtn}
            onPress={() => {
              handleReset();
              resetPasswordState();
            }}
            >
              <Text  style = {styles.primaryBtnTxt}>Reset</Text>
            </TouchableOpacity>
          </View>
          {isPasswordGenerated ? 
          <View style = {[styles.card, styles.elevatedCard]}>
            <Text style = {{color: '#000', textAlign: 'center'}}>Press and hold to copy</Text>
            <Text selectable style = {styles.generatedPassword}>{password}</Text>
          </View> : null}
         </>
       )}
     </Formik>
        </View>
        <>
        </>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  headerText: {
    fontSize: 30,
    fontWeight: '500'
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    alignItems: 'center'
  },
  inputStyle: {
    width: '30%',
    borderWidth: 1,
    borderColor: '#35BDD0',
    borderRadius: 4,
  },
  primaryBtn: {
    backgroundColor: '#1B98F5',
    width: 120,
    alignItems: 'center',
    borderRadius: 6,
    padding: 6
  },
  primaryBtnTxt: {
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 15,
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  secondaryBtn: {
    backgroundColor: '#FF6263',
    width: 120,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 6
  },
  actionTab: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  card: {
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 14,
  },
  elevatedCard: {
    backgroundColor: '#CAD5E2',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.4,
    shadowRadius: 5
  },
  generatedPassword: {
    fontSize: 22,
    color: '#000',
    marginHorizontal: 12,
    textAlign: 'center'
  },
})