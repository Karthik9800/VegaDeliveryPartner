import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import aadharEntryScreen from './aadharEntryScreen'
import processingVerificationScreen from './processingVerificationScreen'
import panUploadScreen from './panUploadScreen'
import licenseUploadScreen from './licenseUploadScreen'

const documentVerifyScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
          
          <View style={{margin:70}}>
          <Text style={{color:'white'}}>documentVerifyScreen</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(aadharEntryScreen)}>
            <Text style={{color:"white"}}>A</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate(panUploadScreen)}>
            <Text style={{color:"white"}}>P</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate(licenseUploadScreen)}>
            <Text style={{color:"white"}}>L</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate(processingVerificationScreen)}>
            <Text style={{color:"white"}}>Next</Text>
          </TouchableOpacity>
        </View></View>
  )
}

export default documentVerifyScreen