import React, { useState, useRef ,useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, Text,FlatList, SafeAreaView, StatusBar, TextInput,Image,Keyboard} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { AntDesign } from '@expo/vector-icons';
import { NativeBaseProvider, Modal,Menu,Pressable } from 'native-base';
import Date from '../../assets/Images/Date.png';
import Categories from '../../assets/Images/Categories.png';
import Task from '../../Components/Task';
import WorkingHours from '../../Components/WorkingHours';
import Hours from '../../Hours';
import CalendarScreenStyles from '../../Styles/CalendarScreenStyles';
import { Entypo } from '@expo/vector-icons';

const useKeyboard=()=>{
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
 

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return isKeyboardVisible;
}
export default function App() {
  const[syncVisible,setSyncVisible]=useState(false)
  const isKeyboardOpen = useKeyboard();
  const [selectedDate, setSelectedDate] = useState('');
  const [expand, setExpand] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const[autoScheduleVisible,setAutoScheduleVisible]=useState(false)
  const [category,setCategory]=useState("Categories")
  const [showModal, setShowModal] = useState(false);
  const[overlapAlertVisible,setOverlapAlertVisible]=useState(false)
  const[overlapErrorVisible,setOverlapErrorVisible]=useState(false)
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };
  const toggleExpand = () => {
    if (expand == true) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  };
  const addTask = () => {
    setOverlapAlertVisible(true)
    if (title !== '') {
      setTasks([...tasks, { date: selectedDate, task: title }]);
      setTitle('');
      setShowModal(false);
    }
  };
  return (
    <NativeBaseProvider>
      <SafeAreaView style={CalendarScreenStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View>
        <Menu w="100" trigger={triggerProps => {
                return (
                    <Pressable accessibilityLabel="More options menu" {...triggerProps} style={{alignSelf:"flex-end",width:40,marginBottom:10}}>
                      <Entypo name="dots-three-vertical" size={18} color="#787777" style={{ marginTop: 15 }} />
                    </Pressable>

                )
              }}>
                <Menu.Item onPress={()=>setSyncVisible(true)}>Sync</Menu.Item>
              </Menu>
          <Calendar
          
            onDayPress={handleDayPress}
            markedDates={{
              [selectedDate]: {
                selected: true,
                customStyles: {
                  container: {
                    backgroundColor: '#569AFF',
                    borderRadius: 50,
                  },
                  text: {
                    color: 'white',
                    fontWeight: 'bold',
                  },
                },
              },
            }}
          />
        </View>
        <View style={expand ? CalendarScreenStyles.eventContainer2 : CalendarScreenStyles.eventContainer1}>
          <TouchableOpacity style={CalendarScreenStyles.eventContainerContent} onPress={() => toggleExpand()}>
            <Text style={CalendarScreenStyles.eventContainerTitle}>Todays Tasks</Text>
            {expand ? (
              <AntDesign name="down" size={18} color="#808080" />
            ) : (
              <AntDesign name="up" size={18} color="#808080" />
            )}
          </TouchableOpacity>
          <View>
            <View style={{flex:0.5}}>
          {selectedDate !== '' && (
            <FlatList
              data={tasks.filter((task) => task.date === selectedDate)}
              renderItem={({ item }) =><Task task={item}/> } 
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          )}
         </View>
         {tasks.filter((task) => task.date === selectedDate).length>0&&(
         <View style={CalendarScreenStyles.workingHoursContainer}>
          <Text style={CalendarScreenStyles.workingHoursTitle}>Working Hours</Text>
            
            <FlatList
              data={Hours}
              renderItem={({ item }) =><WorkingHours Hour={item}/> } 
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
        </View>
         )
}
        </View>
        </View>
        {selectedDate !== '' && (
          <TouchableOpacity style={CalendarScreenStyles.addTaskButton} onPress={() => setShowModal(true)}>
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        )}
         <Modal isOpen={showModal} onClose={() => setShowModal(false)} initialFocusRef={initialRef} finalFocusRef={finalRef} style={{justifyContent:isKeyboardOpen?"center":"flex-end"}}>
          <Modal.Content style={{ width: '100%' }}>
            <Modal.Body>
              <Text style={CalendarScreenStyles.modalTitle}>New task</Text>
              <View style={CalendarScreenStyles.modalContainer}>
                <View style={CalendarScreenStyles.modalTextInputContainer}>
                  <TextInput style={{ fontSize: 15, flex: 1 }} onChangeText={(text) => setTitle(text)}value={title} placeholder="Title"/>
                </View>
              </View>
              <View style={CalendarScreenStyles.menuContainer}>
              <Menu w="175" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <View style={CalendarScreenStyles.addCategoryButton}>
                  <Image source={Categories} style={{ height: 17, width: 17 }} resizeMode="contain" />
                  <Text style={{ color: '#808080', paddingHorizontal: 3 }}>{category}</Text>
                </View>
            </Pressable>;
    }}>
        <Menu.Item onPress={()=>setCategory("New")}><AntDesign name="plus" size={20} color="#3584EF" /><Text style={{color:"#3584EF"}}>Add New</Text></Menu.Item>
        <Menu.Item onPress={()=>setCategory("Personal")}>Personal</Menu.Item>
        <Menu.Item onPress={()=>setCategory("Design")}>Design</Menu.Item>
        <Menu.Item onPress={()=>setCategory("Work")}>Work</Menu.Item>
        <Menu.Item onPress={()=>setCategory("Manage Categories")}>Manage Categories</Menu.Item>
        <Menu.Item onPress={()=>setCategory("Sort By")}>Sort By</Menu.Item>
      </Menu>
                <TouchableOpacity style={CalendarScreenStyles.dueDateContainer}>
                  <Image source={Date} style={{ height: 19, width: 19 }} resizeMode="contain" />
                  <Text style={{ color: '#808080', paddingHorizontal: 3 }}>Due Date</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={addTask} style={CalendarScreenStyles.doneButton}>
                <Text style={{ color: 'white' }}>Done</Text>
              </TouchableOpacity>
            </Modal.Body>
          </Modal.Content>

        </Modal>

        <Modal isOpen={syncVisible} onClose={() => setSyncVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content>

            <Modal.Body>
              <Text style={styles.modalHeader}>Confirm</Text>
              <Text>Write your email synced with calender.</Text>
              <View style={styles.editCategoryModalContainer}>
                <TextInput placeholder="Email" style={{marginLeft:10,flex:1}}/>
            </View>
            <View style={styles.modalConfirmationOptionsContainer}>
                <TouchableOpacity onPress={() => setSyncVisible(false)}>
                  <Text style={{ fontSize: 14, fontWeight: 600, color: "#3584EF" }}>Done</Text>
                </TouchableOpacity>
              </View>
            </Modal.Body>
          </Modal.Content>
        </Modal>


        <Modal isOpen={overlapAlertVisible} onClose={() =>setOverlapAlertVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content>

            <Modal.Body>
              <Text style={styles.modalHeader}>Overlap alert</Text>
              <Text>Your newly added calender is overlapping your task, are you sure want to confirm it?</Text>
            <View style={styles.modalConfirmationOptionsContainer}>
                <TouchableOpacity onPress={() => setOverlapAlertVisible(false)} style={{paddingHorizontal:15}}>
                <Text style={{ fontSize: 14, fontWeight: 600, color: "#3584EF" }}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setOverlapErrorVisible(true),setOverlapAlertVisible(false)}}>
            <Text style={{ fontSize: 14, fontWeight: 600, color: "#3584EF" }}>Confirm Overlap</Text>
            </TouchableOpacity>
              </View>
            </Modal.Body>
          </Modal.Content>
        </Modal>




        <Modal isOpen={overlapErrorVisible} onClose={() => setOverlapErrorVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content>

            <Modal.Body>
              <Text style={styles.modalHeader}>Overlap error</Text>
              <Text>This schedule error is overlapping with excising task</Text>
              <View style={styles.overlapErrorContainer}>
                <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
                  <View style={{flexDirection:"row",flex:0.99,alignItems:"center"}}>
                <AntDesign name="clockcircleo" size={14} color="#808080" style={{paddingRight:5}}/>
                <Text>Select available time</Text>
                </View>
                <View style={{width:65,height:32,borderRadius:20,backgroundColor:"#E8F1FD",alignItems:"center",justifyContent:"center"}}>
                  <Text>01:00</Text>
                </View>
                </View>  
            </View>
            <View style={styles.modalConfirmationOptionsContainer}>
                <TouchableOpacity onPress={() => setOverlapErrorVisible(false)} style={{paddingHorizontal:15}}>
                <Text style={{ fontSize: 14, fontWeight: 600, color: "#3584EF" }}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setOverlapErrorVisible(false),setAutoScheduleVisible(true)}}>
            <Text style={{ fontSize: 14, fontWeight: 600, color: "#3584EF" }}>Confirm Overlap</Text>
            </TouchableOpacity>
              </View>
            </Modal.Body>
          </Modal.Content>
        </Modal>



        <Modal isOpen={autoScheduleVisible} onClose={() => setAutoScheduleVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content>

            <Modal.Body>
              <Text style={styles.modalHeader}>Auto schedule</Text>
              <Text>Sechdule this event with auto-sechdule feature.</Text>
              <View style={styles.modalConfirmationOptionsContainer}>
                <TouchableOpacity onPress={() => setAutoScheduleVisible(false)} style={{paddingHorizontal:15}}>
                <Text style={{ fontSize: 14, fontWeight: 600, color: "#3584EF" }}>Deny</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setAutoScheduleVisible(false)}>
            <Text style={{ fontSize: 14, fontWeight: 600, color: "#3584EF" }}>Confirm</Text>
            </TouchableOpacity>
              </View>
            </Modal.Body>
          </Modal.Content>
        </Modal>

      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles=StyleSheet.create({
 

    modalHeader:{
      paddingBottom:"10%",
      fontSize:16,
      fontWeight:600
    },
    modalConfirmationOptionsContainer:{
      alignSelf:"flex-end",
      paddingTop:20,
      flexDirection:"row"
    },
    editCategoryModalContainer:{
      flex:1,
      flexDirection:"row",
      height:44,
      alignItems:"center",
      backgroundColor:"#F5F5F5",
      borderRadius:10,
      marginTop:20
    },
    overlapErrorContainer:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
    }
})