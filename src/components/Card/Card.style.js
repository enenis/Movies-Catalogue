import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        margin:18,
        // backgroundColor:"#bdbdbd",
        borderBottomWidth:1,
        borderColor:"#5A5A5A",

    },
    image_container:{
        justifyContent:"center",
        alignItems:"center",
        padding:10
        
    },
    image:{
        width: Dimensions.get("window").width/1.2,
        height:Dimensions.get("window").height/2,
    },
    title:{
        flexDirection:"row",
        alignItems:"flex-start",
        marginLeft:20,
        margin:10,
        fontSize:17,
        fontWeight:"bold"
    },
    inner_container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:15
    },
    submit:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    submit_button:{
        borderColor:"white",
        borderWidth:1,
        borderRadius:5,
        width:20,
        height:25,
        marginRight:30
    }
})