import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button } from 'react-native-elements';
// import { AntDesign,Foundation,Fontisto,FontAwesome5  } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

const LoginScreen = ({navigation}) => {
    return (        
        <View style={tailwind`flex justify-center bg-white h-full`}>
            <View style={tailwind`mx-4`}>
            <View style={tailwind`items-center`}>
                <Image style={tailwind`w-52`} source ={require('../../../assets/mflogo.png')}/> 
                </View>
                <View style={tailwind`items-center mt-10 mb-4`}>
                    <Text style={tailwind`text-lg text-secondary`}>Sign in to your account</Text>
                </View>
                    <Input
                        placeholder='Enter your email'
                        placeholderTextColor={"rgba(149, 149, 149, 0.43)"}
                        // errorStyle={{ color: 'red' }}
                        // errorMessage='ENTER A VALID ERROR HERE'
                        // value={email}
                        // onChangeText={text=> setEmail(text)}
                        // containerStyle={tailwind``}
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
                        rightIcon={()=><TouchableOpacity style={tailwind`px-2`}><FontAwesome5 name="eye" size={30} color="#3593C5" /></TouchableOpacity>}
                        leftIcon={()=><Fontisto  name="locked" style={tailwind`px-2`} size={24} color="#3593C5" />} inputStyle={tailwind`text-lg text-gray-400`}
                        inputContainerStyle={tailwind`border-0 bg-white px-2 mx-2 rounded shadow-md`}
                        secureTextEntry={true}
                    />
                    <View style={tailwind`items-end px-2`}>
                        <TouchableOpacity >
                            <Text style={tailwind`text-primary text-base mx-2`}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tailwind`flex items-center my-2 mx-4`}>
                        <Button title="SIGN IN"
                            onPress={()=> {navigation.navigate('BottomTabStack')}}
                            titleStyle={tailwind`text-lg font-bold`}
                            buttonStyle={tailwind`bg-primary items-center text-lg`}
                            containerStyle={tailwind`bg-primary items-center w-full rounded-lg`}
                        />
                        <Text style={tailwind`text-base text-secondary my-8`}>Or sign in with social account</Text>
                        <View style={tailwind`flex-row`}>                            
                        <TouchableOpacity >
                            <LinearGradient 
                                style={tailwind`p-2 rounded-lg mx-2 flex-row items-center justify-center w-32 `} 
                                start={{x: 0, y: 0}} 
                                end={{x: 1, y: 0}} 
                                colors={["#0066FE", "#3B9DE1"]}>
                                    <Entypo name="facebook" size={24} color="white" />
                                    <Text style={tailwind`text-white mx-2`}>Facebook</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <LinearGradient 
                                style={tailwind`p-2 rounded-lg mx-2 flex-row items-center justify-center w-32`} 
                                start={{x: 0, y: 0}} 
                                end={{x: 1, y: 0}} 
                                colors={["#FE3D54", "#D83685"]}>
                                <AntDesign name="google" size={24} color="white" />
                                <Text style={tailwind`text-white mx-2`}>Google</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={tailwind`flex-row bottom-0 mt-4`}>
                        <Text style={tailwind`text-secondary text-sm`}>Don't have an account?</Text><TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}><Text style={tailwind`text-primary text-sm mx-1`}>Sign Up</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default LoginScreen;