import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screen/Auth/Login';
import SignUpScreen from '../screen/Auth/Signup';
import BottomTabStack from './BottomTabStack';
import BookingStack from './BookingStack';
import StartScreen from '../screen/OnBoarding/Start';
import Onboard from '../screen/OnBoarding/Onboard';

const Stack = createNativeStackNavigator();
export default function MainStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Start" component={StartScreen} options={{headerShown:false,}}/>
            <Stack.Screen name="Onboard" component={Onboard} options={{headerShown:false,}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false,}}/>
            <Stack.Screen name="Signup" component={SignUpScreen} options={{headerShown:false,}}/>
            <Stack.Screen name="BottomTabStack" component={BookingStack} options={{headerShown:false,}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}