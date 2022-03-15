import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import tailwind from 'tailwind-react-native-classnames';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button } from 'react-native-elements';

const TransactionScreen = ({navigation}) => {
    return (
        <View>
            <LinearGradient 
                style={tailwind`items-center justify-center py-4 rounded-bl-xl rounded-br-xl`} 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={["#318FC1", "#056395"]}>
                    <TouchableOpacity style={tailwind`absolute left-0 mx-4 flex-row`} 
                        onPress={()=>navigation.goBack()}
                        >
                        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                        <Text style={tailwind`text-white`}>Back</Text>
                    </TouchableOpacity>
                <Text style={tailwind`text-white text-center font-bold text-xl`}>
                    Accept Booking Request
                </Text>
                {/* <TouchableOpacity style={tailwind`absolute right-0 mx-4`} onPress={() => setModalOpen(true) }><Text style={tailwind`text-white`}>Add</Text></TouchableOpacity> */}
            </LinearGradient>
            <View style={tailwind`mb-4`}>
                <Input
                    placeholder='Search....'
                    placeholderTextColor={"rgba(149, 149, 149, 0.43)"}
                    containerStyle={tailwind`h-14`}
                    rightIcon={()=><TouchableOpacity style={tailwind`px-2`}><FontAwesome name="search" size={30} color="#3593C5" /></TouchableOpacity>}
                    // leftIcon={()=><Fontisto  name="locked" style={tailwind`px-2`} size={24} color="#3593C5" />} inputStyle={tailwind`text-lg text-gray-400`}
                    inputContainerStyle={tailwind`border-0 my-2 bg-white px-2 mx-2 rounded shadow-md`}
                    secureTextEntry={true}
                    />
            </View>
            <TouchableOpacity 
                onPress={()=> navigation.navigate('Invoice')}
                style={tailwind`flex-row border-l-primary border-l-4 bg-white shadows-md py-4 rounded-2xl m-2 items-center justify-center`}>
                <View style={tailwind`p-2`}>
                    <Text style={tailwind`font-bold text-black text-xl my-1`}>Car Cleaning</Text>
                    <Text style={tailwind`text-secondary text-base my-1`}><AntDesign name="calendar" size={24} color="#3593C5" /> 12 Jan 2022 | 7:76 PM</Text>
                    <Text style={tailwind`text-secondary text-base my-1`}><Feather name="map-pin" size={24} color="#3593C5" /> Matina Aplaya, Davao City</Text>
                    <Text style={tailwind`text-xs text-secondary mt-2`}>Total earnings</Text>
                    <Text style={tailwind`text-primary font-bold text-2xl`}>Php 3,000.00</Text>
                </View> 
                <EvilIcons name="user" style={tailwind`p-2`} size={128} color="#3593C5" />
            </TouchableOpacity> 
            <TouchableOpacity 
                onPress={()=> navigation.navigate('Invoice')}
                style={tailwind`flex-row border-l-primary border-l-4 bg-white shadows-md py-4 rounded-2xl m-2 items-center justify-center`}>
                <View style={tailwind`p-2`}>
                    <Text style={tailwind`font-bold text-black text-xl my-1`}>Car Cleaning</Text>
                    <Text style={tailwind`text-secondary text-base my-1`}><AntDesign name="calendar" size={24} color="#3593C5" /> 12 Jan 2022 | 7:76 PM</Text>
                    <Text style={tailwind`text-secondary text-base my-1`}><Feather name="map-pin" size={24} color="#3593C5" /> Matina Aplaya, Davao City</Text>
                    <Text style={tailwind`text-xs text-secondary mt-2`}>Total earnings</Text>
                    <Text style={tailwind`text-primary font-bold text-2xl`}>Php 3,000.00</Text>
                </View> 
                <EvilIcons name="user" style={tailwind`p-2`} size={128} color="#3593C5" />
            </TouchableOpacity> 
        </View>
    )
};

export default TransactionScreen;