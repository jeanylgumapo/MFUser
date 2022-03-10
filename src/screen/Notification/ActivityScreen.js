import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NotificationCard from '../../components/NotificationCard';
import tailwind from 'tailwind-react-native-classnames';
const ActivityScreen = () => {
    return (
        <View >
            <Text style={tailwind`text-2xl font-bold text-black p-4`}>Your Recent Bookings</Text>
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

export default ActivityScreen;