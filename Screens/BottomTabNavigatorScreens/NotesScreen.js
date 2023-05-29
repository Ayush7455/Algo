import React from "react";
import { Text, View, StatusBar, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const NotesScreen = () => {
    const navigation=useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notes</Text>
        </View>
      </View>

      <View style={styles.notesContainer}>
        <Text style={styles.notesText}>Design Ojinn flow for UI</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder="Add Notes" placeholderTextColor="#808080" multiline={true} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 500,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.99
  },
  backButton: {
    marginRight: 8,
  },
  notesContainer: {
    flex: 0.05,
    paddingTop: 10,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  notesText: {
    fontSize: 16,
    fontWeight:600
  },
  textInputContainer: {
    flex: 0.95,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    textAlignVertical: 'top',
    borderColor:"black",    
    height:"100%",
    width:"100%",
    fontSize: 16,
  },
});

export default NotesScreen;
