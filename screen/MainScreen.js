import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollViewComponent, ScrollView, TextInput } from 'react-native';
import NotesScreen from '../screen/NotesScreen'

export default class MainScreen extends React.Component{

constructor(props){
super(props),
this.state={
  noteArry:[],
  noteText:''
}
}

  render(){
    
    var notes=this.state.noteArry.map((val,key)=>{
      return <NotesScreen key={key} keyVal={key} deletetext={()=>this.deleteNote(key)} />
    })
    return (
    <View style={styles.container}>
     
     <View style={styles.header}>
       <Text style={styles.headerTxt}>- NOTER -</Text>
     </View>
     <ScrollView style={styles.scrollContainer}>
       {NotesScreen}
       </ScrollView>
    <View style={styles.viewTagTwo}>
      <TextInput styles={styles.textInput} placeholder='New Note' placeholderTextColor='cream'
       onChangeText={(noteText)=>this.setState({noteText})}
       value={this.state.noteText}
       >
      </TextInput>
      </View> 
      <TouchableOpacity styles={styles.touchableOP} onPress={this.addNote.bind(this)}>
      <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
addNote(){
  if(this.state.noteText){
    var B = new Date()
    this.state.noteArry.push({
      'day':B.getFullYear(),/*+
      '/':(B.getMonth()+1)+
      '/':(B.getDate()),*/
      'note':this.state.noteText
    })
    this.setState({noteArry:this.state.noteArry})
    this.setState({noteText:''})
  }
}
deleteNote(key){
this.state.noteArry.splice(key,1)
this.setState({noteArry:this.state.noteArry})
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7edca', 
  },
  header:{
  backgroundColor:'brown',
  allingItems:'center',
  justifyContent:'center',
  borderBottomWidth:10,
  borderBottomColor:'yellow'
  },
  headerTxt: {
  color:'darkBrown',
  fontSize:18,
  padding:25,
  },
  viewTagTwo: {
  backgroundColor:''
  },
  textInput: {
  padding:5,
  margin:7,
  borderColor:'red',
  width: 80,
  height: 20,
  },
  touchableOP: {
  position:'absolute',
  bottom:90,
  right:20,
  width:90,
  height:90,
  backgroundColor:'#BFFF00',
  allingItems:'center',
  borderRadius:50,
  justifyContent:'center'
  },
  plus: {
  color:'#ffd700',
  fontSize:30,
  },
  scrollContainer:{
    flex:1,
    marginBottom:100
  }
});