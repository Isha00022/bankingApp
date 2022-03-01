import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,SafeAreaView} from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';


import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';



export default function App() {
  const DATA=[
    {
      key:'1',
      name:'Dream House',
      product:'7',
      amount:'$345,890',
      profit:'3.1%',
   
    },
    {
      key:'2',
      name:'Dream Car',
      product:'8',
      amount:'$245,890',
      profit:'0.1%',
   
    },
    {
      key:'3',
      name:'Own Business',
      product:'2',
      amount:'$999,890',
      profit:'9.1%',
   
    },
    {
      key:'4',
      name:'Share Market',
      product:'10',
      amount:'$1,645,890',
      profit:'5.3%',
   
    },
   ];
  const DATA2=[
    {
      key:'1',
      letter:'A',
      name:'Amazon',
      amount:'$9,349,90',
      sname:'AMZN',
      profit:'+66.11(2.45%)'
    },
    {
      key:'2',
      letter:'T',
      name:'TATA',
      amount:'$9,349,90',
      sname:'AMZN',
      profit:'+66.11(2.45%)'
   
    },
    {
      key:'3',
      letter:'G',
      name:'Google',
      amount:'$9,349,90',
      sname:'AMZN',
      profit:'+66.11(2.45%)'
   
    },
    {
      key:'4',
      letter:'A',
      name:'Amazon',
      amount:'$9,349,90',
      sname:'AMZN',
      profit:'+66.11(2.45%)'
   
    },
    {
      key:'5',
      letter:'B',
      name:'Birla Groups',
      amount:'$9,349,90',
      sname:'AMZN',
      profit:'+66.11(2.45%)'
   
    },
    {
      key:'6',
      letter:'A',
      name:'Amazon',
      amount:'$9,349,90',
      sname:'AMZN',
      profit:'+66.11(2.45%)'
   
    },
    {
      key:'7',
      letter:'A',
      name:'Amazon',
      amount:'$9,349,90',
      sname:'AMZN',
      profit:'+66.11(2.45%)'
   
    },
    {
      key:'8',
      letter:'A',
      name:'Amazon',
      amount:'$9,349,90',
      sname:'AMZN',
      profit:'+66.11(2.45%)'
   
    },
    {
      key:'9',
      letter:'A',
      name:'Amazon',
      amount:'$9,349,90',
      sname:'AMZN',
      profit:'+66.11(2.45%)'
   
    },
    {
      key:'10',
      letter:'b',
      name:'bbbbbbbb',
      amount:'$9,349,90',
      sname:'AMZN',
      profit:'+66.11(2.45%)'
   
    },
   ];
   const renderItem = ({ item }) => (
   <View style={item.key==='1' ? styles.spacing1:null}>
      <Comp2 name={item.name} product={item.product} amount={item.amount} profit={item.profit} />
   </View>
    
  );
   const renderItem2 = ({ item }) => (
   <View style={styles.comp3}>
      <Comp3 name={item.name} amount={item.amount} sname={item.sname} profit={item.profit} letter={item.letter}/>
   </View>
    
  );
  return (
    <SafeAreaView style={styles.page}> 
        <View style={styles.comp1}>
           <Comp1/>
        </View>
        <View style={styles.head}>
          <Text>List Portfolio</Text>
        </View>

        <View style={styles.comp2}>
          <FlatList
           horizontal
           data={DATA}
           renderItem={renderItem}
           keyExtractor={item => item.key} 
           showsHorizontalScrollIndicator={false}
          />
          <FlatList
           data={DATA2}
           renderItem={renderItem2}
           keyExtractor={item => item.key} 
           showsVerticalScrollIndicator={false}
          />

        </View>

        

        
        

        {/* <View style={styles.comp3}>
          <Comp3/>
        </View> */}
        
        
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor:'#e3ffe9',
    backgroundColor:'#f0f0f0',
  },
  comp1:{
      paddingBottom:60,
      paddingTop:80,
  },
  head:{
    paddingBottom:8,
    paddingRight:220
  },
  spacing1:{
    marginLeft:11.5
  },
  comp3:{
    justifyContent:'center',
    alignItems:'center'
  },
  comp2:{
    // marginBottom:40
  }
});
