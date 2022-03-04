import React from 'react';
import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screen/Dashboard/Dashboard';
import ServicesScreen from '../screen/BottomTabs/Services';
import NotificationScreen from '../screen/BottomTabs/Notification';
import SettingsScreen from '../screen/BottomTabs/Settings';
import BagScreen from '../screen/BottomTabs/Booking';
import BottomTab from '../components/BottomTab';
import BookingStack from './BookingStack';
import SettingsStack from './SettingsStack';
import GarageScreen from '../screen/Settings/Garage';

const Tab = createBottomTabNavigator();
const BottomStack = () => {
    
    return (
        <Tab.Navigator  
            tabBar={(props) => <BottomTab {...props}/>}>
            <Tab.Screen name="Home" component={BookingStack} options={{headerShown:false,}}/>
            <Tab.Screen name="Garage" component={GarageScreen} options={{headerShown:false,}}/>
            {/* <Tab.Screen name="Bag" component={BagScreen} options={{headerShown:false,}}/> */}
            <Tab.Screen name="Notifications" component={NotificationScreen}  options={{headerShown:false,}}/>
            <Tab.Screen name="SettingStack" component={SettingsStack} options={{headerShown:false,}}/>
        </Tab.Navigator>
    )
};
export default BottomStack;