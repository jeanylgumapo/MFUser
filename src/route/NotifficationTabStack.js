import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopBar from '../components/TopBar';
import NotificationScreen from '../screen/BottomTabs/Notification';
import ActivityScreen from '../screen/Notification/ActivityScreen';
import NewsScreen from '../screen/Notification/NewsScreen';

const Tab = createMaterialTopTabNavigator();
const NotificationTabStack = () => {
    return (
        // <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <TopBar {...props} />}>
          <Tab.Screen name="Notification" component={NotificationScreen} />
          <Tab.Screen name="Activity" component={ActivityScreen} />
          <Tab.Screen name="Profile" component={NewsScreen} />
        </Tab.Navigator>
    //   </NavigationContainer>
    )
};

export default NotificationTabStack;