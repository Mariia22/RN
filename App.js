import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/ListItem';
import GoalForm from './components/Form';

export default function App() {
  const [goals, setGoals] = useState([]);

  function handleAddGoal(newGoal) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: newGoal },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalForm onAddGoal={handleAddGoal} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
          keyExtractor={(item) => item.id}
          alwaysBoundVertical={false}
        />
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
  listContainer: {
    flex: 5,
    borderTopWidth: 2,
    borderColor: '#cccccc',
    paddingVertical: 20,
  },
});
