import React from "react"
import {SafeAreaView, StatusBar, Text,View} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "./BottomTabNavigatorScreens/Profile";
import Calendar from "./BottomTabNavigatorScreens/Calendar";
import To_Dos from "./BottomTabNavigatorScreens/To_Dos";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const HomeScreen=()=>{
    const Tab = createBottomTabNavigator();
    const CustomTabLabel = ({ label, focused }) => (
      <Text style={{ fontSize:12, fontWeight: focused?600:500,color:focused?"#3584EF":"#808080" }}>
        {label}
      </Text>
    );
 return(
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"}/>
        <Tab.Navigator
        screenOptions={({ route }) =>({
          tabBarStyle:{elevation:0,borderTopWidth:0,shadowOpacity: 0,height:67,paddingBottom:7},
          headerShown:false,
          tabBarLabel: ({ focused }) => (
            <CustomTabLabel
              label={route.name}
              focused={focused}
            />
          )
          
        })}
      >
      <Tab.Screen name="To-Dos" component={To_Dos} options={{
            tabBarIcon: ({ color }) => (
               <Entypo name="text-document" size={24} color={color} />
            ),
          }} />
      <Tab.Screen name="Calendar" component={Calendar} options={{
            tabBarIcon: ({ color }) => (
               <AntDesign name="calendar" size={24} color={color} />
            ),
          }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon: ({ color }) => (
               <AntDesign name="user" size={24} color={color} />
            ),
          }} />
    </Tab.Navigator>
    </SafeAreaView>
 )

}
export default HomeScreen