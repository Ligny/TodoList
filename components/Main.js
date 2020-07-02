import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Note from "./Note";


export default class Main extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          noteArray: [],
          noteText: "",
      }
  }

  render() {

    let notes = this.state.noteArray.map((val, key) => {
        return <Note
                key={key}
                keyval={key}
                val={val}
                deleteMethod={ () => this.deleteNote(key)} />
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headertxt}>- NOTER -</Text>
        </View>

        <ScrollView style={styles.scrollcontainer}>
            {notes}
        </ScrollView>

        <View style={styles.footer}>
            <TextInput
            style={styles.textinput}
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholder=">note"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            ></TextInput>
        </View>

        <TouchableOpacity
        style={styles.btn}
        onPress={this.addNote.bind(this)}
        >
            <Text style={styles.btntxt}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addNote() {
    if (this.state.noteText) {
        var d = new Date();
        this.state.noteArray.push({
            'date': d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
            'note': this.state.noteText
        });
        this.setState({noteArray: this.state.noteArray})
        this.setState({noteText: ""});
    }
  }

  deleteNote(key) {
      this.state.noteArray.splice(key, 1);
      this.setState({noteArray: this.state.noteArray})
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#36485f",
    alignItems: "center",
    borderBottomWidth: 10,
    justifyContent: "center",
    borderBottomColor: "#ddd",
  },
  headertxt: {
    color: "white",
    fontSize: 18,
    padding: 26,
  },
  scrollcontainer: {
      flex: 1,
      marginBottom: 100,
  },
  footer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
  },
  textinput: {
      alignSelf: "stretch",
      color: "#fff",
      padding: 20,
      backgroundColor: "#36485f",
      borderTopWidth: 2,
      borderTopColor: "#ededed",
  },
  btn: {
      position: "absolute",
      zIndex: 11,
      right: 20,
      bottom: 90,
      width: 90,
      height: 90,
      borderRadius: 50,
      backgroundColor: "#36485f",
      justifyContent: "center",
      alignItems: "center",
  },
  btntxt: {
      color: "#fff",
      fontSize: 24,
  },
});
