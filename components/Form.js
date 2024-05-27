import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';

function GoalForm(props) {
  const [newGoal, setNewGoal] = useState('');

  function handleInput(text) {
    setNewGoal(text);
  }

  function handleSubmit() {
    props.onAddGoal(newGoal);
    setNewGoal('');
    props.onCancel();
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.formContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.formContainer__image}
        />
        <TextInput
          style={styles.formContainer__input}
          placeholder='Your course goal...'
          value={newGoal}
          onChangeText={handleInput}
        />
        <View style={styles.formContainer__buttonContainer}>
          <View style={styles.formContainer__buttonContainer__button}>
            <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
          </View>
          <View style={styles.formContainer__buttonContainer__button}>
            <Button title='Add goal' onPress={handleSubmit} color='#5e0acc' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  formContainer__input: {
    width: '100%',
    padding: 16,
    borderWidth: 2,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
    color: '#120438',
  },
  formContainer__buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  formContainer__buttonContainer__button: {
    width: 100,
    marginHorizontal: 8,
  },
  formContainer__image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
export default GoalForm;
