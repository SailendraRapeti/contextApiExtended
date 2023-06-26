import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Context from './Context';

interface Iprops {
  navigation?: any;
}

export default class Screen1 extends Component<Iprops> {
  state = {
    newTask: '',
  };
  // onNext=()=>{
  //   this.props.navigation.na
  // }
  static contextType = Context;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TextInput
              style={styles.input}
              onChangeText={x => {
                this.setState({newTask: x});
              }}
              placeholder="Add a new Task"
            />
            <TouchableOpacity
              style={{
                height: 35,
                width: 80,
                padding: 9,
                backgroundColor: 'black',
                alignItems: 'center',
                marginLeft: 5,
                marginTop: 4,
              }}>
              <Text
                style={{color: 'white'}}
                onPress={() => this.context.addNewTask(this.state.newTask)}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                height: 35,
                width: 80,
                padding: 9,
                backgroundColor: 'black',
                alignItems: 'center',
                marginLeft: 5,
                marginTop: 20,
              }}>
              <Text
                style={{color: 'white'}}
                onPress={() => {
                  this.props.navigation.navigate('Screen1');
                }}>
                previous 
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={this.context.tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={styles.rowcontainer}>
                <Text style={styles.text}>{item}</Text>
                <Text
                  style={styles.delete}
                  onPress={() => {
                    this.context.deleteTask(index);
                  }}>
                  delete
                </Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  rowcontainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  title: {
    marginTop: 20,
    marginLeft: 130,
    fontSize: 30,
    color: 'black',
    marginBottom: 30,
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
  delete: {
    alignSelf: 'flex-end',
    padding: 8,
    fontSize: 15,
    color: 'black',
  },
  input: {
    width: '75%',
    borderRadius: 30,
    borderWidth: 1,
    padding: 5,
    marginLeft: 10,
    fontSize: 18,
  },
});
