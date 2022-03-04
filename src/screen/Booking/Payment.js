import React,{useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image, Modal} from 'react-native';
import 'react-native-gesture-handler';
// import { MaterialIcons,FontAwesome, AntDesign,MaterialCommunityIcons   } from '@expo/vector-icons';
import tailwind from 'tailwind-react-native-classnames';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Input } from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Pay Via Cash',
    icon:<MaterialCommunityIcons style={tailwind`absolute right-0 m-2`} name="cash" size={32} color="#8DD193" />,
    value: '0'
}, {
    id: '2',
    label: 'Pay Via Gcash',
    icon:<Image style={tailwind` h-8 w-10 m-2 absolute right-0 `} source ={require('../../../assets/gcash.png')}/>,
    value: '1'
}, {
    id: '3',
    label: 'Pay Via Debit/Credit',
    icon:<MaterialIcons style={tailwind`absolute right-0 m-2`} name="payment" size={32} color="#18A8C9" />,
    value: '2'
}
]
const PaymentScreen = ({navigation}) => {
    const [modalOpen, setModalOpen]=useState(false);
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
        console.log(radioButtons);
    }
    const [check2, setCheck2] = useState(false);
    const [check, setCheck] = useState(false);
    return (
        <View>
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
                    Payment
                </Text>
                {/* <TouchableOpacity style={tailwind`absolute right-0 mx-4`} onPress={() => setModalOpen(true) }><Text style={tailwind`text-white`}>Add</Text></TouchableOpacity> */}
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
                    <Text style={tailwind`text-black text-2xl m-2`}>Booking</Text>
                    <Text style={tailwind`text-center text-secondary text-base m-4`}>The booking has been confirmed, contact with the Mechanic for more info.</Text>
                    <Button title="Track Booking"
                            onPress={()=> navigation.navigate("Track")}
                            titleStyle={tailwind`text-lg font-bold`}
                            buttonStyle={tailwind`bg-primary items-center text-lg`}
                            containerStyle={tailwind`bg-primary items-center w-3/4 rounded-lg`}
                        />
                </View>
            </Modal>
            <ScrollView>
                <View >
                    <View style={tailwind`flex-col m-4 bg-white p-4 rounded-xl`}>
                        <View style={tailwind`m-2`}>
                            <Text style={tailwind`text-base text-secondary`}> Total Amount</Text>
                            <Text style={tailwind`absolute right-0 text-black `}> Php 2,499.00</Text>
                        </View>
                        <View style={tailwind`m-2`}>
                            <Text style={tailwind`text-base text-secondary`}> Service Fee</Text>
                            <Text style={tailwind`absolute right-0 text-black`}> Php 501.00</Text>
                        </View>
                        <View style={tailwind`m-2`}>
                            <Text style={tailwind`text-base text-secondary`}> Service Amount</Text>
                            <Text style={tailwind`absolute right-0 text-primary font-bold`}> Php 501.00</Text>
                        </View>
                        <View style={tailwind`m-2`}>
                            <Text style={tailwind`text-base text-secondary mb-1`}>Promo</Text>
                            <Input
                            placeholder='Coupon Code'
                            placeholderTextColor={"rgba(149, 149, 149, 0.43)"}
                            // errorStyle={{ color: 'red' }}
                            // errorMessage='ENTER A VALID ERROR HERE'
                            // value={email}
                            // onChangeText={text=> setEmail(text)}
                            containerStyle={tailwind`h-14 border-2 border-dashed  bg-coupon border-primary `}
                            rightIcon={()=><TouchableOpacity style={tailwind`px-4 bg-primary py-2 rounded-2xl`}><Text style={tailwind`text-white text-base font-bold`}>Apply</Text></TouchableOpacity>}
                            inputContainerStyle={tailwind`border-0  bg-transparent  `}
                        />
                        </View>
                        <View style={tailwind`m-2`}>
                            <Text style={tailwind`text-base text-secondary`}> Amount</Text>
                            <Text style={tailwind`absolute font-bold right-0 text-primary`}>Php 3,000.00</Text>
                        </View>
                    </View>
                    <View style={tailwind`flex-col m-4 bg-white p-4 rounded-xl`}>
                        <Text style={tailwind`text-lg text-black font-bold my-2`}>Pay</Text>
                        <RadioGroup 
                            radioButtons={radioButtons} 
                            onPress={onPressRadioButton} 
                            containerStyle={tailwind`items-start`}
                            
                            icon={radioButtons}
                        // layout='row'                                              
                        />
                        {/* {
                            radioButtonsData.map((data, index)=>{
                                return(
                                    <View style={tailwind`m-2 `}>
                                        <View style={tailwind`flex-col items-center`}>
                                            <TouchableOpacity style={tailwind`absolute left-0`} onPress={()=>{setCheck(true)}} key={index}>
                                                <MaterialIcons name="radio-button-unchecked" size={24} color="black" />                                           
                                            </TouchableOpacity>
                                            <Text style={tailwind`mx-8`}>{data.label}</Text>
                                            {data.icon}  
                                        </View>
                                    </View>
                                )
                            })
                        } */}
                    </View>
                </View>
                <View style={tailwind`justify-center bottom-0 flex w-full items-center mb-10`}>
                    <Button title="Continue"
                        onPress={()=>setModalOpen(true)}
                        titleStyle={tailwind`text-lg font-bold`}
                        buttonStyle={tailwind`bg-primary items-center text-lg`}
                        containerStyle={tailwind`bg-primary items-center w-3/4 rounded-lg`}
                    />
                </View>
            </ScrollView> 
        </View>
    )
};

export default PaymentScreen;