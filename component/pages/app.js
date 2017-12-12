import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity,TouchableHighlight } from 'react-native';
import { StackNavigator,DrawerNavigator  } from 'react-navigation';

import HomeScreen from './home';

import Menu from  './menu';
import BeginA from './BeginA';

import BeginB from './BeginB';

import BeginC from './BeginC';

import BeginD from './BeginD';

import AreaA from './AreaA';
import AreaB from './AreaB';
import AreaC from './AreaC';
import AreaD from './AreaD';

const Drawer = DrawerNavigator(

{

		Home: { screen: HomeScreen ,},
		BeginA: { screen:BeginA},
		BeginB: { screen:BeginB},
		BeginC: { screen:BeginC},
		BeginD: { screen:BeginD},		

		AreaA: { screen:AreaA },
		AreaB: { screen:AreaB },
		AreaC: { screen:AreaC },
		AreaD: { screen:AreaD },
 
 },


{
    initialRouteName: "Home",
    contentComponent:props => <Menu {...props} />
}
);



const nativeShop = StackNavigator(

{
    Home: { screen: Drawer },	
	// BeginA: { screen:BeginA,},
	// AreaB: { screen:AreaB,},
	// AreaC: { screen:AreaC },
	// AreaD: { screen:AreaD },
	// Area_A: {screen:Area_A},
},

{
        initialRouteName: "Home",
        headerMode: "none",
}
);
export default nativeShop;