import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Input, Button } from 'react-native-elements';

const AddGarage = () => {
    const data = [
        {label: 'Item 1', value: '1'},
        {label: 'Item 2', value: '2'},
        {label: 'Item 3', value: '3'},
        {label: 'Item 4', value: '4'},
        {label: 'Item 5', value: '5'},
        {label: 'Item 6', value: '6'},
        {label: 'Item 7', value: '7'},
        {label: 'Input new car', value: '8'},
    ];
    const [dropdown, setDropdown] = useState(null);
    const _renderItem = item => {
        return (
        <View style={tailwind`flex-row items-center px-4 py-2 border-b-2 border-gray-50`}>
            <Image style={tailwind`w-12 h-4 mr-8 items-start `} source ={require('../../assets/car.png')}/>
            <Text style={tailwind`m-2 text-sm`}>{item.label}</Text>
        </View>
        );
    };
    return (
        <View style={tailwind`bg-tertiary h-full`}>
            <View style={tailwind`p-4`}>
                <Text style={tailwind`font-bold text-lg text-black my-4`}> Add Vehice Details</Text>
                    <Text style={tailwind`text-sm text-black mx-2`}>Car Make</Text>
                    <Dropdown
                        style={tailwind`border-b-2 border-gray-100 py-2 bg-white m-2 rounded`}
                        data={data}
                        search
                        // searchPlaceholder="Search"
                        renderInputSearch={()=><Text style={tailwind`p-4 text-sm`}>Search</Text>}
                        labelField="label"
                        valueField="value"
                        label="Dropdown"
                        inputSearchStyle={tailwind`text-sm`}
                        placeholderStyle={tailwind`mx-4 text-sm`}
                        placeholder="Select Car Make"
                        value={dropdown}
                        renderRightIcon={()=> <AntDesign style={tailwind`mx-4`} name="caretdown" size={16} color="#3593C5" />}
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
                     <Text style={tailwind`text-sm text-black mx-2`}>Car Model</Text>
                    <Dropdown
                        style={tailwind`border-b-2 border-gray-100 py-2 bg-white m-2 rounded`}
                        data={data}
                        search
                        // searchPlaceholder="Search"
                        renderInputSearch={()=><Text style={tailwind`p-4 text-sm`}>Search</Text>}
                        labelField="label"
                        valueField="value"
                        label="Dropdown"
                        inputSearchStyle={tailwind`text-sm`}
                        placeholderStyle={tailwind`mx-4 text-sm`}
                        placeholder="Select Car Model"
                        value={dropdown}
                        renderRightIcon={()=> <AntDesign style={tailwind`mx-4`} name="caretdown" size={16} color="#3593C5" />}
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
                     <Text style={tailwind`text-sm text-black mx-2`}>Year</Text>
                    <Dropdown
                        style={tailwind`border-b-2 border-gray-100 py-2 bg-white m-2 rounded`}
                        data={data}
                        search
                        // searchPlaceholder="Search"
                        renderInputSearch={()=><Text style={tailwind`p-4 text-sm`}>Search</Text>}
                        labelField="label"
                        valueField="value"
                        label="Dropdown"
                        inputSearchStyle={tailwind`text-sm`}
                        placeholderStyle={tailwind`mx-4 text-sm`}
                        placeholder="Select Year"
                        value={dropdown}
                        renderRightIcon={()=> <AntDesign style={tailwind`mx-4`} name="caretdown" size={16} color="#3593C5" />}
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
                     <Text style={tailwind`text-sm text-black mx-2`}>Transmission</Text>
                    <Dropdown
                        style={tailwind`border-b-2 border-gray-100 py-2 bg-white m-2 rounded`}
                        data={data}
                        search
                        // searchPlaceholder="Search"
                        renderInputSearch={()=><Text style={tailwind`p-4 text-sm`}>Search</Text>}
                        labelField="label"
                        valueField="value"
                        label="Dropdown"
                        inputSearchStyle={tailwind`text-sm`}
                        placeholderStyle={tailwind`mx-4 text-sm`}
                        placeholder="Select Transmission"
                        value={dropdown}
                        renderRightIcon={()=> <AntDesign style={tailwind`mx-4`} name="caretdown" size={16} color="#3593C5" />}
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
                     <Text style={tailwind`text-sm text-black mx-2`}>Fuel Type</Text>
                    <Dropdown
                        style={tailwind`border-b-2 border-gray-100 py-2 bg-white m-2 rounded`}
                        data={data}
                        search
                        // searchPlaceholder="Search"
                        renderInputSearch={()=><Text style={tailwind`p-4 text-sm`}>Search</Text>}
                        labelField="label"
                        valueField="value"
                        label="Dropdown"
                        inputSearchStyle={tailwind`text-sm`}
                        placeholderStyle={tailwind`mx-4 text-sm`}
                        placeholder="Select Fuel Type"
                        value={dropdown}
                        renderRightIcon={()=> <AntDesign style={tailwind`mx-4`} name="caretdown" size={16} color="#3593C5" />}
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
                     <Button title="Save"
                            // onPress={()=> {navigation.navigate('BottomTabStack')}}
                            titleStyle={tailwind`text-lg font-bold`}
                            buttonStyle={tailwind`bg-primary items-center text-lg`}
                            containerStyle={tailwind`bg-primary items-center w-full rounded-lg my-4`}
                        />
            </View>
        </View>
    )
};

export default AddGarage;