import React, { useContext, useState, useRef } from "react";
import {
  SafeAreaView, StatusBar, Text, View, Dimensions, ScrollView, Image, StyleSheet, TouchableOpacity,
  Animated, TextInput
} from "react-native";
import { Modal, NativeBaseProvider, Menu, Pressable, Radio } from "native-base"
import { SwipeListView } from "react-native-swipe-list-view";
import { AuthContext } from "../../navigation/AuthProvider";
import { AntDesign } from '@expo/vector-icons';
import TodayTodos from "../../TodayTodos";
import Todo from "../../Components/Todo";
import UpcomingTodos from "../../UpcomingTodos";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import To_DosScreenStyles from "../../Styles/To_DosScreenStyles";
const images = [
  require("../../assets/Images/TaskManagement.png"),
  require("../../assets/Images/FocusMode.png"),
  require("../../assets/Images/MultiDeviceSupport.png"),
];
const width = Dimensions.get("window").width

const To_Dos = () => {
  const navigation = useNavigation()
  const { user } = useContext(AuthContext);
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [imgActive, setImgActive] = useState(0);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const todaysTasksExpandAnimation = useRef(new Animated.Value(0)).current;
  const upcomingTasksExpandAnimation = useRef(new Animated.Value(0)).current;
  const [isExpanded1, setIsExpanded1] = useState(false); // Initially expanded
  const [isExpanded2, setIsExpanded2] = useState(false); // Initially expanded
  const [searchSelected, setsearchSelected] = useState(false);
  const [sortValue, setSortValue] = useState("")
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [confirmVisible, setConfirmVisible] = useState(false)
  const [sortVisible, setSortVisible] = useState(false)


  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  };

  const handleButtonPress = (index) => {
    setSelectedButtonIndex(index);
  };

  const handleExpandPress1 = () => {
    setIsExpanded1(!isExpanded1);
    Animated.timing(todaysTasksExpandAnimation, {
      toValue: isExpanded1 ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleExpandPress2 = () => {
    setIsExpanded2(!isExpanded2);
    Animated.timing(upcomingTasksExpandAnimation, {
      toValue: isExpanded2 ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const renderTodoItem = ({ item }) => (
    <Todo todo={item} />
  );

  const renderHiddenItem = () => (
    <View style={[To_DosScreenStyles.rowBack, { width: width * 0.89, }]}>
      <TouchableOpacity style={To_DosScreenStyles.selectButton}>
        <AntDesign name="checkcircleo" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setConfirmVisible(true)} style={[To_DosScreenStyles.backRightBtn, To_DosScreenStyles.backRightBtnRight]}>
        <AntDesign name="delete" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );


  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
        <ScrollView>
          <View style={To_DosScreenStyles.topContainer}>
            <View style={To_DosScreenStyles.welcomeContainer}>
              <Text style={To_DosScreenStyles.userNameText}>Hello {user.displayName} ,
              </Text>
              <Text style={To_DosScreenStyles.welcomeText}>
                We hope you are having a great day!
              </Text>
            </View>
            <View style={{ width: width * 0.9, height: height * 0.25 }}>
              <ScrollView
                onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={{ width: width * 0.9, height: height * 0.25 }}
              >
                {images.map((e, index) => (
                  <Image
                    key={e}
                    resizeMode="stretch"
                    style={{ width: width * 0.9, height: height * 0.25 }}
                    source={e}
                  />
                ))}
              </ScrollView>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              {images.map((e, index) => (
                <Text
                  key={e}
                  style={[
                    imgActive === index ? To_DosScreenStyles.dotActive : To_DosScreenStyles.dotInactive,
                    { fontSize: 20, fontWeight: 900 },
                  ]}
                >
                  .
                </Text>
              ))}
            </View>
          </View>



          <View>
            <View style={To_DosScreenStyles.taskContainer}>
              {searchSelected ? <View style={[To_DosScreenStyles.searchContainer, { width: width * 0.95, }]}><TouchableOpacity onPress={() => setsearchSelected(false)}><Ionicons name="arrow-back-sharp" size={21} color="#808080" /></TouchableOpacity><TextInput placeholder="Search your Tasks" style={{ flex: 1, paddingLeft: 10 }} /><Ionicons name="search-outline" size={20} color="#3584EF" /></View> :
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 15 }}>
                  <View style={To_DosScreenStyles.taskCategoriesContainer}>
                    <TouchableOpacity
                      style={[
                        To_DosScreenStyles.button,
                        selectedButtonIndex === 0 && { backgroundColor: "#3584EF" },
                      ]}
                      onPress={() => handleButtonPress(0)}
                    >
                      <Text style={[To_DosScreenStyles.buttonText, selectedButtonIndex === 0 && { color: "white" }]}>
                        All Tasks
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        To_DosScreenStyles.button,
                        selectedButtonIndex === 1 && { backgroundColor: "#3584EF" },
                      ]}
                      onPress={() => handleButtonPress(1)}
                    >
                      <Text style={[To_DosScreenStyles.buttonText, selectedButtonIndex === 1 && { color: "white" }]}>
                        Personal
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        To_DosScreenStyles.button,
                        selectedButtonIndex === 2 && { backgroundColor: "#3584EF" },
                      ]}
                      onPress={() => handleButtonPress(2)}
                    >
                      <Text style={[To_DosScreenStyles.buttonText, selectedButtonIndex === 2 && { color: "white" }]}>
                        Design
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        To_DosScreenStyles.button,
                        selectedButtonIndex === 3 && { backgroundColor: "#3584EF" },
                      ]}
                      onPress={() => handleButtonPress(3)}
                    >
                      <Text style={[To_DosScreenStyles.buttonText, selectedButtonIndex === 3 && { color: "white" }]}>
                        Work
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        To_DosScreenStyles.button,
                        selectedButtonIndex === 4 && { backgroundColor: "#3584EF" },
                      ]}
                      onPress={() => handleButtonPress(4)}
                    >
                      <Text style={[To_DosScreenStyles.buttonText, selectedButtonIndex === 4 && { color: "white" }]}>
                        Manage Categories
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              }

              <Menu w="175" trigger={triggerProps => {
                return (
                  searchSelected ? null :
                    <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                      <Entypo name="dots-three-vertical" size={16} color="#787777" style={{ marginTop: 15 }} />
                    </Pressable>

                )
              }}>
                <Menu.Item onPress={() => setsearchSelected(true)}>Search</Menu.Item>
                <Menu.Item onPress={() => navigation.navigate("ManageCategoriesScreen")}>Manage Categories</Menu.Item>
                <Menu.Item onPress={() => setSortVisible(true)} >Sort By</Menu.Item>
              </Menu>

            </View>
            <TouchableOpacity
              style={To_DosScreenStyles.tasksCollapsableContainer}
              onPress={handleExpandPress1}
            >
              <Text style={To_DosScreenStyles.collapsableContainerText}>Todays Tasks</Text>
              <AntDesign name={isExpanded1 ? "up" : "down"} size={18} color="#808080" />
            </TouchableOpacity>
            <Animated.View
              style={[
                To_DosScreenStyles.expandedView,
                {
                  height: todaysTasksExpandAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, isExpanded1 ? height * 0.35 : 0],
                  }),
                },
              ]}
            >
              <SwipeListView
                data={TodayTodos}
                renderItem={renderTodoItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                rightOpenValue={-110}
                disableRightSwipe
                renderHiddenItem={renderHiddenItem}
              />
            </Animated.View>
            <TouchableOpacity
              style={To_DosScreenStyles.tasksCollapsableContainer}
              onPress={handleExpandPress2}
            >
              <Text style={To_DosScreenStyles.collapsableContainerText}>Upcoming Tasks</Text>
              <AntDesign name={isExpanded2 ? "up" : "down"} size={18} color="#808080" />
            </TouchableOpacity>
            <Animated.View
              style={[
                To_DosScreenStyles.expandedView,
                {
                  height: upcomingTasksExpandAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, isExpanded2 ? height * 0.35 : 0],
                  }),
                },
              ]}
            >
              <SwipeListView
                data={UpcomingTodos}
                renderItem={renderTodoItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                rightOpenValue={-110}
                disableRightSwipe
                renderHiddenItem={renderHiddenItem}
              />

            </Animated.View>
          </View>
        </ScrollView>

        <TouchableOpacity style={To_DosScreenStyles.addTaskButton}>
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>

        <Modal isOpen={confirmVisible} onClose={() => setConfirmVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content>

            <Modal.Body>
              <Text style={To_DosScreenStyles.modalConfirmationText}>Delete Task</Text>
              <Text>Are you sure you want to delete this task?</Text>
              <View style={To_DosScreenStyles.modalConfirmationOptionsContainer}>
                <TouchableOpacity onPress={() => setConfirmVisible(false)}>
                  <Text style={{ fontSize: 14, fontWeight: 600, paddingHorizontal: 20, color: "#3584EF" }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setConfirmVisible(false)}>
                  <Text style={{ fontSize: 14, fontWeight: 600, color: "#3584EF" }}>Delete</Text>
                </TouchableOpacity>
              </View>

            </Modal.Body>
          </Modal.Content>
        </Modal>


        <Modal isOpen={sortVisible} onClose={() => setSortVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content>

            <Modal.Body>
              <Text style={{ paddingBottom: "10%", fontSize: 16, fontWeight: 600 }}>Sort By</Text>
              <Radio.Group name="myRadioGroup" accessibilityLabel="SortBy" sortValue={sortValue} onChange={nextValue => {
                setSortValue(nextValue);
              }}
                space={7}>

                <Radio value="Due Date" my={1} size="sm">
                  Due Date
                </Radio>
                <Radio value="Task Creation Time" my={1} size="sm">
                  Task Creation Time
                </Radio>
                <Radio value="Alphabetical A-Z" my={1} size="sm">
                  Alphabetical A-Z
                </Radio>
                <Radio value="Alphabetical Z-A" my={1} size="sm">
                  Alphabetical Z-A
                </Radio>
              </Radio.Group>

            </Modal.Body>
          </Modal.Content>
        </Modal>

      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default To_Dos;
