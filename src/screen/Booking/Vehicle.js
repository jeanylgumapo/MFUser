import React, { useState } from 'react';
import {Text, View, Image, Touchable, TouchableOpacity, Modal} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import SubHeader from '../../components/SubHeader';
import LinearGradient from 'react-native-linear-gradient';
import { MaterialIcons,EvilIcons } from '@expo/vector-icons';
import AddGarage from '../../components/AddGarage';
import { Button } from 'react-native-elements';


const VehicleScreen = ({navigation}) => {
    const onPress=()=> console.log('onpress');
    const [label, setLabel]=useState("My Garage");
    const [modalOpen, setModalOpen]=useState(false);
    // const subheader=SubHeader(label);
    return (
        <View style={tailwind`bg-tertiary h-full flex`}>
            {/* ----temporary---- */}
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
                    Select Vehicle
                </Text>
                <TouchableOpacity style={tailwind`absolute right-0 mx-4`} onPress={() => setModalOpen(true) }><Text style={tailwind`text-white`}>Add</Text></TouchableOpacity>
            </LinearGradient>
            {/* ---end----- */}
            <Modal visible={modalOpen}>
                <View style={tailwind`bg-primary p-4 flex-row`}>
                    <TouchableOpacity onPress={() => setModalOpen(false) } >
                        <EvilIcons name="close" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={tailwind`text-white font-bold text-base mx-2`}> Add New Vehicle</Text>                       
                </View>
                <AddGarage/>
            </Modal>
            <View style={tailwind`bg-white flex-row items-center justify-center border-2 border-green-400 mx-4 my-4 shadow-lg rounded-xl`}>
                <Image style={tailwind`w-24 h-14 mr-4 items-start `} source ={require('../../../assets/car.png')}/>
                <View style={tailwind`flex-col`}>
                    <View style={tailwind`items-start p-2`}>
                    <Text style={tailwind`font-bold text-black text-lg`}>Toyota Fortuner 2017</Text>
                    <Text style={tailwind`text-sm text-secondary`}>Vehicle ID <Text style={tailwind`text-primary`}># 1013-221</Text></Text>
                    <Text style={tailwind`text-xs`}>Last Serviced June 2021</Text>               
                </View>
                <View style={tailwind`flex-row justify-center items-center py-2`}>
                    <Text style={tailwind`btn-bg-active px-20 py-2 text-white text-base font-bold`}>Select</Text>
                </View>
                </View>
            </View>
            <View style={tailwind`bg-white flex-row items-center justify-center mx-4 my-4 shadow-lg rounded-xl`}>
                <Image style={tailwind`w-24 h-14 mr-4 items-start `} source ={require('../../../assets/car.png')}/>
                <View style={tailwind`flex-col`}>
                    <View style={tailwind`items-start p-2`}>
                    <Text style={tailwind`font-bold text-black text-lg`}>Toyota Fortuner 2019</Text>
                    <Text style={tailwind`text-sm text-secondary`}>Vehicle ID <Text style={tailwind`text-primary`}># 1013-221</Text></Text>
                    <Text style={tailwind`text-xs`}>Last Serviced June 2021</Text>               
                </View>
                <View style={tailwind`flex-row justify-center items-center py-2`}>
                    <Text style={tailwind`bg-primary px-20 py-2 text-white text-base`}>Select</Text>
                </View>
                </View>
            </View>
            <View style={tailwind`justify-center absolute bottom-0 flex w-full items-center mb-10`}>
                    <Button title="Continue"
                        onPress={()=> navigation.navigate("Details")}
                        titleStyle={tailwind`text-lg font-bold`}
                        buttonStyle={tailwind`bg-primary items-center text-lg`}
                        containerStyle={tailwind`bg-primary items-center w-3/4 rounded-lg`}
                    />
                </View>
        </View>
    )
};

export default VehicleScreen;