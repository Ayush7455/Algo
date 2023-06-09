import { StyleSheet } from "react-native"
const ProfileScreenStyles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"white"
    },
    profileContainer:{
      flex:0.1,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"flex-start",
      marginTop:"3%"
    },
    profileImageContainer:{
      flexDirection:"row",
      alignItems:"center",
      flex:0.95,
      marginHorizontal:"5%"
    },
    profileImage:{
      height:40,
      width:40,
      borderRadius:24,
      marginRight:"5%"
  },
  profileName:{
    color:"#364963",
    fontSize:16,
    fontWeight:600
  },
  profileEmail:{
    color:"#808080",
    fontSize:12,
    fontWeight:400
  },
  focusMode:{
    flex:0.1,
    flexDirection:"row"
  },
  focusModeItemContainer:{
    flex:0.9,
    flexDirection:"row",
    alignItems:"center",
    paddingLeft:"4%"
  },
  focusItem:{
    flex:0.1,
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:"5%",
    borderBottomWidth:1,
    borderBottomColor:"#F5F5F5"
  },
  focusItemImage:{
    height:25,
    width:25
  },
  focusItemText:{
    paddingLeft:"10%",
    fontSize:14,
    fontWeight:500,
    color:"#020E1E"
  },
  focusItemTextSignOut:{
    paddingLeft:"10%",
    fontSize:14,
    fontWeight:500,
    color:"#FF5F38"
  }
  
  })
  export default ProfileScreenStyles