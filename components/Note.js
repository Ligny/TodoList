import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Note extends React.Component {
    render() {
        return(
            <View
            key={this.props.keyval}
            style={styles.note}
            >
                <Text style={styles.notetxt}>{this.props.val.date}</Text>

                <Text style={styles.notetxt}>{this.props.val.note}</Text>

                <TouchableOpacity
                onPress={this.props.deleteMethod}
                style={styles.notedelete}
                >
                    <Text style={styles.notedeletetxt}>x</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  note: {
      position: "relative",
      padding: 20,
      paddingRight: 100,
      borderBottomWidth: 2,
      borderBottomColor: "#ededed",
  },
  notetxt: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: "#000",
  },
  notedelete: {
    position: "absolute",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#59cbbd",
  },
  notedeletetxt: {
      color: "white",
  }
})