import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import documentVerifyScreen from './documentVerifyScreen'

const faceVerificationScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
              
              <View style={{margin:70}}>
              <Text style={{color:'white'}}>faceVerificationScreen</Text>
              <TouchableOpacity onPress={()=>navigation.navigate(documentVerifyScreen)}>
                <Text style={{color:"white"}}>Next</Text>
              </TouchableOpacity>
            
            </View></View>
  )
}

export default faceVerificationScreen