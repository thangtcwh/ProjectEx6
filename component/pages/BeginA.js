import React, { Component } from 'react';
import {
  Platform,  StyleSheet,  TextInput,  Text,  View,  ListInput,
  Switch,  ListView,  TouchableOpacity,  TouchableHighlight,
  Image,  Alert, ImageBackground, StatusBar, ScrollView
} from 'react-native'
import firebase from '../pages/Firebase_configuration.js';


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
const pic=require('../pic/college-classroom.jpg');


export default class BeginA extends Component{



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



// <View style={{flex:4, backgroundColor:'lawngreen', alignItems: 'center', }}>
//                               <Text style={{fontSize:20,}}>Messages</Text>
//                             </View>


onChangeDo(text) {
        this.setState({ text })
        if(text == 'Hello') {
          return this.setState({ hello: true })//&&this.props.navigation.navigate('Home',{cat:'Home',id:'1'});
        }
        this.setState({ hello: false })
}

componentWillMount(){


if (this.state.text=='Hello') {//this.state.hello===true||
        return this.props.navigation.navigate('Home',{cat:'Home',id:'1'});
      } 
}


render(){
const { navigate } = this.props.navigation;

return(
  
    <ImageBackground style={{flex: 1, width: undefined,  height: undefined, backgroundColor:'transparent',}} source={pic}>
                <StatusBar hidden={true} />
                <Header>
                          <Left>
                          <Button transparent onPress={() => this.props.navigation.goBack()}>
                          <Icon name="arrow-back" />
                          </Button>
                          </Left>

                          <Right>
                          <Title>A101</Title>
                          </Right>                                                
                </Header>

        <ScrollView>
            {
                <View style={{flexDirection: 'column', alignItems: 'center',backgroundColor: 'transparent', }}>
               

                      <View style = {{flex:1, flexDirection:'column',}}>

                            <View style={{backgroundColor:'pink', alignItems: 'center', }}>
                              <Text style={{fontSize:20,}}>Floor A1</Text>
                            </View>

                              <View style={{flexDirection:'row', justifyContent:'space-between' }}>
                             
                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A101
                              </Text>
                              </TouchableOpacity>

                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A102
                              </Text>
                              </TouchableOpacity>

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A103
                              </Text>
                              </TouchableOpacity>

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A104
                              </Text>
                              </TouchableOpacity> 

                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A105
                              </Text>
                              </TouchableOpacity>
                              </View>

                              <View style={{flexDirection:'row', justifyContent:'space-between' }}>
                             
                              

                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A106
                              </Text>
                              </TouchableOpacity>

                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A107
                              </Text>
                              </TouchableOpacity>

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A108
                              </Text>
                              </TouchableOpacity>

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A109
                              </Text>
                              </TouchableOpacity> 

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A110
                              </Text>
                              </TouchableOpacity>
                              </View>

                             
{/* ######################################################################################################### */}
{/* ######################################################################################################### */}
{/* ######################################################################################################### */}
                              <View style={{alignItems: "center",	marginBottom: 50,backgroundColor: "transparent",}}>
                              <View style={{ marginTop: 8 }} />
                              <View style={{ marginTop: 8 }} />
                              </View>    

                              <View style={{backgroundColor:'crimson', alignItems: 'center', }}>
                              <Text style={{fontSize:20,}}>Floor A2</Text>
                            </View>

                                 <View style={{flexDirection:'row', justifyContent:'space-between' }}>
                             
                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A201
                              </Text>
                              </TouchableOpacity>

                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A202
                              </Text>
                              </TouchableOpacity>

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A203
                              </Text>
                              </TouchableOpacity>

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A204
                              </Text>
                              </TouchableOpacity> 

                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A205
                              </Text>
                              </TouchableOpacity>
                              </View>

                              <View style={{flexDirection:'row', justifyContent:'space-between' }}>

                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A206
                              </Text>
                              </TouchableOpacity>

                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A207
                              </Text>
                              </TouchableOpacity>

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A208
                              </Text>
                              </TouchableOpacity>

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A209
                              </Text>
                              </TouchableOpacity> 

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A210
                              </Text>
                              </TouchableOpacity>
                              </View>
{/* ######################################################################################################### */}
{/* ######################################################################################################### */}
{/* ######################################################################################################### */}
                                <View style={{alignItems: "center",	marginBottom: 50,backgroundColor: "transparent",}}>
                                <View style={{ marginTop: 8 }} />
                                <View style={{ marginTop: 8 }} />
                                </View>


                              <View style={{backgroundColor:'darkkhaki', alignItems: 'center', }}>
                              <Text style={{fontSize:20,}}>Floor A3</Text>
                            </View>

                                  <View style={{flexDirection:'row', justifyContent:'space-between' }}>
                             
                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A301
                              </Text>
                              </TouchableOpacity>

                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A302
                              </Text>
                              </TouchableOpacity>

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A303
                              </Text>
                              </TouchableOpacity>

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A304
                              </Text>
                              </TouchableOpacity> 

                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A305
                              </Text>
                              </TouchableOpacity>
                              </View>

                              <View style={{flexDirection:'row', justifyContent:'space-between' }}>
                             
                              

                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A306
                              </Text>
                              </TouchableOpacity>

                              <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A307
                              </Text>
                              </TouchableOpacity>

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A308
                              </Text>
                              </TouchableOpacity>

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A309
                              </Text>
                              </TouchableOpacity> 

                               <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
                              <Text style= {styles.textbutton}> 
                              A310
                              </Text>
                              </TouchableOpacity>
                              </View>
                              

                              
                              

                      </View>         

                      <View style= {{}}>                                                 
                      </View>

                 </View>
      
            }
       </ScrollView>
             
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
      fontSize: 10,
      borderRadius:8,
      borderWidth: 2,
      alignContent: 'center',
      alignSelf:'center',
      width: 80, height: 60,
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

/*
<Text style= {styles.text}>
{this.state.text}
</Text>
*/
// <View style= {styles.b1}>
//                    <TouchableOpacity style = {{ margin: 128,  backgroundColor: 'transparent',}} onPress={() => navigate('Home',{cat:'Home',id:'1'})}>
//                       <Text style= {styles.ht}>
//                          HomeA
//                      </Text>
//                    </TouchableOpacity>
//              </View>


// <View style = {{justifyContent:'center', flexDirection:'row'}}>

//                     <TouchableOpacity  onPress={() => navigate('AreaA',{cat:'AreaA',id:'6'})}> 
//                     <Text style= {styles.textbutton}> 
//                     AreaA
//                     </Text>
//                     </TouchableOpacity> 

//                     <TouchableOpacity  onPress={() =>  navigate('Home',{cat:'Home',id:'1'})}> 
//                     <Text style= {styles.textbutton}> 
//                     Home
//                     </Text>
//                     </TouchableOpacity> 
                   {/*   { this.state.hello && <Text style={ styles.hello }>Hello World</Text>  }*/}


//                     <TouchableOpacity  onPress={() => this.props.navigation.goBack()}> 
//                     <Text style= {styles.textbutton}> 
//                     Back
//                     </Text>
//                     </TouchableOpacity> 

//                 </View>