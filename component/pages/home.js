import React, { Component } from 'react';
// const React = require("react-native");
import { AppRegistry,View,Text,StyleSheet
,Button,TouchableOpacity,StatusBar,Image,Dimensions,Switch,Platform,ImageBackground ,TouchableHighlight} from 'react-native';


import {
	Content,
	// Text,
	H3,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

const drawerCover = require("../pic/roombackground.jpg");
const drawerImage = require("../pic/college-classroom.jpg");
const logoImage = require("../pic/Hcmute.png");
const deviceHeight = Dimensions.get("window").height;

const launchscreenBg = require("../pic/blue-sky.jpg");//blue-normal
const launchscreenLogo = require("../pic/logo-kitchen-sink.png");//logo-news,logo-kitchen-sink.png

import firebase from '../pages/Firebase_configuration.js';

export default class home extends Component{

													
	constructor(props){
      super(props);
       this.state ={
          text:'',
          text1:'',
          Lightstate:false,
         }

console.ignoredYellowBox = [
         'Setting a timer'
      ];

      Area=firebase.database().ref("Area");
   }



 submit(){
      Area.update({
          Light:this.state.Lightstate,
      })
  }


//Get value----------------------------------------------------------
componentDidMount() {
       const rootRef= firebase.database().ref().child("Area");
       const detailRef= rootRef.child('Messages');
       detailRef.on('value', snap =>{
        this.setState({
          text:snap.val()
        });
       });
}
  


render(){
		
        if(this.state.text == 'true'&&this.state.Lightstate===false) {
           this.setState({Lightstate: true })//&&this.props.navigation.navigate('Home',{cat:'Home',id:'1'});
        }
        else if(this.state.text == 'false'&&this.state.Lightstate===true) {
           this.setState({ Lightstate: false })//&&this.props.navigation.navigate('Home',{cat:'Home',id:'1'});
        }

		const { navigate } = this.props.navigation;

		
		return(

				// <StatusBar
				// hidden={true} //      alignContent: 'center',      <View style={{justifyContent:'flex-start', alignItems:'center',flexDirection: 'row', }}>                    
				// />barStyle="light-content" />
			<Container>
				<StatusBar hidden={true} />
				<ImageBackground source={launchscreenBg} style={styles.imageContainer}>

					<View>
					      <Text style= {styles.text1}>
					        {this.state.text}
					        {this.state.text1}
					      </Text> 
					</View>

					<View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
		
					<Image source={logoImage} />
							

					</View>

					<View style={{alignItems: "center",	marginBottom: 50,backgroundColor: "transparent",}}>
							<View style={{ marginTop: 8 }} />
							<View style={{ marginTop: 8 }} />
					</View>
					 

					<View style={styles.container}>	
							<Text style={{color:'white', fontSize:20,}}>CONTROLER HCMUTE DEVICE APP</Text>	   
					</View>


					<View style={{ marginBottom: 80 }}></View>

			</ImageBackground>
	</Container>


	 
		);
	}
}
const styles = StyleSheet.create({

	textbutton: {
      borderWidth: 5,
      padding: 25,
      borderColor: 'mintcream',//'mintcream',//,'mediumspringgreen',
      backgroundColor: 'springgreen',
      fontSize: 14,
      borderRadius:8,
      borderWidth: 2,
      alignContent: 'center',
      alignSelf:'center',
      width: 110, height: 70,
      alignItems: 'center',
      fontWeight: 'bold',
      color:'black',
      fontWeight: 'bold',
      textAlign: 'center',

   },

	imageContainer: {
    flex: 1,
    width: null,
    height: null
  },

  text1:{
	backgroundColor: 'transparent',
	
	justifyContent:'flex-start',
	fontSize: 25,
	textAlign: 'center',
	fontWeight: '600', 
	color:'brown'
	},

  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 100
  },
  text: {
    color: "white",
    bottom: 6,
    marginTop: 5
},

	container:{
		display:'flex',alignItems:'center',
		justifyContent:'center'
	},
	cat:{
		backgroundColor:'orange',
		padding:10,margin:10,width:'95%'
	},
	pageName:{
		margin:10,fontWeight:'bold',
		color:'yellow', textAlign:'center',
		fontSize:25,
	},
	btnText:{
		color:'#fff',fontWeight:'bold'
	},
	 icon: {
    width: 24,
    height: 24,
  },
});


AppRegistry.registerComponent('home', () => home);
