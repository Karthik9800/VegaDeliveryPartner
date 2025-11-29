import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import onBoardingScreen1 from './onBoardingScreen1'

const processingVerificationScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
          
          <View style={{margin:70}}>
          <Text style={{color:'white'}}>processingVerificationScreen</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(onBoardingScreen1)}>
            <Text style={{color:"white"}}>Next</Text>
          </TouchableOpacity>
        
        </View></View>
  )
}

export default processingVerificationScreen