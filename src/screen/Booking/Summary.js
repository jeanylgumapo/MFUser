import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import { MaterialIcons,FontAwesome, AntDesign  } from '@expo/vector-icons';
import tailwind from 'tailwind-react-native-classnames';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Input } from 'react-native-elements';

const SummaryScreen = ({navigation}) => {
    return (
        <View style={tailwind`bg-tertiary h-full flex`}>
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
                    Booking Summary
                </Text>
                {/* <TouchableOpacity style={tailwind`absolute right-0 mx-4`} onPress={() => setModalOpen(true) }><Text style={tailwind`text-white`}>Add</Text></TouchableOpacity> */}
            </LinearGradient>   
            <ScrollView>
                <View style={tailwind`m-4`}>
                    <View style={tailwind`my-4`}>
                        <Text style={tailwind`text-primary font-bold text-lg`}>Change Oil</Text>
                        <Text style={tailwind`text-primary font-bold text-lg absolute right-0`}>Php 3,000.00</Text>
                    </View>
                    <View style={tailwind`bg-white rounded-2xl border-t-primary border-t-2 p-4 m-2`}>
                        <View style={tailwind`p-2`}>
                            <Text style={tailwind`text-sm text-secondary`}>Car Make</Text>
                            <Text style={tailwind`absolute text-sm text-black right-0 m-2`}>Toyota</Text>
                        </View>
                        <View style={tailwind`p-2`}>
                            <Text style={tailwind`text-sm text-secondary`}>Car Model</Text>
                            <Text style={tailwind`absolute text-sm text-black right-0 m-2`}>Toyota</Text>
                        </View>
                        <View style={tailwind`p-2`}>
                            <Text style={tailwind`text-sm text-secondary`}>Year</Text>
                            <Text style={tailwind`absolute text-sm text-black right-0 m-2`}>Toyota</Text>
                        </View>
                        <View style={tailwind`p-2`}>
                            <Text style={tailwind`text-sm text-secondary`}>Transmission</Text>
                            <Text style={tailwind`absolute text-sm text-black right-0 m-2`}>Toyota</Text>
                        </View >
                        <View style={tailwind`p-2`}>
                            <Text style={tailwind`text-sm text-secondary`}>Fuel</Text>
                            <Text style={tailwind`absolute text-sm text-black right-0 m-2`}>Toyota</Text>
                        </View>
                        <View style={tailwind`p-2`}>
                            <Text style={tailwind`text-sm text-secondary`}>Odometer</Text>
                            <Text style={tailwind`absolute text-sm text-black right-0 m-2`}>Toyota</Text>
                        </View>
                        <View style={tailwind` items-center`}>
                            <Button title="Edit"
                                titleStyle={tailwind`text-lg font-bold`}
                                buttonStyle={tailwind`bg-primary items-center text-lg`}
                                containerStyle={tailwind`bg-primary items-center w-40 rounded-lg`}
                            />
                        </View>
                    </View>
                    <View style={tailwind`bg-white rounded-2xl border-t-primary border-t-2 p-4 m-2`}>
                        <View style={tailwind`p-2`}>
                            <Text style={tailwind`text-sm text-secondary`}>Address</Text>
                            <Text style={tailwind`text-sm text-black`}>House #21, San Antonio Village, Davao City</Text>
                        </View>
                        <View style={tailwind`p-2`}>
                            <Text style={tailwind`text-sm text-secondary`}>Date</Text>
                            <Text style={tailwind`text-sm text-black`}>2/18/2022</Text>
                        </View>
                        <View style={tailwind`p-2`}>
                            <Text style={tailwind`text-sm text-secondary`}>Time</Text>
                            <Text style={tailwind`text-sm text-black`}>6:37 AM</Text>
                        </View>
                        <View style={tailwind` items-center`}>
                            <Button title="Edit"
                                titleStyle={tailwind`text-lg font-bold`}
                                buttonStyle={tailwind`bg-primary items-center text-lg`}
                                containerStyle={tailwind`bg-primary items-center w-40 rounded-lg`}
                            />
                        </View>
                    </View>
                </View>
                <View style={tailwind`justify-center  bottom-0 flex w-full items-center mb-10`}>
                    <Button title="Continue"
                        onPress={()=> navigation.navigate("Payment")}
                        titleStyle={tailwind`text-lg font-bold`}
                        buttonStyle={tailwind`bg-primary items-center text-lg`}
                        containerStyle={tailwind`bg-primary items-center w-3/4 rounded-lg`}
                    />
                </View>
            </ScrollView> 
        </View>
    )
};

export default SummaryScreen;