import React from "react"
import {Text,View,Image, TouchableOpacity,useWindowDimensions,StyleSheet} from "react-native"
const OnBoardingScreen=({item})=>{
    const {width}=useWindowDimensions()
return(
<View style={[styles.container,{width}]}>
   <Image source={item.image} style={[styles.image,{width,resizeMode:"contain"}]}></Image>
   <View style={{flex:0.2}}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
   </View>
</View>
)
}
const styles=StyleSheet.create({
 container:{
    justifyContent:"center",
    alignItems:"center",
    flex:1
 },
 image:{
    flex:0.7,
    justifyContent:"center"
 },
 title:{
    textAlign:"center",
    fontWeight:600,
    fontSize:18
 },
 description:{
    textAlign:"center",
    fontSize:12,
    fontWeight:400,
    lineHeight:19,
    paddingHorizontal:"15%",
    paddingTop:"5%"
}

})
export default OnBoardingScreen