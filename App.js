import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/ListItem';
import GoalForm from './components/Form';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalVisible] = useState(false);

  function handleAddGoal(newGoal) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: newGoal },
    ]);
  }

  function handleDelete(id) {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  }

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button color='#a065ec' title='Add new goal' onPress={openModal} />
        <GoalForm
          visible={modalIsVisible}
          onAddGoal={handleAddGoal}
          onCancel={closeModal}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <GoalItem id={item.id} text={item.text} onDelete={handleDelete} />
            )}
            keyExtractor={(item) => item.id}
            alwaysBoundVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 5,
    paddingVertical: 20,
  },
});
