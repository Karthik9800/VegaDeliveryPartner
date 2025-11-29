import {View, Text ,StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import onBoardingScreen from '../screens/onboarding/onBoardingScreen';
import loginEntryScreen from '../screens/onboarding/loginEntryScreen';
import loginVerifyScreen from '../screens/onboarding/loginVerifyScreen';
import appPermissionScreen from '../screens/onboarding/appPermissionScreen';
import locationSelectionScreen  from '../screens/onboarding/locationSelectionScreen';
import vehicleSelectionScreen from '../screens/onboarding/vehicleSelectionScreen';
import personalInfoScreen from '../screens/onboarding/personalInfoScreen';
import faceInstructionScreen from '../screens/onboarding/faceInstructionScreen';
import faceVerificationScreen from '../screens/onboarding/faceVerificationScreen';
import documentVerifyScreen from '../screens/onboarding/documentVerifyScreen';
import aadharEntryScreen from '../screens/onboarding/aadharEntryScreen';
import aadharVerifyScreen from '../screens/onboarding/aadharVerifyScreen';
import panUploadScreen from '../screens/onboarding/panUploadScreen';
import licenseUploadScreen from '../screens/onboarding/licenseUploadScreen';
import processingVerificationScreen from '../screens/onboarding/processingVerificationScreen';



const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false,statusBarStyle:'light'}}
      initialRouteName="onBoardingScreen"
      >
      {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
      <Stack.Screen name="onBoardingScreen" component={onBoardingScreen} />
      <Stack.Screen name="loginEntryScreen" component={loginEntryScreen} />
      <Stack.Screen name="loginVerifyScreen" component={loginVerifyScreen} />
      <Stack.Screen name="appPermissionScreen" component={appPermissionScreen} />
      <Stack.Screen name="locationSelectionScreen" component={locationSelectionScreen} />
      <Stack.Screen name="vehicleSelectionScreen" component={vehicleSelectionScreen} />
      <Stack.Screen name="personalInfoScreen" component={personalInfoScreen} />
      <Stack.Screen name="faceInstructionScreen" component={faceInstructionScreen} />
      <Stack.Screen name="faceVerificationScreen" component={faceVerificationScreen} />
      <Stack.Screen name="documentVerifyScreen" component={documentVerifyScreen} />
      <Stack.Screen name="aadharEntryScreen" component={aadharEntryScreen} />
      <Stack.Screen name="aadharVerifyScreen" component={aadharVerifyScreen} />
      <Stack.Screen name="panUploadScreen" component={panUploadScreen} />
      <Stack.Screen name="licenseUploadScreen" component={licenseUploadScreen} />
      <Stack.Screen name="processingVerificationScreen" component={processingVerificationScreen} />
      {/* <Stack.Screen name="" component={} />
      <Stack.Screen name="" component={} />
      <Stack.Screen name="" component={} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;