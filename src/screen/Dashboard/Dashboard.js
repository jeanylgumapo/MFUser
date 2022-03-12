import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import { FontAwesome,Octicons,FontAwesome5    } from '@expo/vector-icons';
import Header from '../../components/Header';


const DashboardScreen = ({navigation}) => {
    return (
        <View>
            <ScrollView>
            <Header/>
            <View style={tailwind`flex h-full bg-tertiary`}>
               
                    <View style={tailwind`p-4`}>
                    <Image style={tailwind`w-full rounded-xl h-48 `} source ={require('../../../assets/banner.png')}/>
                    </View>
                    <View style={tailwind`mx-4 my-2`}>
                        <View style={tailwind`flex-row items-center`}>
                            <FontAwesome name="wrench" size={24} color="#3391C3" />
                            <Text style={tailwind`font-bold text-lg mx-2 text-black`}>Select Service</Text>
                        </View>
                        <View style={tailwind`flex-row my-2 justify-center`}>
                            <TouchableOpacity style={tailwind`border-2 bg-white justify-center items-center py-4 px-4 rounded-xl m-1 border-gray-100`} onPress={()=> {navigation.navigate('ServiceInfo')}}>
                                <Image style={tailwind`w-12 h-12 `} source ={require('../../../assets/diagnostic.png')}/>
                                <Text style={tailwind`text-xs xl:text-base md:text-xl mt-2`}>Diagnostic</Text>
                            </TouchableOpacity>
                            <View style={tailwind`border-2 justify-center bg-white items-center py-4 px-4 rounded-xl m-1 border-gray-100`}>
                                <Image style={tailwind`w-12 h-12 `} source ={require('../../../assets/change-oil.png')}/>
                                <Text style={tailwind`text-xs mt-2`}>Change Oil</Text>
                            </View>
                            <View style={tailwind`border-2 justify-center bg-white items-center py-4 px-4 rounded-xl m-1 border-gray-100`}>
                                <Image style={tailwind`w-12 h-12 `} source ={require('../../../assets/change-oil.png')}/>
                                <Text style={tailwind`text-xs mt-2`}>Change Oil</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                    <Image style={tailwind`w-full h-20 `} source ={require('../../../assets/ads.jpg')}/>
                    </View>
                    <View style={tailwind`mx-4 my-4`}>
                        <View style={tailwind`flex-row items-center my-2`}>
                            <Octicons name="flame" size={24} color="#3391C3" />
                            <Text style={tailwind`font-bold text-lg mx-2 text-black`}>Other Services</Text>
                        </View>
                        <View style={tailwind`flex-row mx-2 justify-center`}>
                            <View style={tailwind`p-4  border-2 border-gray-100 rounded-xl bg-white`}>
                                <Image style={tailwind`w-32 h-20 rounded-xl `} source ={require('../../../assets/replace.jpg')}/>
                                <Text style={tailwind`text-secondary text-sm`}>Replace Battery</Text>
                                <Text style={tailwind`text-xs text-secondary`}>Replace car battery with</Text>
                                <View style={tailwind`m-1`}>
                                    <Text style={tailwind`text-primary text-xs font-bold`}>Php 4,600.00</Text>
                                    <TouchableOpacity style={tailwind`absolute right-0 bg-primary rounded p-1`}><Text style={tailwind`text-white text-xs px-1`}>Book</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={tailwind`p-4  border-2 border-gray-100 rounded-xl bg-white`}>
                                <Image style={tailwind`w-32 h-20 rounded-xl `} source ={require('../../../assets/replace.jpg')}/>
                                <Text style={tailwind`text-secondary text-sm`}>Replace Battery</Text>
                                <Text style={tailwind`text-xs text-secondary`}>Replace car battery with</Text>
                                <View style={tailwind`m-1`}>
                                    <Text style={tailwind`text-primary text-xs font-bold`}>Php 4,600.00</Text>
                                    <TouchableOpacity style={tailwind`absolute right-0 bg-primary rounded p-1`}><Text style={tailwind`text-white text-xs px-1`}>Book</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={tailwind`mx-4 mt-4`}>
                        <View style={tailwind`flex-row items-center my-2`}>
                            <FontAwesome5 name="blogger-b" size={24} color="#3391C3" />
                            <Text style={tailwind`font-bold text-lg mx-2 text-black`}>Blog Posts</Text>
                        </View>
                        <View style={tailwind`w-full mx-2 bg-white`}>
                            <View style={tailwind`p-4  border-2 border-gray-100 rounded-xl`}>
                                <Image style={tailwind`w-full h-24 rounded-xl `} source ={require('../../../assets/blog.jpg')}/>
                                <View style={tailwind`m-1`}>
                                    <Text style={tailwind`text-black text-sm font-bold`}>Car</Text>
                                    <Text style={tailwind`text-secondary text-sm absolute right-0`}>11-22-21</Text>
                                </View>
                                <Text style={tailwind`text-xs text-secondary text-justify`}>Broken down? Car not starting? Do you have warning lights on your dash? Is your car making a funny
                                no  <Text style={tailwind`text-primary`}>See More >></Text></Text>
                            </View>
                        </View>
                    </View>
            </View>
            </ScrollView>
        </View>
    )
};

export default DashboardScreen;