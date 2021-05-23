import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';  

export default class WelcomeScreen extends React.Component{
  render(){
    return (
    <View style={styles.container}>
      <View> <Image style={styles.image} source={require('../assets/notes.jpg')} /> </View>
      <Text style={styles.txt}>Welcome To Notes</Text>
      <TouchableOpacity style={styles.button}
            onPress ={()=>{
               this.props.navigation.navigate("MainScreen")
             }}>
              <Text style={{color:'cyan'}}>Get Started</Text>
            </TouchableOpacity>
            
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#d4c894',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height:150,
    marginBottom:50,
  },
  button:{
    width:200,
    height:60,
    borderRadius:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#571ba6',
    shadowColor: "#000",
    marginTop: 25,
       },
  txt: {
  fontSize:30,
  fontStyle:'bold'
  

  }
});
