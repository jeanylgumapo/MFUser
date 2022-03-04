import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';


const MainScreen = () => {
    return (
        <View style={tailwind`flex items-center`}>
           <Image style={tailwind`w-72 h-56`} source ={require('../../../assets/mflogo.png')}/> 
           <Text>Sign in to your account</Text>
                <Input
                    placeholder='Enter your email'
                    // errorStyle={{ color: 'red' }}
                    // errorMessage='ENTER A VALID ERROR HERE'
                    // value={email}
                    // onChangeText={text=> setEmail(text)}
                    leftIcon={()=><Foundation name="mail" size={24} color="#3593C5" />}
                    inputStyle={tailwind`text-sm text-black tracking-wide`}
                />
                <Input
                    placeholder='Enter your password'
                    // errorStyle={{ color: 'red' }}
                    // errorMessage='ENTER A VALID ERROR HERE'
                    // value={email}
                    // onChangeText={text=> setEmail(text)}
                    secureTextEntry={true}
                    rightIcon={()=><TouchableOpacity><AntDesign name="eye" size={24} color="gray" /></TouchableOpacity>}
                    leftIcon={()=><Fontisto name="locked" size={24} color="#3593C5" />}
                    inputStyle={tailwind`text-sm text-black tracking-wide`}
                />
                
        </View>
    )
};

export default MainScreen;