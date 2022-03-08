import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
// import { MaterialIcons,FontAwesome, AntDesign  } from '@expo/vector-icons';
import Entypo from 'react-native-vector-icons/Entypo';
import tailwind from 'tailwind-react-native-classnames';
import LinearGradient from 'react-native-linear-gradient';
const ChatScreen = () => {
    return (
        <View style={tailwind`bg-white h-full`}>
            <View style={tailwind`bg-white`}>
                <LinearGradient 
                        style={tailwind`py-4 rounded-bl-xl rounded-br-xl py-8`} 
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 0}} 
                        colors={["#318FC1", "#056395"]}>
                            <View style={tailwind`flex-col px-4  `}>
                                <Text style={tailwind`text-white text-right`}>
                                    <Text style={tailwind`text-base font-bold`}>INV-000055 </Text>
                                    <Entypo style name="mail" size={24} color="white" />
                                    <Entypo name="pencil" size={24} color="white" />
                                </Text> 
                                <Text style={tailwind`text-right text-green-400 px-4`}>APPROVED</Text> 
                            </View> 
                            <View style={tailwind`px-4 py-2`}>
                                <Text style={tailwind`font-bold text-white text-base py-4`}>
                                    Rosalinda Bulat-ag
                                </Text>
                                <Text style={tailwind`text-3xl font-bold text-white py-2`}>
                                    Php 25,000.00
                                </Text>
                            </View>                        
                    </LinearGradient>
            </View>
        </View>
    )
};

export default ChatScreen;