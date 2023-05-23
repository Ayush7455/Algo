import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DistractingAppComponentStyles from "../Styles/DistractingAppComponentStyles";

const DistractingApp = ({ app, onSelectApp }) => {
  const toggleSelected = () => {
    onSelectApp(app.id);
  };

  return (
    <View style={DistractingAppComponentStyles.container}>
      <View style={DistractingAppComponentStyles.appInfo}>
        <Image source={app.image} style={DistractingAppComponentStyles.appImage} />
        <Text style={DistractingAppComponentStyles.appName}>{app.appName}</Text>
      </View>
      {app.selected ? (
        <TouchableOpacity onPress={toggleSelected}>
          <Ionicons name="checkbox" size={22} color="#569AFF" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={toggleSelected}>
          <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="#569AFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};



export default DistractingApp;
