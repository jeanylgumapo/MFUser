import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceInfoScreen from '../screen/Booking/ServiceInfo';
import VehicleScreen from '../screen/Booking/Vehicle';
import DetailsScreen from '../screen/Booking/Details';
import DashboardScreen from '../screen/Dashboard/Dashboard';
import SummaryScreen from '../screen/Booking/Summary';
import PaymentScreen from '../screen/Booking/Payment';
import TrackScreen from '../screen/Booking/Track';

const Stack= createNativeStackNavigator();

function BookingStack(){
    return(
        <Stack.Navigator initialRouteName={'Dashboard'}>
            <Stack.Screen 
                name="Dashboard" 
                component={DashboardScreen}  
                options={{
                    headerShown:false,
                    }
                }              
            />
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
    );
}
export default BookingStack;