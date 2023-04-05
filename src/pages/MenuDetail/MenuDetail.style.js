import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    title:{
        marginLeft:10,
        margin: 10,
        fontSize:20,
        color:"white"
    },
    image:{
        width: Dimensions.get("window").width/1,
        resizeMode:"contain",
        height:Dimensions.get("window").height/2,
        marginVertical: 10,
    },
    text:{
        fontSize:16,
        color:"white",
        fontWeight:"bold",
        
    },
    paragraf:{
        margin:10,
        fontSize:17,
    },
    
})