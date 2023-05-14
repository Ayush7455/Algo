import {React,useState,useRef} from "react"
import { FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View,Animated ,StyleSheet,useWindowDimensions} from "react-native"
import OnBoardingScreenElements from "../OnBoardingScreenElements"
import OnBoardingScreenItem from "../Components/OnBoardingScreenItem"
import Paginator from "../Components/Paginator"
import { useNavigation } from "@react-navigation/native"

const OnBoardingScreen = () => {
    const[currentIndex,setCurrentIndex]=useState(0)
    const navigation=useNavigation()
    const {width}=useWindowDimensions()
    const scrollx=useRef(new Animated.Value(0)).current
    const onBoardRef=useRef(null)
    const viewableItemsChanged=useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index)
    }).current
    const viewConfig=useRef({viewAreaCoveragePercentThreshold:50}).current
    const scrollToNextItem = () => {
        if (currentIndex < OnBoardingScreenElements.length - 1) {
          onBoardRef.current.scrollToIndex({index: currentIndex + 1})
          setCurrentIndex(currentIndex + 1)
        }
      }
  return (
   <SafeAreaView style={{flex:3,backgroundColor:"white"}}>
    <StatusBar barStyle={"dark-content"} backgroundColor={"white"}/>
    <FlatList data={OnBoardingScreenElements} renderItem={({item})=><OnBoardingScreenItem item={item}/>}
   horizontal
   showsHorizontalScrollIndicator={false}
   pagingEnabled
   bounces={false}
   keyExtractor={(item)=>item.id}
   onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollx}}}],{
    useNativeDriver:false,
   })}
   scrollEventThrottle={32}
   onViewableItemsChanged={viewableItemsChanged}
   viewabilityConfig={viewConfig}
   ref={onBoardRef}
    />
    <View style={{alignItems:"center"}}>
    <Paginator data={OnBoardingScreenElements} scrollx={scrollx}/>
    </View>
    {currentIndex==2?
    <View style={[styles.continueContainer,{width:width}]}>
    <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")} style={styles.continueBtn}><Text style={{color:"white"}}>Continue to login</Text></TouchableOpacity>
    </View>:<View style={[styles.skipnextContainer,{width:width}]}>
    <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")}>
    <Text style={styles.skipText}>Skip for later</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={scrollToNextItem} style={styles.nextBtn}><Text style={{color:"white"}}>Next</Text></TouchableOpacity>
    </View>
}
   </SafeAreaView>

   
  )
}
const styles=StyleSheet.create({
    skipnextContainer:{
        paddingBottom:"10%",
        paddingHorizontal:26,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    continueContainer:{
        paddingBottom:"10%",
        paddingHorizontal:26,
        alignItems:"center",
    },
    skipText:{
        color:"#808080",
        fontSize:14
    },
    nextBtn:{
        height:40,
        width:96,
        backgroundColor:"#3584EF",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    continueBtn:{
        height:40,
        width:320,
        backgroundColor:"#3584EF",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    }



})

export default OnBoardingScreen
