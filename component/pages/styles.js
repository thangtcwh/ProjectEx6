const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
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

  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },

  text1:{
  backgroundColor: 'transparent',
  // padding:20,
  justifyContent:'flex-start',
  fontSize: 25,
  //backgroundColor: 'transparent',
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
    color:'#000', textAlign:'center'
  },
  btnText:{
    color:'#fff',fontWeight:'bold'
  },
   icon: {
    width: 24,
    height: 24,
  },

};
