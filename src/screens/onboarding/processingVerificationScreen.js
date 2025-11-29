import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import onBoardingScreen from './onBoardingScreen'

const processingVerificationScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
          
          <View style={{margin:70}}>
          <Text style={{color:'white'}}>processingVerificationScreen</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(onBoardingScreen)}>
            <Text style={{color:"white"}}>Next</Text>
          </TouchableOpacity>
        
        </View></View>
  )
}

export default processingVerificationScreen