import React, { Component } from 'react';
import { AppRegistry,Text,StyleSheet
,Button,TouchableOpacity,StatusBar,ImageBackground, View } from 'react-native';

import {
	Content,
	// Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	//Button,
	// View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

import styles from "./style";
const drawerCover = require("../pic/roombackground.jpg");
const drawerImage = require("../pic/college-classroom.jpg");

export default class Menu extends Component{

	render(){
		const { navigate } = this.props.navigation;
		return(

<Container>
		<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
			<ImageBackground source={drawerCover} style={styles.drawerCover}>

			</ImageBackground>

						  <View >	
						  <View style={styles.container}>	
								<Text style={styles.pageName}>HCMUTE</Text>	   
								<TouchableOpacity
								style={styles.cat}
								onPress={() => navigate('Home',{cat:'Home',id:'1'})}>
								<Text style={styles.btnText}> Home > </Text>
								</TouchableOpacity>	   
								<TouchableOpacity
								style={styles.cat}
								onPress={() => navigate('BeginA',{cat:'BeginA',id:'2'})}>
								<Text style={styles.btnText}> BeginA > </Text>
								</TouchableOpacity>	
								<TouchableOpacity
								style={styles.cat}
								onPress={() => navigate('BeginB',{cat:'BeginB',id:'3'})}>
								<Text style={styles.btnText}> BeginB > </Text>
								</TouchableOpacity>	
								<TouchableOpacity
								style={styles.cat}
								onPress={() => navigate('BeginC',{cat:'BeginC',id:'4'})}>
								<Text style={styles.btnText}> BeginC > </Text>
								</TouchableOpacity>	
								<TouchableOpacity
								style={styles.cat}
								onPress={() => navigate('BeginD',{cat:'BeginD',id:'5'})}>
								<Text style={styles.btnText}> BeginD > </Text>
								</TouchableOpacity>	   

						
								</View>
						  
					
					      </View>

      </Content>
</Container>
		);
	}
}

AppRegistry.registerComponent('Menu', () => Menu);


	{/*	<TouchableOpacity
								style={styles.cat}
								onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}>
								<Text style={styles.btnText}> AreaA > </Text>
								</TouchableOpacity>	   
								<TouchableOpacity
								style={styles.cat}
								onPress={() => navigate('AreaB',{cat:'AreaB',id:'7'})}>
								<Text style={styles.btnText}> AreaB > </Text>
								</TouchableOpacity>  
								<TouchableOpacity
								style={styles.cat}
								onPress={() => navigate('AreaC',{cat:'AreaC',id:'8'})}>
								<Text style={styles.btnText}> AreaC > </Text>
								</TouchableOpacity>  
								<TouchableOpacity
								style={styles.cat}
								onPress={() => navigate('AreaD',{cat:'AreaD',id:'9'})}>
								<Text style={styles.btnText}> AreaD > </Text>
								</TouchableOpacity> 
								*/}

	 
	