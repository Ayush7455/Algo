import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import TaskComponentStyles from "../Styles/TaskComponentStyles";

const screenWidth = Dimensions.get("window").width;

const Task = ({ task }) => {
  return (
    <View style={[TaskComponentStyles.container,{ marginLeft: screenWidth * 0.05,
      marginRight: screenWidth * 0.05,
      width: screenWidth * 0.9,}]}>
      <View style={[TaskComponentStyles.colorBar,{backgroundColor:task.color?task.color:"#0396FF"}]} />
      {task.task&&<Text style={TaskComponentStyles.taskText}>{task.task}</Text>}
      {task.category&&<Text style={TaskComponentStyles.taskText}>{task.category}</Text>}
    </View>
  );
};



export default Task;