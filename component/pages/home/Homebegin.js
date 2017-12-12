import React, { Component } from "react";
import { Image, View, StatusBar, ImageBackground } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right } from "native-base";
import styles from "./styles";

const launchscreenBg = require("../img/blue-sky.jpg");//blue-normal
const launchscreenLogo = require("../img/logo-kitchen-sink.png");//logo-news,logo-kitchen-sink.png

class Homebegin extends Component {
static navigationOptions= ({navigation}) =>({
		  title: 'Home',	
	});  
  
	render(){
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<ImageBackground source={launchscreenBg} style={styles.imageContainer}>
					<View style={styles.logoContainer}>
						<ImageBackground source={launchscreenLogo} style={styles.logo} />
					</View>
					<View
						style={{
							alignItems: "center",
							marginBottom: 50,
							backgroundColor: "transparent",
						}}
					>
						<H3 style={styles.text}>App to showcase</H3>
						<View style={{ marginTop: 8 }} />
						<H3 style={styles.text}>NativeBase components</H3>
						<View style={{ marginTop: 8 }} />
					</View>
					<View style={{ marginBottom: 80 }}>
						<Button
							style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
							// onPress={() => navigate("DrawerOpen")}
							onPress={() => navigate('Home',{cat:'Home',id:'1'})}
						>
							<Text>Lets Go!</Text>
						</Button>
					</View>
				</ImageBackground>
			</Container>
		);
	}
}

export default Homebegin;
