

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
  TouchableOpacity,
  TouchableHighlight,
  Image,
  StatusBar,
  Alert,
} from 'react-native'

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
  } from "native-base";

import firebase from '../pages/Firebase_configuration.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation'


export default class AreaA extends Component {
constructor(props){
      super(props);
      this.state ={   
          activeSwitch: '',
          
          Light1:false,
          Light2:false,
          Light3:false,
          Light4:false,
          Light5:false,
          Light6:false,

          Projector1:false,
          Projector2:false,

          Fan1:false,
          Fan2:false,
          Fan3:false,
          Fan4:false,
          Fan5:false,
          Fan6:false,

          Micro1:false,
          Micro2:false,

        };  
      console.ignoredYellowBox = [
         'Setting a timer'
       ];
      Area=firebase.database().ref("AreaA/A101");
   }








// _onPressLight=()=>this.setState(state =>({
//     Lightstate:!state.Lightstate
//    })
//  );

Light1_sw=()=>this.setState(state =>({
    Light1:!state.Light1
    })
);

Light2_sw=()=>this.setState(state =>({
    Light2:!state.Light2
    })
);
Light3_sw=()=>this.setState(state =>({
    Light3:!state.Light3
    })
);
Light4_sw=()=>this.setState(state =>({
    Light4:!state.Light4
    })
);
Light5_sw=()=>this.setState(state =>({
    Light5:!state.Light5
    })
);
Light6_sw=()=>this.setState(state =>({
    Light6:!state.Light6
    })
);



Projector1_sw=()=>this.setState(state =>({
    Projector1:!state.Projector1
    })
);

Projector2_sw=()=>this.setState(state =>({
    Projector2:!state.Projector2
    })
);

Fan1_sw=()=>this.setState(state =>({
    Fan1:!state.Fan1
    })
);

Fan2_sw=()=>this.setState(state =>({
    Fan2:!state.Fan2
    })
);

Fan3_sw=()=>this.setState(state =>({
    Fan3:!state.Fan3
    })
);

Fan4_sw=()=>this.setState(state =>({
    Fan4:!state.Fan4
    })
);

Fan5_sw=()=>this.setState(state =>({
    Fan5:!state.Fan5
    })
);

Fan6_sw=()=>this.setState(state =>({
    Fan6:!state.Fan6
    })
);


Micro1_sw=()=>this.setState(state =>({
    Micro1:!state.Micro1
    })
);

Micro2_sw=()=>this.setState(state =>({
    Micro2:!state.Micro2
    })
);


submit(){
    Area.child('Light').update({
                    Light1:this.state.Light1,
                    Light2:this.state.Light2,
                    Light3:this.state.Light3,
                    Light4:this.state.Light4,
                    Light5:this.state.Light5,
                    Light6:this.state.Light6,
      });        

    Area.child('Fan').update({
                    Fan1:this.state.Fan1,
                    Fan2:this.state.Fan2,
                    Fan3:this.state.Fan3,
                    Fan4:this.state.Fan4,
                    Fan5:this.state.Fan5,
                    Fan6:this.state.Fan6,
      });

    Area.child('Micro').update({
                    Micro1:this.state.Micro1,
                    Micro2:this.state.Micro2,
      });

    Area.child('Projector').update({
                    Projector1:this.state.Projector1,
                    Projector2:this.state.Projector2,
      });
      
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
    const { navigate } = this.props.navigation;
    
    if(this.state.activeSwitch == 'true'&&this.state.Lightstate===false) {
        this.setState({Lightstate: true })
    }
    else if(this.state.activeSwitch == 'false'&&this.state.Lightstate===true) {
        this.setState({ Lightstate: false })
    };


    return (

    <View style={{  flex:1,   justifyContent: 'flex-start',  flexDirection: 'column',}}>
    <StatusBar  backgroundColor="yellow" hidden={true}/>
    <Header>                        
            <Left>
                        <Button transparent onPress={() => navigate('BeginA',{cat:'BeginA',id:'2'})}>
                        <Icon name="arrow-back" />
                        </Button>
            </Left>

            <Right>
                <Title>A101</Title>
            </Right>
    </Header>


    <View style={styles.partrow}>           
            <View style={{ flex:1,flexDirection:'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'greenyellow'}}>                 
                  <Text style= {{fontSize: 30, fontWeight: '900',  color:'white', }}>
                  Fan
                  </Text>
                  <MaterialCommunityIcons name="oil-temperature" size={30} color="white" />   
            </View> 
            <View style={{ flex:3,flexDirection:'row',backgroundColor:'skyblue'}}>
                    <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Fan1_sw } 
                            value={ this.state.Fan1 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Fan1</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Fan2_sw } 
                            value={ this.state.Fan2 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Fan2</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Fan3_sw } 
                            value={ this.state.Fan3 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Fan3</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Fan4_sw } 
                            value={ this.state.Fan4 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Fan4</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Fan5_sw } 
                            value={ this.state.Fan5 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Fan5</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Fan6_sw } 
                            value={ this.state.Fan6 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Fan6</Text>
                        </View>
              </View>                             
              </View>        

    <View style={styles.partrow}>           
            <View style={{ flex:1,flexDirection:'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'cornflowerblue'}}>                 
                  <Text style= {{fontSize: 25, fontWeight: '900',  color:'white', }}>
                    Light  
                   </Text>
                  <MaterialIcons name="flash-on" size={30} color="white" />   
            </View> 
            
            <View style={{ flex:3,flexDirection:'row',backgroundColor:'navajowhite'}}>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Light1_sw } 
                            value={ this.state.Light1 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Light1</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Light2_sw } 
                            value={ this.state.Light2 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Light2</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Light3_sw } 
                            value={ this.state.Light3 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Light3</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Light4_sw } 
                            value={ this.state.Light4 }
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Light4</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Light5_sw } 
                            value={ this.state.Light5 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Light5</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Light6_sw } 
                            value={ this.state.Light6 }
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Light6</Text>
                        </View>

                </View>                             
                
      </View>       
    
      <View style={styles.partrow}>           
            <View style={{ flex:1,flexDirection:'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'lime'}}>                 
                  <Text style= {{fontSize: 25, fontWeight: '900',  color:'white', }}>
                  Micro
                  </Text>
                  <Foundation name="microphone" size={30} color="white" />   
            </View> 
                    <View style={{ flex:3,flexDirection:'row',backgroundColor:'pink',}}>
                    <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Micro1_sw } 
                            value={ this.state.Micro1 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Micro1</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Micro2_sw } 
                            value={ this.state.Micro2 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Micro2</Text>
                        </View>                        
              </View>                                          
      </View>    
    
      <View style={styles.partrow}>           
            <View style={{ flex:1,flexDirection:'column', justifyContent: 'flex-start', alignItems: 'center',backgroundColor:'palegreen'}}>                 
                  <Text style= {{fontSize: 25, fontWeight: '900',  color:'white', }}>
                  Projector
                  </Text>
                  <Foundation name="projection-screen" size={30} color="white" />   
            </View> 

                    <View style={{ flex:3,flexDirection:'row',backgroundColor:'lightseagreen'}}>
                          
                    <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Projector1_sw } 
                            value={ this.state.Projector1 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Projector1</Text>
                    </View>
                    <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Switch 
                            onValueChange={ this.Projector2_sw } 
                            value={ this.state.Projector2 } 
                            onTintColor='aquamarine'
                            thumbTintColor='aqua'
                            />
                            <Text>Projector2</Text>
                    </View>
                                                                  
              </View>    
      </View>  
                    
           
     <View style={{flexDirection:'row',flex:1,justifyContent:'center', alignItems:'center' }}>
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

const styles = StyleSheet.create({
  
partrow:{
        flex:1,
        flexDirection: 'row', 
},
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


{/*   <TouchableOpacity  onPress={() => navigate('Home',{cat:'Home',id:'1'})}>
            <Text style= {styles.textbutton}> 
            AreaA 
            </Text>
      </TouchableOpacity>   */}