import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import {  Button } from 'react-native-elements';

const InvoiceScreen = () => {
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
                <View style={tailwind`border-b-2 border-gray-100 py-8 px-4`}>
                    <View>
                        <Text>02-09-2021</Text>
                        <Text style={tailwind`text-primary`}>Invoice</Text>
                    </View>
                    <View style={tailwind`absolute right-0 p-4`}>
                        <Text>02-09-2021</Text>
                        <Text style={tailwind`text-primary`}>Due</Text>
                    </View>
                </View>
                <View style={tailwind`border-b-2 border-gray-100 px-4 py-8`}>
                    <View>
                        <Text style={tailwind`text-primary`}>Billing</Text>
                        <Text>House # 21, San Antonio Village,  </Text>
                    </View>
                </View>
            </View>
            <View style={tailwind`p-4 bg-tertiary`}>
                <Text style={tailwind`text-primary`}>Item</Text>
                <Text style={tailwind`absolute right-0 p-4 text-primary`}>Amount</Text>
            </View>
            <View>
                <View style={tailwind`bg-white`}>
                    <View style={tailwind`p-4 border-b-2 border-gray-100 py-8`}>
                        <Text>Car Diagnostic</Text>
                        <Text style={tailwind`absolute right-0 p-4`}>Php 2,500.00</Text>
                    </View>
                </View>
                
            </View>
            <View style={tailwind`justify-center  bottom-0 flex w-full items-center py-8`}>
                    <Button title="Continue"
                        onPress={()=> navigation.navigate("Payment")}
                        titleStyle={tailwind`text-lg font-bold`}
                        buttonStyle={tailwind`bg-primary items-center text-lg`}
                        containerStyle={tailwind`bg-primary items-center w-3/4 rounded-lg`}
                    />
                </View>
        </View>
    )
};

export default InvoiceScreen;