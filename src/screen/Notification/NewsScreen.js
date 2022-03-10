import React from 'react';
import {Text, View} from 'react-native';
import NotificationCard from '../../components/NotificationCard';
import tailwind from 'tailwind-react-native-classnames';
const NewsScreen = () => {
    return (
        <View style={tailwind`p-4`}>
            <Text style={tailwind`text-2xl font-bold text-black`}>News & Updates</Text>
            <View style={tailwind`p-4 border-b-2 border-gray-100 my-1`}>
               <Text style={tailwind`font-bold text-base`}>Version 1.01 Update</Text>
               <Text style={tailwind`text-sm text-secondary`}>Last Updated 01-22-22</Text>
               <Text>New feautures have been added including bug fixes </Text>
            </View>
            <View style={tailwind`p-4 border-b-2 border-gray-100 my-1`}>
               <Text style={tailwind`font-bold text-base`}>Version 1.01 Update</Text>
               <Text style={tailwind`text-sm text-secondary`}>Last Updated 01-22-22</Text>
               <Text>New feautures have been added including bug fixes </Text>
            </View>
        </View>
    )
};

export default NewsScreen;