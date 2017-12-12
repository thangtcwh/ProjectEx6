

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  ListInput,
  Switch,
  ListView,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  StatusBar,
  Alert,
} from 'react-native'
import firebase from '../pages/Firebase_configuration.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from'react-native-vector-icons/MaterialIcons';


export default class AreaC extends Component {
 

  constructor(props){
      super(props);
      this.state ={   
          setvalue:true,
          activeSwitch: '',
          Lightstate:false,
          Panstate:false,
          Machine1state:false,
          Machine2state:false,
        };  
                /*database=firebase.database();
                user= database.ref('User');*/
      console.ignoredYellowBox = [
         'Setting a timer'
       ];
      Area=firebase.database().ref("Area");
   }








_onPressLight=()=>this.setState(state =>({
    Lightstate:!state.Lightstate
   })
 );

_onPressPan=()=>this.setState(state=>({
   Panstate: !state.Panstate
 })
);

_onPressMachine1=()=>this.setState(state=>({
   Machine1state: !state.Machine1state//false
 })
);

_onPressMachine2=()=>this.setState(state=>({
   Machine2state: !state.Machine2state//false
 })
);
// source={require('../components/roombackground2.jpg')}
  submit(){
     /* user.push({//update*/
      Area.update({
          Light:this.state.Lightstate,
          Pan:this.state.Panstate,
          Machine1:this.state.Machine1state,
          Machine2:this.state.Machine2state,

      })
  }

componentDidMount() {
       const rootRef= firebase.database().ref().child("Area");
       const detailRef= rootRef.child('Messages');
       detailRef.on('value', snap =>{
        this.setState({
          activeSwitch:snap.val(),
          // textcompare: text
        });
       });
}




render() {

if(this.state.activeSwitch == 'true'&&this.state.Lightstate===false) {
           this.setState({Lightstate: true })//&&this.props.navigation.navigate('Home',{cat:'Home',id:'1'});
        }
        else if(this.state.activeSwitch == 'false'&&this.state.Lightstate===true) {
           this.setState({ Lightstate: false })//&&this.props.navigation.navigate('Home',{cat:'Home',id:'1'});
};

    const { navigate } = this.props.navigation;

    return (

      <View style={{ 
         flex:1,
        // width: undefined,
        // height: undefined,
        // backgroundColor: 'rgba(0,0,0,0)',//'transparent',alignItems:'stretch',
        justifyContent: 'flex-start',//  'center', 
        // alignItems: 'center',
        flexDirection: 'column',
        }}>

      <StatusBar
      backgroundColor="yellow"//justifyContent: 'space-between', backgroundColor:'darkorange'
      hidden={true}       
      />

      <View style={styles.partrow}>           
            <View style={{ flex:1,flexDirection:'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'darkorange'}}>                 
                  <Text style= {{fontSize: 25, fontWeight: '900',  color:'black', }}>
                  {this.state.Lightstate}
                  </Text>
                  <Icon name="lightbulb-o" size={30} color="black" />   
            </View> 
                    <View style={{ flex:3,flexDirection:'row',backgroundColor:'skyblue'}}>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Light1</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Light2</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Light3</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Light4</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Light5</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Light6</Text>
                        </View>

                      </View>                             
                
      </View>    

      <View style={styles.partrow}>           
            <View style={{ flex:1,flexDirection:'column', justifyContent: 'flex-start', alignItems: 'center',backgroundColor:'khaki'}}>                 
                  <Text style= {{fontSize: 25, fontWeight: '900',  color:'black', }}>
                  Projector
                  </Text>
                  <Icon name="lightbulb-o" size={30} color="black" />   
            </View> 

                    <View style={{ flex:3,flexDirection:'row',backgroundColor:'lightseagreen'}}>
                          
                    <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Projector1</Text>
                    </View>
                    <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Projector2</Text>
                    </View>
                                                                  
              </View>    
      </View>    


       <View style={styles.partrow}>           
            <View style={{ flex:1,flexDirection:'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'greenyellow'}}>                 
                  <Text style= {{fontSize: 30, fontWeight: '900',  color:'black', }}>
                  Fan
                  </Text>
                  <Icon name="lightbulb-o" size={30} color="black" />   
            </View> 
            <View style={{ flex:3,flexDirection:'row',backgroundColor:'skyblue'}}>
                    <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Fan1</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Fan2</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Fan3</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Fan4</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Fan5</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Fan6</Text>
                        </View>
              </View>                             
              </View>    
    


      <View style={styles.partrow}>           
            <View style={{ flex:1,flexDirection:'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'lime'}}>                 
                  <Text style= {{fontSize: 25, fontWeight: '900',  color:'black', }}>
                  Micro
                  </Text>
                  <Icon name="lightbulb-o" size={30} color="black" />   
            </View> 
                    <View style={{ flex:3,flexDirection:'row',backgroundColor:'pink',}}>
                    <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Micro1</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this._onPressLight } 
                            value={ this.state.Lightstate } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Micro2</Text>
                        </View>
                        
              </View>                             
             
      </View>    
                    
           
     <View style={{flexDirection:'row',flex:1,justifyContent:'center', alignItems:'center' }}>
      <TouchableOpacity  onPress={() => navigate('Home',{cat:'Home',id:'1'})}>
            <Text style= {styles.textbutton}> 
            AreaA 
            </Text>
      </TouchableOpacity>         

       <TouchableHighlight onPress={this.submit.bind(this)}>
          <Text style = {styles.textbutton}   >
              Comfirm        
          </Text>
      </TouchableHighlight>
      </View>
     

    
              
      
       </View>
    );
  }
}
//onPress = {goArea_A}
// justifyContent:'space-between'
const styles = StyleSheet.create({
  
  partrow:{
            flex:1,
            flexDirection: 'row', 
            // justifyContent: 'stretch',//'space-between',
            //alignContent:'stretch',
            //alignItems:'flex-start', 
            //backgroundColor:'yellow',
      },
            // {{justifyContent:'center',fontSize: 30, fontWeight: '900',  color:'black', }}>
      partrow2:{
        flex:1,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        // alignContent:'',
        alignItems:'flex-start',         
        backgroundColor:'lightskyblue',
  },

  partrow3:{
    flex:1,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    // alignContent:'',
    alignItems:'flex-start',     
    backgroundColor:'mediumorchid',
},
partrow4:{
  flex:1,
  flexDirection: 'row', 
  justifyContent: 'space-between',
  // alignContent:'',
  alignItems:'flex-start', 
  backgroundColor:'mediumseagreen',
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

   button: {    
      position: 'relative',
      borderWidth: 5,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'springgreen',
      fontSize: 20,
      borderRadius:8,
      borderWidth: 2,
      alignContent: 'center',
      alignSelf:'center',
      color: 'white',
      fontWeight: 'bold',
      top: 0,
      left: 160,
      width: 90, height: 80,
      borderBottomColor: '#bbb',
      alignItems: 'center',
      fontWeight: 'bold',
      textAlign: 'center',

   },
 
});


