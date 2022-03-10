import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
// import { MaterialIcons,FontAwesome, AntDesign  } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import tailwind from 'tailwind-react-native-classnames';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { Input, Button } from 'react-native-elements';
const ChatScreen = ({navigation}) => {
    return (
        <View style={tailwind`bg-tertiary h-full`}>
            <View style={tailwind`bg-tertiary`}>
                <LinearGradient 
                        style={tailwind`py-4 rounded-bl-xl rounded-br-xl py-8`} 
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 0}} 
                        colors={["#318FC1", "#056395"]}>
                            <TouchableOpacity style={tailwind`absolute left-0 mx-4 flex-row py-4`} 
                                onPress={()=>navigation.goBack()}
                                >
                                <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                                <Text style={tailwind`text-white`}>Back</Text>
                            </TouchableOpacity>
                        <Text style={tailwind`text-white text-center font-bold text-xl`}>
                            Asmara
                        </Text>
                        <Text style={tailwind`text-center text-white text-sm`}>#32473943</Text>
                        <Text style={tailwind`text-center text-white text-sm`}>06 Jun, 2021</Text>                                                                       
                    </LinearGradient>
                    <View>
                        <ScrollView>
                            <View>
                                <Text style={tailwind`text-center p-4 text-xl text-secondary`}>Monday</Text>
                                <View style={tailwind`flex-row items-center`}>
                                    <Text><EvilIcons name="user" size={56} color="gray" /></Text>
                                    <View style={tailwind`bg-white p-4 rounded-2xl  flex-nowrap w-3/4 m-2`}>
                                        <Text style={tailwind` text-sm text-gray-600`}>Lorem ipsum dolor. Lorem ipsum dolor.Lorem ipsum dolor. Lorem ipsum dolorLorem ipsum dolor. Lorem ipsum dolorLorem ipsum dolor. Lorem ipsum dolor</Text>
                                    </View>
                                </View>
                                <Text style={tailwind`text-right mx-4`}>9:41 AM</Text>
                            </View>
                            <View>

                                <View style={tailwind`flex-row items-center`}>
                                    <LinearGradient 
                                        style={tailwind`p-4 rounded-2xl shadow-md flex-nowrap w-3/4 m-2`}
                                        start={{x: 0, y: 0}} 
                                        end={{x: 1, y: 0}} 
                                        colors={["#318FC1", "#056395"]}>
                                          <Text style={tailwind` text-sm text-gray-600 text-white`}>Lorem ipsum dolor. Lorem ipsum dolor.Lorem ipsum dolor. Lorem ipsum dolorLorem ipsum dolor. Lorem ipsum dolorLorem ipsum dolor. Lorem ipsum dolor</Text>                                                                    
                                    </LinearGradient>
                                    <Text><EvilIcons name="user" size={56} color="gray" /></Text>
                                </View>
                                <Text style={tailwind`text-left mx-4`}>9:41 AM</Text>
                                <View style={tailwind`flex-row items-center`}>
                                    <LinearGradient 
                                        style={tailwind`px-2 rounded-2xl shadow-md flex-nowrap m-2`}
                                        start={{x: 0, y: 0}} 
                                        end={{x: 1, y: 0}} 
                                        colors={["#318FC1", "#056395"]}>
                                          <Entypo name="dots-three-horizontal" size={32} color="white" />
                                    </LinearGradient>
                                </View>
                                {/* <Text style={tailwind`text-left mx-4`}>Typing...</Text> */}
                            </View>
                            </ScrollView>
                        </View>

                    <View>

            </View>
            </View>
           <View style={tailwind`flex-row absolute bottom-0 items-center justify-center shadow-md p-2`}>
                <Input
                    placeholder='Type your message'
                    placeholderTextColor={"rgba(149, 149, 149, 0.43)"}
                   containerStyle={tailwind`w-3/4`}
                    inputContainerStyle={tailwind`border-0 bg-white px-4   `}
                />
                <TouchableOpacity style={tailwind`p-1`} ><FontAwesome5 name="smile" size={24} color="gray" /></TouchableOpacity>
                <TouchableOpacity style={tailwind`p-1`} ><Entypo name="images" size={24} color="gray" /></TouchableOpacity>
           </View>
        </View>
    )
};

export default ChatScreen;