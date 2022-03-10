import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';
import tailwind from 'tailwind-react-native-classnames';
// import MaterialTabs from 'react-native-material-tabs';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ActivityScreen from '../Notification/ActivityScreen';
import NewsScreen from '../Notification/NewsScreen';

const FirstRoute = () => (
    <ActivityScreen/>
  );
  
  const SecondRoute = () => (
    <NewsScreen/>
  );
  
  const renderScene = SceneMap({
    0: FirstRoute,
    1: SecondRoute,
  });

const NotificationScreen = () => {
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={tailwind`border-b-primary text-primary`}
      indicatorContainerStyle={`border-b-primary  bg-primary text-primary`}
      labelStyle={tailwind`text-black`}
      style={tailwind`bg-white`}
    />
  );
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: '0', title: 'Activities' },
      { key: '1', title: 'Updates' },
    ]);
    // const [selectedTab, setSelectedTab] = useState(0);
    const [isActivity, setisActivity]=useState(true);
    const [isUpdate, setisUpdate]=useState(false);
    const [isActive, setisActive]=useState(true);
    
    return (
        
        <View style={tailwind`bg-tertiary h-full`}>
            <LinearGradient 
                style={tailwind`items-center justify-center py-4 rounded-bl-xl rounded-br-xl`} 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={["#318FC1", "#056395"]}>
                <Text style={tailwind`text-white text-center font-bold text-xl`}>
                    Notifications
                </Text>
                {/* <TouchableOpacity style={tailwind`absolute right-0 mx-4`} onPress={() => setModalOpen(true) }><Text style={tailwind`text-white`}>Add</Text></TouchableOpacity> */}
            </LinearGradient>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
                // style={tailwind`bg-primary`}
                />
            {/* <MaterialTabs
                items={['One', 'Two', 'Three', 'Four', 'Five']}
                selectedIndex={selectedTab}
                onChange={setSelectedTab}
                barColor="#1fbcd2"
                indicatorColor="#fffe94"
                activeTextColor="white"
            />   */}
            {/* {console.log("selected"+ selectedTab)} */}
        </View>
    )
};

export default NotificationScreen;