import React from "react"
import {SafeAreaView, StatusBar, Text,View,Image,StyleSheet} from "react-native"
import GoogleImg from "../assets/Images/Google.png"
import TaskManagement from "../assets/Images/TaskManagement.png"
const LoginScreen=()=>{

    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
            <StatusBar/>
            <View style={{flex:0.8}}>
        <Text  style={styles.title}>Welcome to Ojinn,{'\n'}your smart task manager!</Text>
        <Image source={TaskManagement} style={styles.image}></Image>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.subBottomContainer}>
                    <Image source={GoogleImg} resizeMode="contain" style={styles.subBottomContainerImage}></Image>
                    <Text style={{fontWeight:600,fontSize:16}}>Continue with Google</Text>
                </View>
                <Text style={styles.subBottomContainerText1}>By continuing, you agree to our</Text>
                <Text style={styles.subBottomContainerText2}>Terms & conditions and Privacy Policy</Text>
            </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    title:{
        fontWeight:600,
        fontSize:24,
        lineHeight: 32,
        color:"#3584EF",
        marginHorizontal:20,
        marginTop:113
    },
    image:{
        height:325,
        width:320,
        marginTop:56,
        alignSelf:"center"
    },
    bottomContainer:{
        flex:0.2,
        backgroundColor:"#3584EF",
        borderTopRightRadius:16,
        borderTopLeftRadius:16
    },
    subBottomContainer:{
        flexDirection:"row",
        height:48,
        width:320,
        backgroundColor:"white",
        alignSelf:"center",
        marginTop:16,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    subBottomContainerImage:{
        height:32,
        width:32,
        marginRight:14
    },
    subBottomContainerText1:{
        textAlign:"center",
        marginVertical:16,
        color:"white",
        fontWeight:400,
        fontSize:12
    },
    subBottomContainerText2:{
        textAlign:"center",
        color:"white",
        fontWeight:700,
        fontSize:14
    }
})
export default LoginScreen