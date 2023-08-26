import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: '#F57D31',
        flex:1,
    },
    BackgroundContainer: {
        margin:4,
        height:228,
        width:352,
        
    },
    ForegroundContainer: {
      width:352,
      height:425,
        backgroundColor: 'white',
        margin: 4,
        borderRadius: 10,
        // flex:1,
        paddingVertical: 56,  
        paddingHorizontal: 20, 
        paddingBottom: 20,     
        paddingRight: 20, 
    },
    image: {
      width: 205,
      height: 220,       
      color:'#FFFFFF',
      left:140,
      position:'absolute',
      top:10,

      // borderRadius: 50,
    },
    image1: {
      width: 32,
      height: 32,       
      color:'#FFFFFF',
      marginRight:5

      // borderRadius: 50,
    },
    images:{
      width: 200,
      height: 200, 
      position:'absolute',
      bottom:0,
      left:50,
    },
    header:{
    flexDirection:'row',
    alignItems:'center'
    // justifyContent:'space-evenly'
    },
    headerText:{
    fontSize:24,
    fontWeight:'900',
    lineHeight:32,
    marginLeft:5,
    color:'white'

    },
    header1:{
      fontSize:14,
      fontWeight:'700',
      lineHeight:16,
    color:'white'

      },
    nameContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:352,
        height:76,
        paddingVertical: 20,  
        paddingHorizontal: 20, 
        paddingBottom: 24,     
        paddingRight: 20, 
        marginBottom:8,
    },
   bubble:{
     flexDirection:'row',
     justifyContent:'center',
     height:20,
     margin:5
   },
   bubble1:{
      color:'white',
      width:50,
      height:23,
      backgroundColor:'#F57D31',
      textAlign:'center',
      fontSize:12,
      fontWeight:'700',
      paddingVertical: 2,  
      paddingHorizontal: 8, 
      paddingBottom: 2,     
      paddingRight: 8,
      borderRadius:12,
      marginRight:10
   },
   bubble2:{
    color:'white',
    width:60,
    height:23,
    backgroundColor:'#A43E9E',
    textAlign:'center',
    fontSize:12,
    fontWeight:'700',
    paddingVertical: 2,  
    paddingHorizontal: 8, 
    paddingBottom: 2,     
    paddingRight: 8,
    borderRadius:12,
    marginLeft:10
  },
  aboutText:{
    height:16,
    color:'#F57D31',
    fontSize:17,
    fontWeight:'800',
    lineHeight:20,
    textAlign:'center',
     marginTop:15,
     marginBottom:15,
  },
  frame:{
    width:312,
    flexDirection:'row',
    justifyContent:'space-evenly',
    height:50,
    marginTop:15,
    marginBottom:1
  },
  frame1:{
   width:103,
   height:50,
  },
  verticalDivider: {
    width: 1,
    height: 50,
    backgroundColor: '#E0E0E0',
    // marginHorizontal: 20,
  },
  frameText:{
    height:33,
    width:100,
   flexDirection:'row',
   justifyContent:'space-evenly',
  },
  icon:{
    width: 16,
    height: 16,
  },
  kg:{
    color:'black',
    fontSize:12,
    fontWeight:'400',
  },
  weight:{
    color:'#666666',
    fontSize:9,
    fontWeight:'400',
    textAlign:'center',
  },
  movesText:{
    height:33,
    width:100,
  flexDirection:'column',
  marginTop:-4,
  marginBottom:5,
  justifyContent:'flex-start',

  },
  moves:{
    color:'black',
    fontSize:12,
    fontWeight:'400',
    textAlign:'center'
  },
  content:{
    width:312,
    height:60,
  },
  contentText:{
    color:'black',
    fontSize:12,
    fontWeight:'400',
    textAlign:'justify',
    lineHeight:20,
    marginTop:25,
    height:60,
    width:312,

  },
});

export default styles;