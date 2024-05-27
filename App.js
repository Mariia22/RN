import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';

export default function App() {
  const [newGoal, setNewGoal] = useState("")
  const [goals, setGoals] = useState([])

  function handleInput (text) {
    setNewGoal(text)
  }

  function handleAddGoal () {
   setGoals((currentGoals) => [...currentGoals, {id: Math.random().toString(), text: newGoal}])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.formContainer}>
        <TextInput 
          style={styles.formContainer__input} 
          placeholder='Your course goal...'
          onChangeText={handleInput}/>
        <Button 
          style={styles.formContainer__button} 
          title='Add goal'
          onPress={handleAddGoal}/>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
          data={goals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text}/>}
          keyExtractor = {(item)=> item.id}
          alwaysBoundVertical={false}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff', 
  },
  formContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,   
  },
  formContainer__input: {
    width: '70%',
    padding: 10,
    borderWidth: 2,
    borderColor: '#cccccc',
  }, 
  formContainer__button: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "blue"
  },
  listContainer: {
    flex: 5,
    borderTopWidth: 2,
    borderColor: '#cccccc',
    paddingVertical: 20,
  },
});
