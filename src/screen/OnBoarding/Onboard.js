import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import 'react-native-gesture-handler';
import { MaterialIcons,FontAwesome, AntDesign  } from '@expo/vector-icons';
import tailwind from 'tailwind-react-native-classnames';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Input, Button } from 'react-native-elements';
const {width, height}=Dimensions.get('window');
const COLOR ={primary: '#3376B2', white: '#fff'};
const slides =[
    {
        id:1,
        image: require('../../../assets/1.png'),
        title: 'Book A Mechanic Instantly',
        subtitle:'Booking a Car Mechanic has never been this easier.',
    },
    {
        id:2,
        image: require('../../../assets/2.png'),
        title: 'Accredited Mechanic',
        subtitle:'Hire only the best mechanic available in the city',
    },
    {
        id:3,
        image: require('../../../assets/3.png'),
        title: 'Make Your Vehicle A Priority',
        subtitle:'We offer the best car services in town',
    },
]
const Onboard = ({navigation}) => {
    const [showHomePage, setShowHomePage]=useState(false);
    const buttonLabel=(label) => {
        return(
            <View style={tailwind`px-4`}>
                <Text style={tailwind`text-primary text-base`}>
                    {label}
                </Text>
            </View>
        )
    }
    
    if(!showHomePage){
        return(
            <AppIntroSlider
                data={slides}
                renderItem={({item})=> {
                    return(
                        <View style={tailwind`my-8 h-full bg-white`}>
                            <View style={tailwind`bg-onboard  flex items-center justify-center p-8`}>
                            <Image
                                source={item.image}/>
                            </View>
                            <View style={tailwind`flex items-center justify-center p-8`}>
                                <Text style={tailwind`font-bold text-2xl text-black text-center`}>
                                        {item.title}
                                </Text>
                                <View style={tailwind`w-3/4 items-center`}>                                   
                                    <Text style={tailwind`text-center text-base`}>
                                        {item.subtitle}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )
                    // activeDotStyle={s}
                }}
                showSkipButton
                activeDotStyle={tailwind`bg-primary px-4`}
                renderNextButton={() => buttonLabel('Next')}
                renderSkipButton={()=> buttonLabel('Skip')}
                renderDoneButton={()=>buttonLabel('Done')}
                onDone={() => {
                    setShowHomePage(true)
                }}
            />
        )
    }
    return (
    <View style={tailwind`h-full bg-white items-center justify-center flex`}>
        <Image style={tailwind`w-52`} source ={require('../../../assets/mflogo.png')}/> 

        <View style={tailwind`flex items-center mt-20 w-3/4`}>
        <View style={tailwind`flex-nowrap mb-8`}>
            <Text style={tailwind`font-bold text-2xl text-center text-primary`}> Looking for a Car Mechanic?</Text>
        </View>
            <Button title="Log In"
                onPress={()=> {navigation.navigate('Login')}}
                titleStyle={tailwind`text-lg font-bold`}
                buttonStyle={tailwind`bg-primary items-center text-lg`}
                containerStyle={tailwind`bg-primary items-center w-full rounded-2xl `}
            />
            <Button title="Sign Up"
                onPress={()=> {navigation.navigate('Signup')}}
                titleStyle={tailwind`text-lg  text-primary`}
                buttonStyle={tailwind`bg-white items-center text-lg`}
                containerStyle={tailwind`bg-white items-center w-full rounded-2xl `}
            />
        </View>
        
    </View>
    )
};

export default Onboard;