import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Comp1() {
    return (
        <View>
            <View style={styles.bigBox}>
               <Text style={styles.text1}>My Portfolio</Text>
               <Text style={styles.text2}>$349,706</Text>
            </View>
            <View style={styles.smallBox}>
               <Text style={styles.text3}>Profit</Text>
               <Text style={styles.text4}>$11,289.22</Text>
               <AntDesign name="caretup" size={14} color='#59b56d' style={styles.icon}/>
               <Text style={styles.text5}>3.2%</Text>
            </View>

        </View>
      
    );
  }
  
  const styles = StyleSheet.create({
      
    bigBox:{
        backgroundColor:'#59b56d',
        height:120,
        width:320,
        borderRadius:20,
        paddingTop:20,
        paddingLeft:20,
    },
    text1:{
        color:'#b4bfb6',
        
    },
    text2:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',

    },
    smallBox:{
        backgroundColor:'white',
        width:280,
        height:50,
        flexDirection:'row',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:20,
        top:95,



    },
    text3:{
        fontSize:16,
        color:'#a5a8a6',
        paddingRight:50,
        fontWeight:'bold',
        
    },
    text4:{
        color:'#59b56d',
        fontWeight:'bold',
        fontSize:16,
        paddingRight:18,
    },
    text5:{
        paddingLeft:8,

    },
    icon:{
        marginTop:4,
    }
  });