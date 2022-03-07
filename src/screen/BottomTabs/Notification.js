import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import tailwind from 'tailwind-react-native-classnames';

const NotificationScreen = () => {
    const [isActivity, setisActivity]=useState(true);
    const [isUpdate, setisUpdate]=useState(false);
    const [isActive, setisActive]=useState(true);
    return (
        
        <View style={tailwind`bg-tertiary h-full`}>
            <LinearGradient 
                style={tailwind`items-center justify-center py-4 rounded-bl-xl rounded-br-xl`} 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={["#318FC1", "#056395"]}>
                <Text style={tailwind`text-white text-center font-bold text-xl`}>
                    Notifications
                </Text>
                {/* <TouchableOpacity style={tailwind`absolute right-0 mx-4`} onPress={() => setModalOpen(true) }><Text style={tailwind`text-white`}>Add</Text></TouchableOpacity> */}
            </LinearGradient>  
            <View style={tailwind`flex-row items-center bg-white `}>
                <View style={tailwind`  w-2/4 p-4 items-center border-b-2 border-b-primary rounded-l-2xl`}>
                    <TouchableOpacity onPress={()=> setisActivity(true) && setisUpdate(false)}>
                        <Text style={tailwind`font-bold text-primary text-lg`}>Activities</Text>
                    </TouchableOpacity>
                </View>
                <View style={tailwind` w-2/4 p-4 items-center rounded-r-2xl`}>
                    <TouchableOpacity onPress={()=> setisActivity(false) && setisUpdate(true)}>
                        <Text  style={tailwind`font-bold text-gray-300 text-lg`}>Updates</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={tailwind`bg-white flex flex-row items-center p-8 m-4 rounded-2xl shadow-lg border-l-primary border-l-2`}>
                <View  style={tailwind`flex-col`}>
                    <Text style={tailwind`text-base text-black`}>Change Oil</Text>
                    <View style={tailwind`flex-row items-center`}>
                        <Entypo  style={tailwind`mx-2 icon-bg-primary p-1 rounded-full`} name="calendar" size={24} color="#3593C5" />
                        <Text>12 Jan 2022  |  7:56 PM</Text>
                    </View>
                    <View style={tailwind`flex-row items-center`}>
                        <FontAwesome  style={tailwind`mx-2 icon-bg-primary p-1 rounded-full`} name="map-marker" size={24} color="#3593C5" />
                        <Text>SM Lanang, Lanang, Davao</Text>
                    </View>
                    <Text style={tailwind`text-xs`}>Total</Text>
                    <Text style={tailwind`text-xl text-primary font-bold`}>Php 3,000.00</Text>
                </View>
                <View style={tailwind`absolute right-0 px-8`}>
                    <View style={tailwind` rounded-full  bg-primary bg-white shadow-lg`}><Image style={tailwind`h-12 w-20`} source ={require('../../../assets/car.png')}/></View>
                </View>
            </View>
        </View>
    )
};

export default NotificationScreen;