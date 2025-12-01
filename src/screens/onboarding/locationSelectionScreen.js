import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import personalInfoScreen from './personalInfoScreen'

const locationSelectionScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
          
          <View style={{margin:70}}>
          <Text style={{color:'white'}}>city</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(personalInfoScreen)}>
            <Text style={{color:"white"}}>Next</Text>
          </TouchableOpacity>
        
        </View></View>
  )
}

export default locationSelectionScreen