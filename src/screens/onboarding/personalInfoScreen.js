import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import faceInstructionScreen from './faceInstructionScreen'

const personalInfoScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
          
          <View style={{margin:70}}>
          <Text style={{color:'white'}}>personalInfoScreen</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(faceInstructionScreen)}>
            <Text style={{color:"white"}}>Next</Text>
          </TouchableOpacity>
        
        </View></View>
  )
}

export default personalInfoScreen