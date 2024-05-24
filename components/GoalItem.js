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

})
