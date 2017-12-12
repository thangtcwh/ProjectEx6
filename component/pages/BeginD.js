import React, { Component } from 'react';
import {
  Platform,  StyleSheet,  TextInput,  Text,  View,  ListInput,
  Switch,  ListView,  TouchableOpacity,  TouchableHighlight,
  Image,  Alert, ImageBackground, StatusBar
} from 'react-native'
// import { Actions } from 'react-native-router-flux';
import firebase from '../pages/Firebase_configuration.js';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Button } from 'react-native-elements';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  // Text
} from "native-base";


const resizeMode = 'center';
const pic=require('./roombackground.jpg');


export default class BeginD extends Component{



constructor(props){
      super(props);
       this.state ={
          text:'',
          textcompare:'',
         }

console.ignoredYellowBox = [
         'Setting a timer'
      ];
   }






onChangeDo(text) {
        this.setState({ text })
        if(text == 'Hello') {
          return this.setState({ hello: true })//&&this.props.navigation.navigate('Home',{cat:'Home',id:'1'});
        }
        this.setState({ hello: false })
}

componentWillMount(){

//   // componentWillUpdate (){
if (this.state.text=='Hello') {//this.state.hello===true||
        // this.setState({ text: '', });
        return this.props.navigation.navigate('Home',{cat:'Home',id:'1'});
      } 
}


render(){
const { navigate } = this.props.navigation;

return(
  
    <ImageBackground style={{ 
            flex: 1,
            width: undefined,
            height: undefined,
            backgroundColor:'transparent',
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0)',
            }} source={pic}>

    <StatusBar
      // backgroundColor="blue"
      hidden={true}//right:70, top:-20//        alignContent: 'center',      <View style={{justifyContent:'flex-start', alignItems:'center',flexDirection: 'row', }}>                    
      />

<Header>
      
          <Body>
            <Title>AreaA</Title>
          </Body>
          <Right>
           <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
           </Right>

</Header>

          <View style={{ 
            flex:1,justifyContent: 'flex-start',alignItems: 'center',
            backgroundColor: 'transparent', }}>

                <View style = {styles.b1}>
                      <Icon name="home" size={30} color='white' style = {styles.b1}/>                                                     
                </View>
                          <View style= {styles.b1}>
                                <TouchableOpacity style = {{ margin: 128,  backgroundColor: 'transparent',}} onPress={() => navigate('BeginA',{cat:'BeginA',id:'2'})}>
                                   <Text style= {styles.ht}>
                                      HomeA
                                  </Text>
                                </TouchableOpacity>
                          </View>



                          <View style= {styles.b1}>
                                  <Text style= {styles.text}>
                                    {this.state.text}
                                  </Text>        


        { this.state.hello && <Text style={ styles.hello }>Hello World</Text>  }
                   



                         
                          <View style = {{justifyContent:'center', flexDirection:'row'}}>
                              <TouchableOpacity  onPress={() => navigate('AreaD',{cat:'AreaD',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              AreaD
                              </Text>
                              </TouchableOpacity> 

                              <TouchableOpacity  onPress={() =>  navigate('Home',{cat:'Home',id:'1'})}> 
                              <Text style= {styles.textbutton}> 
                              Home
                              </Text>
                              </TouchableOpacity> 
                              

                              <TouchableOpacity  onPress={() => this.props.navigation.goBack()}> 
                              <Text style= {styles.textbutton}> 
                              Back
                              </Text>
                              </TouchableOpacity> 


                          
                          </View>

                         
                          </View>
           </View>

  </ImageBackground>
             
          );
    }
} 

const styles = StyleSheet.create({

 inputText: {
    height:60,
    backgroundColor: '#ededed'
  },
  hello: {
    fontSize:22
  },
    container: {
    backgroundColor: "#FFF"
  },
  mb10: {
    marginBottom: 10
  },


  ht:{
    padding:20,justifyContent:'flex-start',fontSize: 30,
    backgroundColor: 'transparent',fontWeight: '600',
    color:'white', 
    },

  b1:{
      backgroundColor: 'transparent',
      // fontSize: 14,
    },

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
//navigate("Home",{screen:"Home"})

  text:{
      backgroundColor: 'transparent',
      // padding:20,
      justifyContent:'flex-start',
      fontSize: 30,
      //backgroundColor: 'transparent',
      textAlign: 'center',
      fontWeight: '600', 
      color:'white'
     },

  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

});

 // static navigationOptions= ({navigation}) =>({
//       title: 'BeginA',   
//       headerMode: 'float', 
//       // header:'',  
//     headerRight:<TouchableOpacity onPress={() => navigation.navigate("Home")}
//     style={{backgroundColor:'orange', margin:10,padding:10}}>
//     <Text style={{color:'black'}}>Comback</Text></TouchableOpacity>
//   });

// const goSwitch = () => {
//       Actions.Area_A()
// // }

// if (this.state.text=='Hello') {//this.state.hello===true||
//         // this.setState({ text: '', });
//         return this.props.navigation.navigate('Home',{cat:'Home',id:'1'});

//       } 



//   container: {
//     marginBottom: 10, 
//     alignSelf:'center',
//     fontSize: 20,
// backgroundColor: 'transparent',

//     },


// componentDidMount() {
//        const rootRef= firebase.database().ref().child("Area");
//        const detailRef= rootRef.child('Messages');
//        detailRef.on('value', snap =>{
//         this.setState({
//           text:snap.val(),
//           // textcompare: text
//         });
//        });
// }