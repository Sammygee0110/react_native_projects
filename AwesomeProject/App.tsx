import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme
} from 'react-native';

function App(){
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <SafeAreaView>
      <View>
        <Text style = {{color:(isDarkMode ? "#ffffff": "#000000")}}>Hello World !!</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;