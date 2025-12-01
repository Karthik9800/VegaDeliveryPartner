import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import appPermissionScreen from './appPermissionScreen'

const loginVerifyScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
          
          <View style={{margin:70}}>
          <Text style={{color:'white'}}>loginVerifyScreen</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(appPermissionScreen)}>
            <Text style={{color:"white"}}>Next</Text>
          </TouchableOpacity>
        
        </View></View>
  )
}

export default loginVerifyScreen