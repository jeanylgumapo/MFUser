import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
// import { MaterialIcons,FontAwesome, AntDesign  } from '@expo/vector-icons';
import { Button, Input } from 'react-native-elements';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const UselessTextInput = (props) => {
    return (
        <TextInput style={tailwind`bg-white text-gray-100`}
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
            // placeholder="Tell mechanic how to find your place"
            // placeholderStyle={tailwind`mx-4`}
        />
    );
}
const time = [
    { label: '10:00 AM', value: '1' },
    { label: '12:00 NN', value: '2' },
    { label: '2:00 PM', value: '3' },
    { label: '5:00 PM', value: '4' },
    { label: '5:00 AM', value: '5' },
    { label: '5:00 PM', value: '6' },
    { label: '5:00 PM', value: '7' },
    { label: '5:00 PM', value: '8' },
  ];
const DetailsScreen = ({navigation}) => {
    const [value, onChangeText] = useState('Tell mechanic how to find your place');
    const [dateValue,setDateValue]=useState(new Date());
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {

        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setDateValue(currentDate);        
        console.log("This is date value" + dateValue);

    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
      };
 
    const [dropdown, setDropdown] = useState(null);
    const _renderItem = item => {
        return (
        <View >
            <Text>{item.label}</Text>
        </View>
        );
    };
    return (
        <View style={tailwind`bg-tertiary h-full flex`}>
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
                    Booking Details
                </Text>
                {/* <TouchableOpacity style={tailwind`absolute right-0 mx-4`} onPress={() => setModalOpen(true) }><Text style={tailwind`text-white`}>Add</Text></TouchableOpacity> */}
            </LinearGradient>            
            <ScrollView>
                <View style={tailwind`m-4`}>
                    <Text  style={tailwind`text-lg text-black font-bold`}> Location & Time</Text>
                        <View>
                            <View style={tailwind`flex-col m-4 bg-white p-4 rounded-xl`}>
                                <FontAwesome style={tailwind`absolute left-0 m-4 `} name="map-marker" size={32} color="#3593C5" />
                                <Text style={tailwind` mx-8 text-left font-bold text-base text-black`}>Service Location</Text>
                                <Text style={tailwind`absolute right-0 m-4 text-primary`}>Change</Text>
                                <Text style={tailwind`mx-8 text-sm text-black`}>House #21, San Antonio Village, Davao City</Text>
                            </View>
                        <View style={tailwind`mx-4`}>
                            <Text style={tailwind`my-1 text-sm text-black`}>Select Date</Text>
                            <View style={tailwind`border-2 p-2 border-gray-100 rounded bg-white`}>
                                    <Text style={tailwind`px-2`}>{moment().format('DD-MM-YYYY')}</Text>  
                                    <AntDesign style={tailwind`absolute right-0 p-2`} name="calendar" size={24} color="#3593C5" onPress={showDatepicker}/>                                               
                                    {show && (
                                        <DateTimePicker
                                            format="DD-MM-YYYY"
                                            testID="dateTimePicker"
                                            value={date}
                                            mode='single'
                                            is24Hour={true}
                                            minDate="01-01-2016"
                                            maxDate="01-01-2022"
                                            display="default"
                                            onChange={onChange}
                                        />
                                    ) 
                                }                                   
                            </View>
                        </View>
                        <View style={tailwind`p-4`}>
                            <Text style={tailwind`my-1 text-sm text-black`}>Select Time</Text>
                            <Dropdown
                                style={tailwind`border-2 border-gray-100  px-4 rounded bg-white`}
                                data={time}
                                search
                                searchPlaceholder="Select Time"
                                labelField="label"
                                valueField="value"
                                label="Dropdown"
                                placeholderStyle={tailwind`text-sm text-gray-600`}
                                placeholder="Select Time"
                                value={dropdown}
                                onChange={item => {
                                setDropdown(item.value);
                                    console.log('selected', item);
                                }}
                                // renderLeftIcon={() => (
                                //     <Image style={styles.icon} source={require('../../../assets/user.png')} />
                                // )}
                                renderItem={item => _renderItem(item)}
                                textError="Error"
                                />
                            {/* <AntDesign style={tailwind`absolute right-0`} name="clockcircle" size={24} color="#3593C5" />     */}
                        </View>
                        <View style={tailwind`p-4`}>
                            <Text style={tailwind`my-1 text-sm text-black`}>Add Notes</Text>
                            <UselessTextInput
                                multiline
                                numberOfLines={4}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                                style={tailwind`px-4`}
                                // style={{padding: 10}}
                                style={tailwind`bg-white`}
                            />
                        </View>
                    </View>
                </View>
                <View style={tailwind`justify-center bottom-0 flex w-full items-center mb-10`}>
                    <Button title="Continue"
                        onPress={()=> navigation.navigate("Summary")}
                        titleStyle={tailwind`text-lg font-bold`}
                        buttonStyle={tailwind`bg-primary items-center text-lg`}
                        containerStyle={tailwind`bg-primary items-center w-3/4 rounded-lg`}
                    />
                </View>
            </ScrollView>
        </View>
    )
};

export default DetailsScreen;