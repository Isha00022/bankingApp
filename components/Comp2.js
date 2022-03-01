import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons,AntDesign} from '@expo/vector-icons';

export default function Comp2({name,product,amount,profit}) {
  return (
    <View style={styles.container}> 
     <View style={styles.Box1}> 
        <View style={styles.symbolContainer}>
          <MaterialIcons name="house" size={27} color="#59b56d"/>
         </View>
         <Text style={styles.text1}>{name}</Text>
         <Text style={styles.text2}>{product} Product</Text>
     </View>
     <View style={styles.Box2}>
        <Text style={[styles.text2,styles.text3]}>My Portfolio</Text>
        <Text style={styles.text2}>Profit</Text>
     </View>
     <View style={styles.Box3}>
         <Text style={styles.text4}>{amount}</Text>
         <AntDesign name="caretup" size={14} color='#59b56d' style={styles.icon}/>
         <Text style={styles.text5}>{profit}</Text>
     </View>
      
    </View>
   
  );
}

const styles = StyleSheet.create({
    container:{
        height:140,
        width:320,
        backgroundColor:'#fff',
        borderRadius:20,
        padding:20,
        // marginRight:35,
        marginLeft:9,
        marginBottom:60,
        // marginBottom:40,
    },
    Box1:{
        flexDirection:'row',

    },
    Box2:{
        flexDirection:'row',
        marginTop:15,
    },
    Box3:{
        flexDirection:'row',
        marginTop:4,
    },
    text1:{
        fontWeight:'bold',
        fontSize:16,
        paddingLeft:20,
        marginTop:4,
        // paddingRight:90,
        width:'67%',
        color:'black',

    },
    symbolContainer:{
        width:35,
        height:35,
        backgroundColor:'#adedbb',
        borderRadius:13,
        justifyContent:'center',
        alignItems:'center',

    },
    text2:{
        fontSize:13,
        color:'#a5a8a6',
        marginTop:7,
        fontWeight:'bold',
        
    },
    text3:{
        width:'84%'
    },
    text5:{
        paddingLeft:8,
        marginTop:6,

    },
    text4:{
        fontSize:19,
        fontWeight:'bold',
        width:'77.5%',
    },
    icon:{
        marginTop:9.5,
    },
    
});
