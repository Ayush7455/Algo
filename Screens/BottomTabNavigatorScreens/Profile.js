import {React,useState,useRef} from "react"
import {SafeAreaView, StatusBar, Text,View,Image,TouchableOpacity,TouchableWithoutFeedback} from "react-native"
import profileavatar from "../../assets/Images/profileavatar.png"
import { Octicons } from '@expo/vector-icons';
import {NativeBaseProvider,Switch,Radio ,Modal,Button} from "native-base";
import TargetArrow from "../../assets/Images/TargetArrow.png"
import ArchiveTasks from "../../assets/Images/ArchiveTasks.png"
import AnalysisPage from "../../assets/Images/AnalysisPage.png"
import ConnectDevices from "../../assets/Images/ConnectDevices.png"
import FAQS from "../../assets/Images/FAQS.png"
import SignOut from "../../assets/Images/SignOut.png"
import OjinnProfileImage from "../../assets/Images/OjinnProfileImage.png"
import { useNavigation } from "@react-navigation/native";

const Profile=()=>{
    const navigation=useNavigation()
    const[visible,setVisible]=useState(false)
    const [value, setValue] =useState("1 hour")
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const [switchOn, setSwitchOn] = useState(false);

  const handleToggleSwitch = (value) => {
    if (value) {
      setVisible(true);
      setSwitchOn(true);
    } else {
      if (!switchOn) {
        setVisible(false);
      }
      setSwitchOn(false);
    }
  };
    return (
        <NativeBaseProvider>
        <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"}/>
            <View style={{flex:0.1,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image source={profileavatar} style={{height:48,width:48,borderRadius:24,marginRight:"10%"}} resizeMode="contain"/>
                <View>
                <Text style={{color:"#364963",fontSize:16,fontWeight:600}}>Ayush Rastogi</Text>
                <Text style={{color:"#808080",fontSize:12,fontWeight:400}}>20cs3017@rgipt.ac.in</Text>
                </View>
                </View>
                <Octicons name="pencil" size={20} color="#3584EF" />
                </View>
                <TouchableOpacity style={{flex:0.1,flexDirection:"row"}} onPress={()=>navigation.navigate("FocusScreen")}>
                    <View style={{flex:0.9,flexDirection:"row",alignItems:"center",paddingLeft:"4%"}}>
                    <Image source={TargetArrow} style={{width:32,height:32}} resizeMode="contain"/>
                    <View style={{paddingLeft:"10%"}}>
                    <Text style={{fontSize:14,fontWeight:500,color:"#020E1E"}}>Focus Mode</Text>
                    <Text style={{fontSize:12,fontWeight:400,color:"#3584EF"}}>Default Mode</Text>
                    </View>
                    </View>
                    <View style={{flex:0.1,justifyContent:"center",alignItems:"center"}}>
                    <Switch size="sm" value={switchOn} onToggle={handleToggleSwitch}/>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{flex:0.1,flexDirection:"row",alignItems:"center",marginHorizontal:"5%",borderBottomWidth:1,borderBottomColor:"#F5F5F5"}}>
                    <Image source={AnalysisPage} style={{height:25,width:25}}/>
                    <Text style={{paddingLeft:"10%",fontSize:14,fontWeight:500,color:"#020E1E"}}>Analysis Page</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{flex:0.1,flexDirection:"row",alignItems:"center",marginHorizontal:"5%",borderBottomWidth:1,borderBottomColor:"#F5F5F5"}}>
                    <Image source={ArchiveTasks} style={{height:25,width:25}}/>
                    <Text style={{paddingLeft:"10%",fontSize:14,fontWeight:500,color:"#020E1E"}}>Archive Tasks</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{flex:0.1,flexDirection:"row",alignItems:"center",marginHorizontal:"5%",borderBottomWidth:1,borderBottomColor:"#F5F5F5"}}>
                    <Image source={ConnectDevices} style={{height:25,width:25}}/>
                    <Text style={{paddingLeft:"10%",fontSize:14,fontWeight:500,color:"#020E1E"}}>Connect Devices</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{flex:0.1,flexDirection:"row",alignItems:"center",marginHorizontal:"5%",borderBottomWidth:1,borderBottomColor:"#F5F5F5"}}>
                    <Image source={FAQS} style={{height:25,width:25}}/>
                    <Text style={{paddingLeft:"10%",fontSize:14,fontWeight:500,color:"#020E1E"}}>FAQs</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{flex:0.1,flexDirection:"row",alignItems:"center",marginHorizontal:"5%",borderBottomWidth:1,borderBottomColor:"#F5F5F5"}}>
                    <Image source={SignOut} style={{height:25,width:25}}/>
                    <Text style={{paddingLeft:"10%",fontSize:14,fontWeight:500,color:"#FF5F38"}}>Sign Out</Text>

                </TouchableOpacity>
                <View style={{flex:0.3,paddingTop:72}}>
                    <Image source={OjinnProfileImage} style={{height:"100%",width:"100%"}}resizeMode="cover"/>
                    </View>

                    <Modal isOpen={visible} onClose={() => setVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content>
          
          <Modal.Body>
          <Text style={{paddingBottom:"10%",fontSize:16,fontWeight:600}}>For how long?</Text>
          <Radio.Group name="myRadioGroup" accessibilityLabel="Duration" value={value} onChange={nextValue => {
    setValue(nextValue);
  }}
  space={7}>
    
      <Radio value="1 hour" my={1} size="sm">
        1 hour
      </Radio>
      <Radio value="2 hours" my={1} size="sm">
        2 hours
      </Radio>
      <Radio value="3 hours" my={1} size="sm">
        3 hours
      </Radio>
      <Radio value="4 hours" my={1} size="sm">
        4 hours
      </Radio>
      <Radio value="Until I turn it off" my={1} size="sm">
      Until I turn it off
      </Radio>
      <Radio value="Set for Task" my={1} size="sm">
      Set for Task
      </Radio>
    </Radio.Group>
           
          </Modal.Body>
        </Modal.Content>
      </Modal>
        </SafeAreaView>
        </NativeBaseProvider>
    )
}
export default Profile