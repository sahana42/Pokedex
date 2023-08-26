import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: '#DC0A2D',
        flex:1,
    },
    BackgroundContainer: {
        margin: 4,
    },
    ForegroundContainer: {
        backgroundColor: 'white',
        margin: 4,
        borderRadius: 10,
        flex:1,
        paddingVertical: 24,  
        paddingHorizontal: 10, 
        paddingBottom: 0,     
        paddingRight: 12, 
    },
    nameContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:12,
        paddingTop:12,
        marginBottom:8,
    },
    SearchContainer: {
        padding: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:12, 
    },
    searchBox: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        flex: 4,
        paddingHorizontal: 10,
    },
    filter: {
        backgroundColor: 'white',
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'5%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        width: 350,
        height: 108,
      },
      card: {
        width: 104,
        height: 108,
        // padding: 24,
        justifyContent:'space-between',
        borderRadius: 8,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2, 
      },
      number: {
        color:'#666666',
        paddingVertical: 4,  
        paddingHorizontal: 8, 
        paddingBottom: 0,     
        paddingRight: 8, 
        fontSize: 10,
        fontWeight: '400',
        marginBottom: 16,
        lineHeight:12,
        textAlign:'right'
      },
      imageContainer: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        
      },
      image: {
        width: 72,
        height: 72,
        position:'absolute',
        bottom:20,
        left:15,
        
        // borderRadius: 50,
      },
      nameContainer1: {
        flex:1,
        backgroundColor: '#EFEFEF',
        paddingVertical: 16,  
        paddingHorizontal: 8, 
        paddingBottom: 4,     
        paddingRight: 8, 
        borderRadius: 7,
      },
      name: {
        fontSize: 12,
        color: 'black',
        fontWeight:'400',
        textAlign:'center',
        lineHeight:36,
        fontFamily:'Poppins-SemiBold'
      },
});

export default styles;