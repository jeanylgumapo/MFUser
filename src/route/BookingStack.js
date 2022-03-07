import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceInfoScreen from '../screen/Booking/ServiceInfo';
import VehicleScreen from '../screen/Booking/Vehicle';
import DetailsScreen from '../screen/Booking/Details';
import DashboardScreen from '../screen/Dashboard/Dashboard';
import SummaryScreen from '../screen/Booking/Summary';
import PaymentScreen from '../screen/Booking/Payment';
import TrackScreen from '../screen/Booking/Track';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack= createNativeStackNavigator();
// import DashboardScreen from '../screen/Dashboard/Dashboard';
// import ServicesScreen from '../screen/BottomTabs/Services';
import NotificationScreen from '../screen/BottomTabs/Notification';
// import SettingsScreen from '../screen/BottomTabs/Settings';
// import BagScreen from '../screen/BottomTabs/Booking';
import BottomTab from '../components/BottomTab';
// import BookingStack from './BookingStack';
import SettingsStack from './SettingsStack';
import GarageScreen from '../screen/Settings/Garage';
const Tab = createBottomTabNavigator();
function BookingStack(){
    return(
        // <NavigationContainer>
        <Stack.Navigator initialRouteName={'Dashboard'}>
            <Stack.Screen 
                name="Dashboard" 
                // component={DashboardScreen}  
                options={{
                    headerShown:false,
                    }
                }              
            >
                {() =>(
                     <Tab.Navigator  
                        tabBar={(props) => <BottomTab {...props}/>}>
                        <Tab.Screen name="Home" component={DashboardScreen} options={{headerShown:false,}}/>
                        <Tab.Screen name="Garage" component={GarageScreen} options={{headerShown:false,}}/>
                        {/* <Tab.Screen name="Bag" component={BagScreen} options={{headerShown:false,}}/> */}
                        <Tab.Screen name="Notifications" component={NotificationScreen}  options={{headerShown:false,}}/>
                        <Tab.Screen name="SettingStack" component={SettingsStack} options={{headerShown:false,}}/>
                    </Tab.Navigator>
                )}
                </Stack.Screen>
            <Stack.Screen 
                name="ServiceInfo" 
                component={ServiceInfoScreen}  
                options={{
                    headerShown:false,                    
                    }
                }              
            />
            <Stack.Screen 
                name="Vehicle" 
                component={VehicleScreen} 
                options={{
                    headerShown:false,
                    }
                }  
            />   
            <Stack.Screen 
                name="Details" 
                component={DetailsScreen} 
                options={{
                    headerShown:false,
                    }
                }  
            /> 
            <Stack.Screen 
                name="Summary" 
                component={SummaryScreen} 
                options={{
                    headerShown:false,
                    }
                }  
            />  
            <Stack.Screen 
                name="Payment" 
                component={PaymentScreen} 
                options={{
                    headerShown:false,
                    }
                }  
            />   
             <Stack.Screen 
                name="Track" 
                component={TrackScreen} 
                options={{
                    headerShown:false,
                    }
                }  
            />  
      </Stack.Navigator>
    //   </NavigationContainer>
    );
}
export default BookingStack;