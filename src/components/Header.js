import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
    return (        
        <View style={tailwind`flex bg-transparent  border-transparent`}>
            <LinearGradient 
                style={tailwind`items-center bg-transparent border-transparent justify-center py-4 rounded-bl-xl rounded-br-xl`} 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={["#318FC1", "#056395"]}>
                <View style={tailwind`justify-center items-center`}>
                    <Text style={tailwind`text-white text-center font-bold text-xl`}>
                        Home
                    </Text>
                </View>
            </LinearGradient>
        </View>
       
    )
};

export default Header;