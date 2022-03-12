import React from 'react';
import {Text, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import { MaterialIcons,FontAwesome, AntDesign  } from '@expo/vector-icons';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button } from 'react-native-elements';


const StartScreen = ({navigation}) => {
    return (
        <View style={tailwind`h-full bg-white items-center justify-center flex`}>
            <Image style={tailwind`w-52 md:w-50 sm:w-36`} source ={require('../../../assets/mflogo.png')}/> 

            <View style={tailwind`flex items-center mt-20 w-3/4`}>
            <View style={tailwind`flex-nowrap mb-8`}>
                <Text style={tailwind`font-bold text-2xl  md:text-3xl sm:text-xl  text-center text-primary`}> Looking for a Car Mechanic?</Text>
            </View>
                <Button title="Get Started"
                    onPress={()=> {navigation.navigate('Onboard')}}
                    titleStyle={tailwind`text-lg font-bold`}
                    buttonStyle={tailwind`bg-primary items-center text-lg`}
                    containerStyle={tailwind`bg-primary items-center w-full rounded-2xl `}
                />
                <Button title="Skip"
                    onPress={()=> {navigation.navigate('Login')}}
                    titleStyle={tailwind`text-lg  text-primary`}
                    buttonStyle={tailwind`bg-white items-center text-lg`}
                    containerStyle={tailwind`bg-white items-center w-full rounded-2xl `}
                />
            </View>
            
        </View>
    )
};

export default StartScreen;