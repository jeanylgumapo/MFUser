import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screen/Auth/Login';
import SignUpScreen from '../screen/Auth/Signup';
import BottomTabStack from './BottomTabStack';
import DashboardScreen from '../screen/Dashboard/Dashboard';
import BookingStack from './BookingStack';

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={DashboardScreen} options={{headerShown:false,}}/>
            <Stack.Screen name="Booking" component={BookingStack} options={{headerShown:false,}}/>
            {/* <Stack.Screen name="BottomTabStack" component={BottomTabStack} options={{headerShown:false,}}/> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
}