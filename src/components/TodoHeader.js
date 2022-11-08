import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import {addTodo, deleteTodo} from '../../redux/action';
import {connect} from 'react-redux';

// const data = [
//   {
//     id: 1,
//     title: 'AAayushi',
//   },

//   {
//     id: 2,
//     title: 'Agarwal',
//   },
// ];
const TodoHeader = ({todo_list, addTodo, deleteTodo}) => {
    const [task, setTask] = React.useState('');

  const handleAddTodo = () => {

    addTodo(task);
    setTask('')
  };
  const handleDeleteTodo = id => {
    deleteTodo(id);
  };
 
  return (
    <View>
      <Text style={styles.hearderTextSttle}>TodoList</Text>
      <View style={styles.inputViewStyle}>
        <TextInput
          style={styles.inputTextStyle}
          placeholder="Todo List"
          onChangeText={text => setTask(text)}
          value={task}></TextInput>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={handleAddTodo}>
          <Text style={{color: 'white'}}>Add</Text>
        </TouchableOpacity>
        <FlatList
          data={todo_list}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={styles.item}>
                <Text style={styles.title}>{item.task}</Text>

                <TouchableOpacity
                  style={styles.delete}
                  onPress={() => handleDeleteTodo(item.id)}>
                  <Text style={styles.delete}> Delete</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hearderTextSttle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  inputTextStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
  },
  inputViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: 'black',
    padding: 10,
    margin: 10,
    width: '20%',
    borderRadius: 5,
    alignItems: 'center',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  delete: {
    fontSize: 24,
    color: 'red',
  },
});
const mapStateToProps = (state, ownProps) => {
  return {
    todo_list: state.reducer.todo_list,
  
        // ToastAndroid.show('this is toast '+todo,2000)

  };
};

const mapDispatchToProps = {addTodo, deleteTodo};

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader);
