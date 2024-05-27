import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

function GoalForm(props) {
  const [newGoal, setNewGoal] = useState('');

  function handleInput(text) {
    setNewGoal(text);
  }

  function handleSubmit() {
    props.onAddGoal(newGoal);
    setNewGoal('');
  }

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.formContainer__input}
        placeholder='Your course goal...'
        value={newGoal}
        onChangeText={handleInput}
      />
      <Button
        style={styles.formContainer__button}
        title='Add goal'
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  formContainer__button: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'blue',
  },
  formContainer__input: {
    width: '70%',
    padding: 10,
    borderWidth: 2,
    borderColor: '#cccccc',
  },
});
export default GoalForm;
