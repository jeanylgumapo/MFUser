import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
// import { MaterialIcons,FontAwesome, AntDesign  } from '@expo/vector-icons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import tailwind from 'tailwind-react-native-classnames';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { Input, Button ,CheckBox, Icon } from 'react-native-elements';

const FeedbackScreen = ({navigation}) => {
    const [check1, setCheck1] = useState(false);
    return (
        <View style={tailwind`h-full bg-tertiary`}>
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
                    Car Service Feedback
                </Text>
                {/* <TouchableOpacity style={tailwind`absolute right-0 mx-4`} onPress={() => setModalOpen(true) }><Text style={tailwind`text-white`}>Add</Text></TouchableOpacity> */}
            </LinearGradient>  
            <ScrollView>
                <View>
                    <View style={tailwind`bg-white p-4 mx-4 mb-2 rounded-md`}>
                        <Text style={tailwind`text-black font-bold my-4`}>Was the service performed to your satisfaction?</Text>
                        <View style={tailwind`bg-white shadow-lg  rounded-lg my-1`}>
                        <CheckBox
                            // center
                            title="Yes"
                            containerStyle={tailwind`bg-transparent border-0`}
                            checked={check1}
                            onPress={() => setCheck1(!check1)}
                        />
                        </View>
                        <View style={tailwind`bg-white shadow-lg rounded-lg my-1`}>
                        <CheckBox
                            // center
                            title="Somewhat"
                            containerStyle={tailwind`bg-transparent border-0`}
                            checked={check1}
                            onPress={() => setCheck1(!check1)}
                        />
                        </View>
                        <View style={tailwind`bg-white shadow-lg rounded-lg my-1`}>
                            <CheckBox
                                // center
                                title="No"
                                containerStyle={tailwind`bg-transparent border-0`}
                                checked={check1}
                                onPress={() => setCheck1(!check1)}
                            />
                        </View>
                    </View>
                    <View style={tailwind`bg-white p-4 mx-4 mb-2 rounded-md`}>
                        <Text style={tailwind`text-black font-bold my-4`}>Did they pick up/start the servuce at the promices time slot?</Text>
                        <View style={tailwind`bg-white shadow-lg rounded-lg my-1`}>
                            <CheckBox
                                // center
                                title="Yes"
                                containerStyle={tailwind`bg-transparent border-0`}
                                checked={check1}
                                onPress={() => setCheck1(!check1)}
                            />
                        </View>
                        <View style={tailwind`bg-white shadow-lg rounded-lg my-1`}>
                            <CheckBox
                                // center
                                title="No"
                                containerStyle={tailwind`bg-transparent border-0`}
                                checked={check1}
                                onPress={() => setCheck1(!check1)}
                            />
                        </View>
                    </View>
                    <View style={tailwind`bg-white p-4 mx-4 mb-2 rounded-md`}>
                        <Text style={tailwind`text-black font-bold my-4`}>Were the service hours convenient for you?</Text>
                        <View style={tailwind`bg-white shadow-lg rounded-lg my-1`}>
                        <CheckBox
                            // center
                            title="Yes"
                            containerStyle={tailwind`bg-transparent border-0`}
                            checked={check1}
                            onPress={() => setCheck1(!check1)}
                        />
                        </View>
                        <View style={tailwind`bg-white shadow-lg  rounded-lg my-1`}>
                        <CheckBox
                            // center
                            title="No"
                            containerStyle={tailwind`bg-transparent border-0`}
                            checked={check1}
                            onPress={() => setCheck1(!check1)}
                        />
                        </View>
                    </View>
                    <View style={tailwind`bg-white p-4 mx-4 mb-2 rounded-md`}>
                        <Text style={tailwind`text-black font-bold my-4`}>Was it easy to get an appointment?</Text>
                        <View style={tailwind`bg-white shadow-lg rounded-lg my-1`}>
                        <CheckBox
                            // center
                            title="Yes"
                            containerStyle={tailwind`bg-transparent border-0`}
                            checked={check1}
                            onPress={() => setCheck1(!check1)}
                        />
                        </View>
                        <View style={tailwind`bg-white shadow-lg  rounded-lg my-1`}>
                            <CheckBox
                                // center
                                title="No"
                                containerStyle={tailwind`bg-transparent border-0`}
                                checked={check1}
                                onPress={() => setCheck1(!check1)}
                            />
                        </View>
                    </View>
                    <View style={tailwind`bg-white p-4 mx-4 mb-2 rounded-md`}>
                        <Text style={tailwind`text-black font-bold my-4`}>Give a rating for this application</Text>
                        <View style={tailwind`flex-row items-center justify-center`}>
                        <Entypo name="star" size={36} color="orange" />
                        <Entypo name="star" size={36} color="orange" />
                        <Entypo name="star" size={36} color="orange" />
                        <Entypo name="star" size={36} color="gray" />
                        <Entypo name="star" size={36} color="gray" />
                    </View>
                </View> 
                <View style={tailwind`justify-center bottom-0 flex w-full items-center my-4`}>
                    <Button title="Submit"
                        onPress={()=> {navigation.navigate('BottomTabStack')}}
                        titleStyle={tailwind`text-lg font-bold`}
                        buttonStyle={tailwind`bg-primary items-center text-lg`}
                        containerStyle={tailwind`bg-primary items-center w-3/4 rounded-lg`}
                    />
                    </View>                                  
                </View>                 
            </ScrollView>          
        </View>
    )
};

export default FeedbackScreen;