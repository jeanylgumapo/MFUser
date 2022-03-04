import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import { Ionicons,MaterialIcons,MaterialCommunityIcons,Entypo,FontAwesome5 } from '@expo/vector-icons';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const TrackScreen = () => {
    return (
        <View style={tailwind`bg-tertiary h-full flex`}>
            <ScrollView>
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
                        Track Booking
                    </Text>
                    {/* <TouchableOpacity style={tailwind`absolute right-0 mx-4`} onPress={() => setModalOpen(true) }><Text style={tailwind`text-white`}>Add</Text></TouchableOpacity> */}
                </LinearGradient>
                <Image style={tailwind` h-50 `} source ={require('../../../assets/map.jpg')}/>
                <View style={tailwind`m-4 mnt-50 p-2`}>
                    <View style={tailwind`bg-white rounded-xl py-4`}>
                        <View style={tailwind`flex-row p-4 justify-center items-center`}>
                            <View><FontAwesome5 style={tailwind`bg-white p-4 rounded-full border-4 border-green-400`} name="user-alt" size={56} color="#DAD7E0" /></View>
                            <View style={tailwind`px-2`}>
                                <View style={tailwind`flex-row`}>
                                    <Text style={tailwind`text-black text-lg`}>Eddie Gendraule</Text>
                                    <Ionicons name="shield-checkmark-sharp"  size={24} color="#3593C5" />
                                </View>
                                <Text style={tailwind`text-primary text-base`}>Mechanic, 41</Text>
                                <Text style={tailwind`text-secondary text-sm`}>Davao City, Philippines</Text>
                                <View style={tailwind`flex-row`}>
                                    <MaterialIcons name="star-rate" size={24} color="orange" />
                                    <MaterialIcons name="star-rate" size={24} color="orange" />
                                    <MaterialIcons name="star-rate" size={24} color="orange" />
                                    <MaterialCommunityIcons name="star-half-full" size={24} color="orange" />
                                    <Entypo name="star-outlined" size={24} color="orange" />                                
                                </View>
                            </View>
                        </View>
                        <Input
                            placeholder='Chat with your mechanic'
                            placeholderTextColor={"rgba(149, 149, 149, 0.43)"}
                            // errorStyle={{ color: 'red' }}
                            // errorMessage='ENTER A VALID ERROR HERE'
                            // value={email}
                            // onChangeText={text=> setEmail(text)}
                            containerStyle={tailwind`h-14`}
                            rightIcon={()=><TouchableOpacity style={tailwind`p-1 bg-primary rounded-lg`}><Ionicons name="ios-chatbox-outline" size={24} color="white" /></TouchableOpacity>}                
                            inputContainerStyle={tailwind`border-0 bg-tertiary px-2 mx-2 rounded shadow-md`}
                        />
                    </View>
                    <View style={tailwind`bg-white rounded-xl my-2 p-4`}>
                        <Text style={tailwind`text-black text-xl`}>
                            Work in Progress
                        </Text>
                        <View>
                            <Text>Step Progress</Text>
                        </View>
                        <View style={tailwind`bg-tertiary justify-center items-center p-4 rounded-lg m-2`}>
                            <Text style={tailwind`text-secondary text-base`}>Estimated Completion</Text>
                            <Text style={tailwind`text-base text-black font-bold`}>1:39PM- 2:39 PM</Text>
                        </View>
                    </View>
                    <View style={tailwind`bg-white rounded-xl p-4 my-1`}>
                        <View style={tailwind`p-2`}>
                            <Text style={tailwind`text-black text-base`}>Car Diagnostic</Text>     
                            <Text style={tailwind`absolute right-0 p-2 text-base text-secondary`}>JO. # 1101-12</Text>  
                        </View>
                        <View style={tailwind`p-2`}>
                            <Text style={tailwind`text-black text-base`}>Total Amount</Text>     
                            <Text style={tailwind`absolute right-0 p-2 text-base text-secondary`}>Php 2,500.00</Text>  
                        </View>   
                        <View style={tailwind`justify-center bottom-0 flex w-full items-center`}>
                            <Button title="View Order Summary"
                                // onPress={()=> navigation.navigate("Summary")}
                                titleStyle={tailwind`text-lg font-bold`}
                                buttonStyle={tailwind`bg-primary items-center text-lg`}
                                containerStyle={tailwind`bg-primary items-center w-3/4 rounded-lg`}
                            />
                        </View>                       
                    </View>
                </View>
            </ScrollView>
            
        </View>
    )
};

export default TrackScreen;