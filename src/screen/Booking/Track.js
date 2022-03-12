import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView, Modal} from 'react-native';
import 'react-native-gesture-handler';
// import { Ionicons,MaterialIcons,MaterialCommunityIcons,Entypo,FontAwesome5 } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
// import { Countdown} from 'react-native-element-timer';
import CountDown from 'react-native-countdown-component';
// import StepIndicator from 'react-native-step-indicator/lib/typescript/src/types';
import ProgressSteps, { Title, Content } from '@joaosousa/react-native-progress-steps';

// const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
// const customStyles = {
//   stepIndicatorSize: 25,
//   currentStepIndicatorSize:30,
//   separatorStrokeWidth: 2,
//   currentStepStrokeWidth: 3,
//   stepStrokeCurrentColor: '#fe7013',
//   stepStrokeWidth: 3,
//   stepStrokeFinishedColor: '#fe7013',
//   stepStrokeUnFinishedColor: '#aaaaaa',
//   separatorFinishedColor: '#fe7013',
//   separatorUnFinishedColor: '#aaaaaa',
//   stepIndicatorFinishedColor: '#fe7013',
//   stepIndicatorUnFinishedColor: '#ffffff',
//   stepIndicatorCurrentColor: '#ffffff',
//   stepIndicatorLabelFontSize: 13,
//   currentStepIndicatorLabelFontSize: 13,
//   stepIndicatorLabelCurrentColor: '#fe7013',
//   stepIndicatorLabelFinishedColor: '#ffffff',
//   stepIndicatorLabelUnFinishedColor: '#aaaaaa',
//   labelColor: '#999999',
//   labelSize: 13,
//   currentStepLabelColor: '#fe7013'
// }
const TrackScreen = ({navigation}) => {
    // const [currentPosition, setCurrentPosition]=useState(0);
    const [step, setStep] = useState(0);
    const [modalOpen, setModalOpen]=useState(false);
    // const countdownRef = useRef(null);
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
                </LinearGradient>
                <Modal visible={modalOpen}>
                    {/* <View style={tailwind`bg-primary p-4 flex-row`}>
                        <TouchableOpacity onPress={() => setModalOpen(false) } >
                            <EvilIcons name="close" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={tailwind`text-white font-bold text-base mx-2`}> Add New Vehicle</Text>                       
                    </View> */}
                    <View style={tailwind`justify-center items-center flex flex-1`}>
                        <Image style={tailwind` h-50 m-40 m-2 `} source ={require('../../../assets/track-icon.png')}/>
                        <Text style={tailwind`text-black text-2xl m-2`}>Job Done</Text>
                        <Text style={tailwind`text-center text-secondary text-base m-4`}>J done, please click confirmed to proceed for your invoice</Text>
                        <Button title="Track Booking"
                                // onPress={()=> navigation.navigate("Confirmed")}
                                titleStyle={tailwind`text-lg font-bold`}
                                buttonStyle={tailwind`bg-primary items-center text-lg`}
                                containerStyle={tailwind`bg-primary items-center w-3/4 rounded-lg`}
                            />
                    </View>
                </Modal>
                <Image style={tailwind` h-50 `} source ={require('../../../assets/map.jpg')}/>
                <View style={tailwind`m-4 mnt-50 p-2`}>
                    <View style={tailwind`bg-white rounded-xl py-4`}>
                        <View style={tailwind`flex-row p-4 justify-center items-center`}>
                            <View><FontAwesome style={tailwind`bg-white border-green-400`} name="user-circle" size={64} color="#DAD7E0" /></View>
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
                            rightIcon={()=><TouchableOpacity style={tailwind`p-1 bg-primary rounded-lg`} onPress={()=> navigation.navigate('Chat')}><AntDesign name="message1" size={24} color="white" /></TouchableOpacity>}                
                            inputContainerStyle={tailwind`border-0 bg-tertiary px-2 mx-2 rounded shadow-md`}
                        />
                    </View>
                    <View style={tailwind`bg-white rounded-xl my-2 p-4`}>
                        <Text style={tailwind`text-black text-xl`}>
                            Work in Progress
                        </Text>
                        <View style={tailwind`p-4`}>
                            {/* <StepIndicator
                                customStyles={customStyles}
                                currentPosition={currentPosition}
                                labels={labels}
                            /> */}
                        
                        <ProgressSteps
                            currentStep={step}
                            steps={[
                                {
                                id: /* Your id */"1",
                                title: <Title>{/* Your title */}Booking Confirmed</Title>,
                                content: <Content>{/* Your content */}</Content>,
                                },
                                {
                                id: /* Your id */"2",
                                title: <Title>{/* Your title */} Preparing Items</Title>,
                                content: <Content>{/* Your content */}</Content>,
                                },
                                {
                                id: /* Your id */"3",
                                title: <Title>{/* Your title */} Arrived at the Location</Title>,
                                content: <Content>{/* Your content */}</Content>,
                                },  
                                {
                                id: /* Your id */"4",
                                title: <Title>{/* Your title */} Begin Job Progress</Title>,
                                content: <Content>{/* Your content */}</Content>,
                                },                             
                            ]}
                            colors={{
                                title: {
                                text: {
                                    normal: '#6FACC7',
                                    active: '#3376B2',
                                    completed: '#3376B2',
                                },
                                },
                                marker: {
                                text: {
                                    normal: '#6FACC7',
                                    active: '#3376B2',
                                    completed: '#f4f3ee',
                                },
                                line: {
                                    normal: '#6FACC7',
                                    active: '#3376B2',
                                    completed: '#3376B2',
                                },
                                },
                            }}
                            />
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
                <CountDown
                    until={5}
                    // style={tailwind`h-0`}
                    // visible={false}
                    onFinish={() => navigation.navigate('Invoice')}
                    // onPress={() => alert('hello')}
                    size={0}
                />
            </ScrollView>
            
        </View>
    )
};

export default TrackScreen;