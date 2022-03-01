import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


export default function Comp3({letter,name,amount,sname,profit}) {
    return (
       <View style={styles.container}>
          <View style={styles.Box}>
           <View style={styles.symbolContainer}>
               <Text style={styles.text4}>{letter}</Text>
           </View>
           <View style={styles.Box2}>
               <View style={styles.Box1}>
                   <Text style={styles.text1}>{name}</Text>
                   <Text style={styles.text1}>{amount}</Text>
               </View>
               <View style={styles.Box3}>
                    <Text style={styles.text2}>{sname}</Text>
                    <Text style={styles.text3}>{profit}</Text>
               </View>
           </View>
          </View>

       </View>
      
    );
  }
  
  const styles = StyleSheet.create({
      
    container:{
        height:70,
        width:320,
        backgroundColor:'#fff',
        borderRadius:20,
        padding:7,
        marginBottom:10
    },
    Box1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:19,
        marginTop:4,
        marginBottom:5

    },
    Box:{
        flexDirection:'row',
       

    },
    Box2:{
        flexDirection:'column',
        width:'80%',
        
    },
    Box3:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:19
    },
    text1:{
        fontWeight:'bold',
        fontSize:18,
        color:'black',
        

    },
    symbolContainer:{
        width:55,
        height:55,
        backgroundColor:'#c5e6cc',
        // backgroundColor:'#adedbb',
        borderRadius:13,
        justifyContent:'center',
        alignItems:'center',

    },
    text2:{
        fontSize:11.5,
        color:'#a5a8a6',
        fontWeight:'bold',
        
    },
    text3:{
        fontSize:11.5,
        color:'#adedbb',
        fontWeight:'bold',
        
    },
    text4:{
        fontSize:24,
        fontWeight:'bold',
        color:'#59b56d',

    }
   
    
  });