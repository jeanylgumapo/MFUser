import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, Alert, Modal } from 'react-native';
import 'react-native-gesture-handler';

import tailwind from 'tailwind-react-native-classnames';
import { Button } from 'react-native-elements';
// import { Ionicons, Fontisto,AntDesign,MaterialIcons  } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AddGarage from '../../components/AddGarage';

const ServiceInfoScreen = ({navigation}) => {
    const [showBox, setShowBox] = useState(true);
    const [modalOpen, setModalOpen]=useState(false);
    const showConfirmDialog = () => {
        return Alert.alert(
          "Add Service?",
          "Would you like your service add to your garage?",
          [
            // The "Yes" button
            {
              text: "Cancel",
              onPress: () => {
                setShowBox(false);
              },
            },
            {
                text: "Yes",
                onPress: () => {
                    // setShowBox(false);
                    setModalOpen(true) 
                    // navigation.navigate('BottomTabStack')

                },
              },
            {
              text: "No",
              onPress: () => {
                setShowBox(false);
                navigation.navigate('Vehicle')
              },
            },
          ]
        );
      };
    return (
        <View style={tailwind`bg-tertiary h-full`}>
            <Modal visible={modalOpen}>
                <View style={tailwind`bg-primary p-4 flex-row`}>
                    <TouchableOpacity onPress={() => setModalOpen(false) } >
                        <EvilIcons name="close" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={tailwind`text-white font-bold text-base mx-2`}> Add New Vehicle</Text>                       
                </View>
                <AddGarage/>
            </Modal>            
            <ScrollView>
                <ImageBackground source ={require('../../../assets/info.jpg')} resizeMode="cover" style={tailwind`h-44 w-full `}>
                    <View style={tailwind`flex-row left-0 top-0 m-2 items-center`}>
                        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                        <TouchableOpacity  onPress={()=>navigation.goBack()}><Text style={tailwind`text-base text-white`}>Back</Text></TouchableOpacity>
                    </View>
                    {/* <Image style={tailwind`h-44 w-full `} source ={require('../../../assets/info.jpg')}/>  */}
                    </ImageBackground>
                <View style={tailwind`bg-white mx-4 p-4 mb-4 rounded-2xl mnt-20`}>
                    <View style={tailwind`mt-2`}>
                        <Text style={tailwind`text-lg text-black`}>Car Diagnostic</Text>
                        <Text style={tailwind`absolute right-0 text-primary font-bold text-lg`}>Php 2,500</Text>
                    </View>
                    <Text style={tailwind`text-xs text-secondary`}>Having Trouble with your car? Look no further, Mr. Fixxy is here to fix your problem</Text>
                    <View style={tailwind`p-2`}>
                        <View style={tailwind`flex-row items-center m-1`}>
                            <Ionicons style={tailwind`mx-2 icon-bg-primary p-1 rounded-full`} name="time-sharp" size={16} color="#3593C5" />
                            <Text style={tailwind`text-black text-base`}>1 Hr Taken</Text>
                        </View>
                        <View style={tailwind`flex-row items-center m-1`}>
                            <Ionicons style={tailwind`mx-2 icon-bg-primary p-1 rounded-full`} name="shield-checkmark" size={16} color="#3593C5" />
                            <Text style={tailwind`text-black text-base`}>Service Warranty</Text>
                        </View>
                        <View style={tailwind`flex-row items-center m-1`}>
                            <Fontisto  style={tailwind`mx-2 icon-bg-primary p-1 rounded-full`} name="like" size={16} color="#3593C5" />
                            <Text style={tailwind`text-black text-base`}>Recommendation Sheet</Text>
                        </View>
                        <View style={tailwind`flex-row items-center m-1` }>
                            <Ionicons style={tailwind`mx-2 icon-bg-primary p-1 rounded-full`} name="alarm" size={16} color="#3593C5" />
                            <Text style={tailwind`text-black text-base`}>Free Checkup</Text>
                        </View>
                    </View>
                </View>
                <View style={tailwind`bg-white mx-4 p-4 mb-4 rounded-2xl`}>
                    <Text style={tailwind`text-lg text-black mt-2 m-2`}>What's included?</Text>
                    <View style={tailwind`flex-row items-center m-1`}>
                        <AntDesign style={tailwind`ml-4 mr-1 p-1 rounded-full`} name="checkcircle" size={24} color="#32BEA6" />
                        <Text style={tailwind`text-black text-base`}>Labor</Text>
                    </View>
                    <View style={tailwind`flex-row items-center m-1`}>
                        <AntDesign style={tailwind`ml-4 mr-1 p-1 rounded-full`} name="checkcircle" size={24} color="#32BEA6" />
                        <Text style={tailwind`text-black text-base`}>Service Inspection</Text>
                    </View>
                    <View style={tailwind`flex-row items-center m-1`}>
                        <AntDesign style={tailwind`ml-4 mr-1  p-1 rounded-full`} name="checkcircle" size={24} color="#32BEA6" />
                        <Text style={tailwind`text-black text-base`}>Recommendation/Support</Text>
                    </View>
                    <View style={tailwind`flex-row items-center m-1`}>
                        <AntDesign style={tailwind`ml-4 mr-1 p-1 rounded-full`} name="checkcircle" size={24} color="#32BEA6" />
                        <Text style={tailwind`text-black text-base`}>Labor</Text>
                    </View>
                </View>
                <View style={tailwind`justify-center flex w-full items-center mb-10`}>
                    <Button title="Book"
                        onPress={() => showConfirmDialog()}
                        titleStyle={tailwind`text-lg font-bold`}
                        buttonStyle={tailwind`bg-primary items-center text-lg`}
                        containerStyle={tailwind`bg-primary items-center w-3/4 rounded-lg`}
                    />
                </View>
            </ScrollView>
        </View>
    )
};

export default ServiceInfoScreen;