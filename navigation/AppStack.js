import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import FocusScreen from "../Screens/BottomTabNavigatorScreens/FocusScreen";
import DistractingAppsScreen from "../Screens/BottomTabNavigatorScreens/DistractingAppsScreen";
import WhitelistContactsScreen from "../Screens/BottomTabNavigatorScreens/WhitelistContactsScreen";
import AddContactsScreen from "../Screens/BottomTabNavigatorScreens/AddContactsScreen";
import AddDevicesScreen from "../Screens/BottomTabNavigatorScreens/AddDevicesScreen";
import ManageCategoriesScreen from "../Screens/BottomTabNavigatorScreens/ManageCategoriesScreen";

const Stack=createNativeStackNavigator()

const AppStack=()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="FocusScreen" component={FocusScreen} />
    <Stack.Screen name="DistractingAppsScreen" component={DistractingAppsScreen} />
    <Stack.Screen name="WhitelistContactsScreen" component={WhitelistContactsScreen} />
    <Stack.Screen name="AddContactsScreen" component={AddContactsScreen} />
    <Stack.Screen name="AddDevicesScreen" component={AddDevicesScreen} />
    <Stack.Screen name="ManageCategoriesScreen" component={ManageCategoriesScreen} />
        </Stack.Navigator>
    )
}
export default AppStack