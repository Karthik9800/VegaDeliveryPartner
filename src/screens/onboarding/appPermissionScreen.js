import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import citySelectionScreen from './citySelectionScreen'

const appPermissionScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
          
          <View style={{margin:70}}>
          <Text style={{color:'white'}}>appPermissionScreen</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(citySelectionScreen)}>
            <Text style={{color:"white"}}>Next</Text>
          </TouchableOpacity>
        
        </View></View>
  )
}

export default appPermissionScreen