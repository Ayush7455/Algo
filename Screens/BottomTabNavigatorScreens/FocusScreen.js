import React from "react"
import { StatusBar, TouchableOpacity } from "react-native"
import {SafeAreaView, Text,View,Image} from "react-native"
import { Select,CheckIcon,NativeBaseProvider,Modal,Radio } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useRef } from "react"
import Focus_type from "../../assets/Images/Focus_type.png"
import { AntDesign } from '@expo/vector-icons';
import ConnectDevices from "../../assets/Images/ConnectDevices.png"
import DistractingApps from "../../assets/Images/DistractingApps.png"
import WhitelistContacts from "../../assets/Images/WhitelistContacts.png"
import AutoFocus from "../../assets/Images/AutoFocus.png"
import { Feather } from '@expo/vector-icons';

const FocusScreen=()=>{
    const navigation=useNavigation()
    const[visible,setVisible]=useState(false)
    const [value, setValue] =useState("Default Mode")
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    return(
        <NativeBaseProvider>
        <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"white"}/>
            <View style={{flex:0.1,padding:"5%"}}>
            <Text style={{fontSize:16,fontWeight:600}}>
                Focus Mode
            </Text>
            <Text style={{fontSize:12,fontWeight:400,color:"#808080",lineHeight:16}}>
            When you need time to focus on particular task, you can block/ pause distracting apps and hide their notifications
            </Text>
            </View>
            <TouchableOpacity style={{flex:0.15,borderBottomWidth:1,borderBottomColor:"#F5F5F5",alignItems:"center",marginHorizontal:"5%",flexDirection:"row"}} onPress={()=>setVisible(true)}>
                <View style={{flexDirection:"row",alignItems:"center",flex:0.95}}>
            <Image source={Focus_type} style={{height:16,width:16}}/>
            <View style={{paddingLeft:"10%"}}>
                    <Text style={{fontSize:14,fontWeight:500,color:"#020E1E"}}>Focus Mode</Text>
                    <Text style={{fontSize:12,fontWeight:400,color:"#3584EF"}}>{value}</Text>
                    </View>
                    </View>
                    <View style={{flex:0.05}}>
                    <AntDesign name="down" size={16} color="black" />
                    </View>
                    
            </TouchableOpacity>
            <TouchableOpacity style={{flex:0.1,borderBottomWidth:1,borderBottomColor:"#F5F5F5",alignItems:"center",marginHorizontal:"5%",flexDirection:"row"}}>
                <View style={{flexDirection:"row",alignItems:"center",flex:0.95}}>
            <Image source={DistractingApps} style={{height:16,width:16}}/>
            <View style={{paddingLeft:"10%"}}>
                    <Text style={{fontSize:14,fontWeight:500,color:"#020E1E"}}>Distracting Apps</Text>
                    </View>
                    </View>
                    <View style={{flex:0.05}}>
                    <Feather name="info" size={18} color="#808080" />
                    </View>
                    
            </TouchableOpacity>
            <TouchableOpacity style={{flex:0.1,borderBottomWidth:1,borderBottomColor:"#F5F5F5",alignItems:"center",marginHorizontal:"5%",flexDirection:"row"}} >
                <View style={{flexDirection:"row",alignItems:"center",flex:0.95}}>
            <Image source={WhitelistContacts} style={{height:16,width:16}} resizeMode="contain"/>
            <View style={{paddingLeft:"10%"}}>
                    <Text style={{fontSize:14,fontWeight:500,color:"#020E1E"}}>Whitelist Contacts</Text>
                    </View>
                    </View>
                    
            </TouchableOpacity>
            <TouchableOpacity style={{flex:0.1,borderBottomWidth:1,borderBottomColor:"#F5F5F5",alignItems:"center",marginHorizontal:"5%",flexDirection:"row"}} >
                <View style={{flexDirection:"row",alignItems:"center",flex:0.95}}>
            <Image source={ConnectDevices} style={{height:16,width:16}}/>
            <View style={{paddingLeft:"10%"}}>
                    <Text style={{fontSize:14,fontWeight:500,color:"#020E1E"}}>Connect Devices</Text>
                   
                    </View>
                    </View>
                    
            </TouchableOpacity>
            <TouchableOpacity style={{flex:0.1,borderBottomWidth:1,borderBottomColor:"#F5F5F5",alignItems:"center",marginHorizontal:"5%",flexDirection:"row"}} >
                <View style={{flexDirection:"row",alignItems:"center",flex:0.95}}>
            <Image source={AutoFocus} style={{height:16,width:16}}/>
            <View style={{paddingLeft:"10%"}}>
                    <Text style={{fontSize:14,fontWeight:500,color:"#020E1E"}}>Schedule Auto Focus</Text>
                   
                    </View>
                    </View>
                    
            </TouchableOpacity>
            <Modal isOpen={visible} onClose={() => setVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content>
          
          <Modal.Body>
          <Text style={{paddingBottom:"10%",fontSize:16,fontWeight:600}}>Select focus mode</Text>
          <Radio.Group name="myRadioGroup" accessibilityLabel="FocusMode" value={value} onChange={nextValue => {
    setValue(nextValue);
  }}
  space={7}>
    
      <Radio value="Default Mode" my={1} size="sm">
        Default Mode
      </Radio>
      <Radio value="No Call Mode" my={1} size="sm">
        No Call Mode
      </Radio>
      <Radio value="No Notification Mode" my={1} size="sm">
        No Notification Mode
      </Radio>
      <Radio value="Full Focus Mode" my={1} size="sm">
        Full Focus Mode
      </Radio>
    </Radio.Group>
           
          </Modal.Body>
        </Modal.Content>
      </Modal>
            </SafeAreaView>
            </NativeBaseProvider>
        
    )
}
export default FocusScreen