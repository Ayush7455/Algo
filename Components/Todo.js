import React from "react";
import { Text, View, Dimensions, StyleSheet, TouchableOpacity,Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Selected from "../assets/Images/Selected.png"
const width = Dimensions.get("window").width;
const Todo = ({ todo,isSelected }) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("TaskDetailsScreen")}style={isSelected?styles.container2:styles.container1}>
      <View style={isSelected?styles.selectedItem:styles.notSelectedItem}>
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
      {isSelected&&<Image source={Selected} style={{height:25,width:25,marginLeft:10}}/>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container1: {
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
  container2: {
    height: 70,
    marginVertical: 10,
    flexDirection: "row",
    width: width * 0.9,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  selectedItem:{
    flexDirection:"row",alignItems:"center",borderWidth:1,borderColor:"#F5F5F5",borderRadius:10,height:70,flex:1,padding:15
  },
  notSelectedItem:{
    
      flexDirection:"row",alignItems:"center"
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
