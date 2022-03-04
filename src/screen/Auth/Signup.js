import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const SignUpScreen = ({navigation}) => {
    return (        
        <View style={tailwind`flex justify-center bg-white h-full`}>
            <View style={tailwind`mx-4`}>
            <View style={tailwind`items-center`}>
                <Image style={tailwind`w-52`} source ={require('../../../assets/mflogo.png')}/> 
                </View>
                <View style={tailwind`items-center mt-10 mb-4`}>
                    <Text style={tailwind`text-lg text-secondary`}>Sign up</Text>
                </View>
                <Input
                        placeholder='Fullname'
                        placeholderTextColor={"rgba(149, 149, 149, 0.43)"}
                        // errorStyle={{ color: 'red' }}
                        // errorMessage='ENTER A VALID ERROR HERE'
                        // value={email}
                        // onChangeText={text=> setEmail(text)}
                        containerStyle={tailwind``}
                        containerStyle={tailwind`h-14 my-2`}                      
                        inputStyle={tailwind`text-lg text-gray-400`}
                        inputContainerStyle={tailwind`border-0 bg-white px-2 mx-2 rounded shadow-md`}
                    />
                    <Input
                        placeholder='Enter your email'
                        placeholderTextColor={"rgba(149, 149, 149, 0.43)"}
                        // errorStyle={{ color: 'red' }}
                        // errorMessage='ENTER A VALID ERROR HERE'
                        // value={email}
                        // onChangeText={text=> setEmail(text)}
                        containerStyle={tailwind``}
                        containerStyle={tailwind`h-14 my-2`}
                        leftIcon={()=><Foundation name="mail"  style={tailwind`px-2`}size={24} color="#3593C5" />}
                        inputStyle={tailwind`text-lg text-gray-400`}
                        inputContainerStyle={tailwind`border-0 bg-white px-2 mx-2 rounded shadow-md`}
                    />
                    <Input
                        placeholder='Enter your password'
                        placeholderTextColor={"rgba(149, 149, 149, 0.43)"}
                        // errorStyle={{ color: 'red' }}
                        // errorMessage='ENTER A VALID ERROR HERE'
                        // value={email}
                        // onChangeText={text=> setEmail(text)}
                        containerStyle={tailwind`h-14`}
                        rightIcon={()=><TouchableOpacity style={tailwind`px-2`}><AntDesign name="eye" size={24} color="rgba(149, 149, 149, 0.43)"  /></TouchableOpacity>}
                        leftIcon={()=><Fontisto name="locked" style={tailwind`px-2`} size={24} color="#3593C5" />} inputStyle={tailwind`text-lg text-gray-400`}
                        inputContainerStyle={tailwind`border-0 bg-white px-2 mx-2 rounded shadow-md`}
                        secureTextEntry={true}
                    />
              
                    <View style={tailwind`flex items-center my-2 mx-4`}>
                        <Button title="SIGN UP"
                            onPress={()=> {navigation.navigate('Signup')}}
                            titleStyle={tailwind`text-lg font-bold`}
                            buttonStyle={tailwind`bg-primary items-center text-lg`}
                            containerStyle={tailwind`bg-primary items-center w-full rounded-lg`}
                        />
                        <Text style={tailwind`text-base text-secondary my-1 text-center`}>
                            By signing up, you are agreeing to 
                            <Text  style={tailwind`text-base text-primary`}> 
                            User Agreement</Text>  and <Text  style={tailwind`text-base text-primary`}> Privacy Poilicy
                            </Text>
                        </Text>
                </View>
            </View>
        </View>
    )
};

export default SignUpScreen;