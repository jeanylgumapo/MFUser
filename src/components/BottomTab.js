import React from 'react';
import tailwind from 'tailwind-react-native-classnames';
import {Text, View, Image, TouchableOpacity} from 'react-native';
// import { Entypo,Ionicons,MaterialIcons,Foundation,FontAwesome     } from '@expo/vector-icons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BottomTab=({state, descriptors, navigation}) =>{
    return(
        <View style={tailwind`flex-row justify-center p-2 bg-white shadows-2xl`}>
            {state.routes.map ((route,index)=>{
                const isFocused =state.index ===index;
                const {options} =descriptors[route.key];
                const color ='#3593C5'

                const onPress= ()=> {
                    const event= navigation.emit({
                        type:'tabPress',
                        target: route.key,
                    })
                    if(!isFocused && !event.defaultPrevented){
                        navigation.navigate(route.name);
                    }
                }
                return(
                    <>
                <TouchableOpacity 
                key={index}
                onPress={()=> {
                   onPress() 
                }}
                testID={options.tabBarTestID}
                accessibilityRole='button'
                >
                    {index===0 && (
                        <View style={tailwind`p-4 mx-8`}>
                            {isFocused ? <Entypo name="home" size={24} color={color} />:
                            <Ionicons name="home-outline" size={24} color="#DAD7E0" />
                            }
                        </View>
                        
                    )}
               
                    {index===1 && (
                         <View style={tailwind`p-4 mx-8`}>
                            {isFocused ? 
                            <FontAwesome name="car" size={24} color={color} />:
                            <FontAwesome name="car" size={24} color="#DAD7E0" />
                            }
                        </View>
                    )}
                    {/* {index===2 && (
                         <View> */}
                            {/* {isFocused ? <Entypo name="home" size={24} color={color} />:
                            <Ionicons name="home-outline" size={24} color={color} />
                            } */}
                                {/* <Image style={tailwind` p-4 mx-2  bottom-10 `} source ={require('../../assets/centerlogo.png')}/>
                        </View>
                    )} */}
                    {index===2 && (
                         <View style={tailwind`p-4 mx-8`}>
                            {isFocused ? <Entypo name="bookmark" size={24} color={color} />:
                            <Entypo name="bookmark" size={24} color="#DAD7E0" />
                            }
                        </View>
                    )}
                    {index===3 && (
                         <View style={tailwind`p-4 mx-8`}>
                            {isFocused ? <Ionicons name="settings" size={24} color={color}/>:
                            <Ionicons name="settings" size={24} color="#DAD7E0" />
                            }
                        </View>
                    )}
                     </TouchableOpacity>
                    </>
                )
            })}
        </View>
        
    )
}

export default BottomTab;