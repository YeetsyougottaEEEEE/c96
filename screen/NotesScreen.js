import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollViewComponent, ScrollView, TextInput } from 'react-native';

export default class NotesScreen extends React.Component{
  render(){
    return (
    <View key={this.props.keyvalue} style={styles.note}>
     
     <Text style={styles.noteTxt}>{this.props.val.date}</Text>
     <Text style={styles.noteTxt}>{this.props.val.note}</Text>

     <TouchableOpacity onPress={this.props.deleteText} style={styles.delete}>
     <Text style={styles.noteDelTxt}>Delete</Text>
     </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  note: {
    backgroundColor: '#b7edca',
    position:'relative',
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor:'yellow'
  },
  noteTxt:{
  paddingLeft:20,
  borderLeftWidth:10,
  borderLeftColor:'green'
  },
  delete: {
  position:'absolute',
  justifyContent:'center',
  allingItems:'center',
  backgroundColor:'#5DE57F',
  padding:10,
  top:10,
  bottom:10,
  right:10,
  },
  noteDelTxt: {
  color:'white'
  },
});