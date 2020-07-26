import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, FlatList, ScrollView} from 'react-native';

const window = Dimensions.get("window");
const height = Dimensions.height;
const width = Dimensions.width;

export default function App() {
  const [message, setMessage] = React.useState(' ');
  const [flag, setFlag] = React.useState(0);
  const [button, setButtons] = React.useState([
    {name: 'Hello', id: 1},
    {name: 'Thank you!', id: 2},
    {name: 'Sorry', id: 3},
    {name: 'Excuse Me', id: 4},
    {name: 'Goodbye', id: 5},
    {name: 'How are you?', id: 6}
  ]);

  const addPhrase = (item) => {
    setButtons(prevItems => {
      return [{name: message, id: button.length + 1}, ...prevItems];
    });
  };
  const deletePhrase = (name) => {
    setButtons(prevItems => {
      return prevItems.filter(item => item.name != name);
    })
  }

  const [display, displayMessage] = React.useState(' ');

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.title}>MASQUE-TXT</Text>

        <TextInput
          style={styles.input}
          placeholder = 'Insert text here:'
          onChangeText = {(val)=> setMessage(val) } >
        </TextInput>

        <Text style={{textAlign: 'center'}}> displayed message: {display} </Text>

        <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={() => addPhrase(message)} style={styles.saveButton}>
          <Text style={{color: '#FFF', fontSize: 18}}>SAVE</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => displayMessage(message)} style={styles.displayButton}>
          <Text style={{color: '#FFF', fontSize: 18}}>DISPLAY</Text>
        </TouchableOpacity>
        </View>

        <Text style={styles.savedTexts}>Saved Messages</Text>
        <View style={styles.line} />

        <View style = {{marginTop: 25}}>
          <FlatList
          numColumns = {2}
          keyExtractor = {(item) => item.id}
          data ={button}
          renderItem = {({item}) => (
            <TouchableOpacity style ={styles.btn} onPress={() => setMessage(item.name)}>
              <Text style ={styles.btnText}> {item.name} </Text>
              <Text style={styles.deleteBtn} onPress= {() => deletePhrase(item.name)}>x</Text>
            </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { //background
    flex: 1,
    backgroundColor: '#E9E3E3',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: width
  },
  title: { //title
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 50,
    marginTop: 550,
    fontFamily: 'serif'
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E9E3E3',
    padding: 20,
    margin: 10,
    width: 300,
    height: 200,
    marginTop: -25,
    fontSize: 20
  },
  btn: {
    flexDirection: "row",
    backgroundColor: '#8C6A6A',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#8C6A6A',
    margin: 5,
    padding: 5,
    paddingRight: 35
  },
  btnText: {
    color: '#FFF',
    textAlign: 'left',
    fontSize: 20
  },
  saveButton: {
    flexDirection:"row",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#B79393',
    marginTop: 15,
    marginRight: 10
  },
  displayButton: {
    flexDirection:"row",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#B79393',
    marginTop: 15
  },
  savedTexts: {
    fontSize: 30,
    fontWeight: 'normal',
    fontFamily: 'Roboto',
    alignSelf: 'flex-start',
    marginLeft: 50,
    color: '#000',
    marginTop: 30
  },
  line: {
    height: 1,
    backgroundColor: '#000',
    paddingHorizontal: 155,
    marginTop: 3
  },
  deleteBtn: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 25,
    marginLeft: 10,
    marginRight: -22,
    paddingTop: -10,
    marginTop: -5
  }

});
