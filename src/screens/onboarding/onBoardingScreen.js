import { View, Text ,StatusBar, TouchableOpacity} from 'react-native'
import React from 'react'
import loginEntryScreen from './loginEntryScreen'


const onBoardingScreen = ({navigation}) => {
  return (
    
    <View style={{flex:1,backgroundColor:"black"}}>
      <StatusBar barStyle={'light-content'}/>
      <View style={{margin:70}}>
      <Text style={{color:'white'}}>onBoardingScreen1</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(loginEntryScreen)}>
        <Text style={{color:"white"}}>Next</Text>
      </TouchableOpacity>
    
    </View></View>
  )
}

export default onBoardingScreen