import React, { useState } from 'react';
import {ScrollView, Text, View, Switch, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesome5,Octicons, MaterialCommunityIcons,AntDesign,FontAwesome ,Entypo,MaterialIcons, Ionicons   } from '@expo/vector-icons';


const SettingsScreen = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={tailwind`bg-tertiary h-full`}>
            <LinearGradient 
                style={tailwind` py-4 rounded-bl-xl rounded-br-xl`} 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={["#318FC1", "#056395"]}>
                <View style={tailwind`items-center`}>
                    <Text style={tailwind`text-white font-bold text-2xl`}>Settings</Text>
                    <Ionicons style={tailwind`absolute right-0 top-0 mx-4`} name="log-out" size={32} color="white" onPress={()=> navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }],
                            })} />
                </View>
                <View style={tailwind`items-center justify-center`}>
                    <FontAwesome5 style={tailwind`bg-white p-4 rounded-full m-8`} name="user-alt" size={56} color="#DAD7E0" />
                    <Octicons  style={tailwind`bg-primary rounded-full p-2 mx-4 absolute right-24`} onPress={()=> navigation.navigate('Edit')} name="pencil" size={24} color="white" />
                    <View style={tailwind`items-center`}>
                        <Text style={tailwind`text-white font-bold text-2xl`}> Rosalinda Bulat-Ag</Text>
                        <View style={tailwind`flex-row items-center`}>
                            <MaterialCommunityIcons name="google-maps" size={16} color="white" />
                            <Text style={tailwind`text-white text-xs`}> Cibadak, Sukanumi, Jawa Barat</Text>
                        </View>
                        <Text style={tailwind`text-yellow-400`}> +6283811048555</Text>
                    </View>
                </View>                
            </LinearGradient>
            <ScrollView>
            <View style={tailwind`my-4`}>
                
                <TouchableOpacity style={tailwind`bg-white p-4 justify-center my-1`} onPress={()=> navigation.navigate('Garage')}>
                    <View style={tailwind`px-2 py-4`}>
                            <FontAwesome5 style={tailwind`left-0 absolute`} name="car-side" size={24} color="#3693C5" />
                            <Text style={tailwind`left-8 absolute text-lg text-black mx-2`}> My Garage</Text>
                    </View>
                    <AntDesign style={tailwind`absolute right-0 mx-4 `} name="arrowright" size={24} color="#3693C5" />
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`bg-white p-4 justify-center my-1 `} onPress={()=> navigation.navigate('Transaction')} >
                    <View style={tailwind`px-2 py-4`}>
                        <FontAwesome5 style={tailwind`left-0 absolute`} name="wallet" size={24} color="#3693C5" />
                        <Text style={tailwind`left-8 absolute text-lg text-black mx-2`}> Transaction History</Text>
                    </View>
                    <AntDesign style={tailwind`absolute right-0 mx-4`} name="arrowright" size={24} color="#3693C5" />
                </TouchableOpacity>
                {/* <View style={tailwind`bg-white p-4 justify-center my-1 `}>
                    <View style={tailwind`px-2 py-4`}>
                        <FontAwesome style={tailwind`left-0 absolute`}  name="bell" size={24} color="#3693C5" />
                        <Text style={tailwind`left-8 absolute text-lg text-black mx-2`}> Notifications</Text>
                    </View>
                    <Switch
                        style={tailwind`absolute right-0 mx-4`}
                        trackColor={{ false: "#E4E4E4", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#fffff" : "#3593C5"}
                        ios_backgroundColor="#E4E4E4"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View> */}
                <TouchableOpacity style={tailwind`bg-white p-4 justify-center my-1`} onPress={()=> navigation.navigate('Terms')}>
                    <View style={tailwind`px-2 py-4`}>
                        <Entypo style={tailwind`left-0 absolute`}  name="info-with-circle" size={24} color="#3693C5" />
                        <Text style={tailwind`left-8 absolute text-lg text-black mx-2`}> Terms of Use</Text>
                    </View>
                    <AntDesign style={tailwind`absolute right-0 mx-4`} name="arrowright" size={24} color="#3693C5" />
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`bg-white p-4 justify-center my-1`} onPress={()=> navigation.navigate('Help')}>
                    <View style={tailwind`px-2 py-4`}>
                        <FontAwesome5 name="phone-volume" style={tailwind`left-0 absolute`} size={24} color="#3693C5" />
                        <Text style={tailwind`left-8 absolute text-lg text-black mx-2`}> Help Center</Text>
                    </View>
                    <AntDesign style={tailwind`absolute right-0 mx-4`} name="arrowright" size={24} color="#3693C5" />
                </TouchableOpacity>
                {/* <View style={tailwind`bg-white p-4 justify-center my-1`}>
                    <View style={tailwind`px-2 py-4`}>
                        <MaterialIcons style={tailwind`left-0 absolute`}   name="security" size={24} color="#3693C5" />
                        <Text style={tailwind`left-8 absolute text-lg text-black mx-2`}> Policy</Text>
                    </View>
                    <AntDesign style={tailwind`absolute right-0 mx-4`} name="arrowright" size={24} color="#3693C5" />
                </View>                 */}
            </View>
            </ScrollView>
        </View>
    )
};

export default SettingsScreen;