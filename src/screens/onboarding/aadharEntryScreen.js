import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import aadharVerifyScreen from './aadharVerifyScreen'

const aadharEntryScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
          
          <View style={{margin:70}}>
          <Text style={{color:'white'}}>aadharE</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(aadharVerifyScreen)}>
            <Text style={{color:"white"}}>Next</Text>
          </TouchableOpacity>
        
        </View></View>
  )
}

export default aadharEntryScreen