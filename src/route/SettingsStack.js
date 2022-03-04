import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screen/BottomTabs/Settings';
import GarageScreen from '../screen/Settings/Garage';
import TransactionScreen from '../screen/Settings/Transaction';
import TermsScreen from '../screen/Settings/Terms';
import HelpCenterScreen from '../screen/Settings/HelpCenter';
import EditProfileScreen from '../screen/Settings/EditProfile';

const Stack= createNativeStackNavigator();

function SettingsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Settings" 
                component={SettingsScreen}  
                options={{
                    headerShown:false,
                    }
                }              
            />
            <Stack.Screen 
                name="Garage" 
                component={GarageScreen}  
                options={{
                    headerShown:false,
                    }
                }              
            />
            <Stack.Screen 
                name="Transaction" 
                component={TransactionScreen} 
                options={{
                    headerShown:false,
                    }
                }  
            />   
            <Stack.Screen 
                name="Terms" 
                component={TermsScreen} 
                options={{
                    headerShown:false,
                    }
                }  
            />   
            <Stack.Screen 
                name="Help" 
                component={HelpCenterScreen} 
                options={{
                    headerShown:false,
                    }
                }  
            /> 
            <Stack.Screen 
                name="Edit" 
                component={EditProfileScreen} 
                options={{
                    headerShown:false,
                    }
                }  
            /> 
      </Stack.Navigator>
    );
}
export default SettingsStack;