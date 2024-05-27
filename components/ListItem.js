import { Text, View, StyleSheet } from "react-native";

function GoalItem (props) {

  return ( 
    <View style={styles.listContainer__item}>
      <Text style={styles.listContainer__text}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listContainer__item: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'purple',
    borderRadius: 6
  },
  listContainer__text: {
    color: '#ffffff'
  }
})
