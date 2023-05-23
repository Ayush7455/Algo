import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("window").width;
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Todo = ({ todo }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: todo.color }]}>
        <Feather name="gift" size={24} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.activity}>{todo.activity}</Text>
        <View style={styles.detailsContainer}>
          {todo.duedate && (
            <View style={styles.detailItem}>
              <AntDesign name="calendar" size={18} color="#808080" />
              <Text style={styles.detailText}>{todo.duedate}</Text>
            </View>
          )}
          {todo.duration && (
            <View style={styles.detailItem}>
              <AntDesign name="clockcircleo" size={18} color="#808080" />
              <Text style={styles.detailText}>{todo.duration}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#F5F5F5",
    height: 70,
    marginVertical: 10,
    flexDirection: "row",
    width: width * 0.9,
    alignSelf: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
  },
  iconContainer: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  textContainer: {
    paddingHorizontal: 15,
  },
  activity: {
    fontSize: 14,
    fontWeight: "500",
    paddingBottom: 2,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailText: {
    paddingHorizontal: 5,
  },
});

export default Todo;
