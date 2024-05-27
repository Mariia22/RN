import { Text, View, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.listContainer__item}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => pressed && styles.listContainer__item_pressed}
        onPress={props.onDelete.bind(this, props.id)}
      >
        <Text style={styles.listContainer__text}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listContainer__item: {
    marginVertical: 5,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
  },
  listContainer__item_pressed: {
    opacity: 0.3,
  },
  listContainer__text: {
    padding: 10,
    color: '#ffffff',
  },
});
