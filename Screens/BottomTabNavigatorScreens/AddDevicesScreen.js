import React from "react";
import { SafeAreaView,Text,View,StatusBar,Image } from "react-native";
import MultiDeviceSupport from "../../assets/Images/MultiDeviceSupport.png"
import { TouchableOpacity } from "react-native";
import AddDevicesScreenStyles from "../../Styles/AddDevicesScreenStyles";
const AddDevicesScreen=()=>{
    return(
        <SafeAreaView style={AddDevicesScreenStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={AddDevicesScreenStyles.header}>
        <Image source={MultiDeviceSupport} style={AddDevicesScreenStyles.image}/>
        <Text style={AddDevicesScreenStyles.text}>Use Ojinn on Desktop and Table</Text>
        <TouchableOpacity style={AddDevicesScreenStyles.addButton}>
            <Text style={AddDevicesScreenStyles.addButtonText}>Add Device</Text>
        </TouchableOpacity>
      </View>
      <View style={AddDevicesScreenStyles.addedDevicesHeader}>
        <View style={AddDevicesScreenStyles.addedDevicesTextContainer}>
        <Text style={AddDevicesScreenStyles.addedDevicesTitle}>Added Devices</Text>
        <Text style={AddDevicesScreenStyles.addedDevicesDescription}>longpress to logout </Text>
        </View>
      </View>
      </SafeAreaView>
    )
}
export default AddDevicesScreen
