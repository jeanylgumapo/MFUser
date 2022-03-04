import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import LinearGradient from 'react-native-linear-gradient';

const SubHeader = ({label, onpress}) => {
    return (        
        <View style={tailwind`flex `}>
            <LinearGradient 
                style={tailwind`items-center justify-center py-4 rounded-bl-xl rounded-br-xl`} 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={["#318FC1", "#056395"]}>
                <View>
                    {/* <TouchableOpacity onpress={onpress}>
                        <Text>Back</Text>
                    </TouchableOpacity> */}
                    <Text style={tailwind`text-white text-center font-bold text-xl`}>
                        {label}
                    </Text>
                    <TouchableOpacity style={tailwind`absolute right-0`} ><Text>Add</Text></TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
       
    )
};

export default SubHeader;