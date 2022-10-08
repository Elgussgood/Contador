import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App=()=>{
  const [count ,setCount] =useState(0);
  const sumar=()=> setCount(prevCount=>prevCount+1)
  const restar=()=> setCount(prevCount=>prevCount-1)
  return (
    <View style={styles.container}>
              <Text style={styles.count}>Contador</Text>
      <View style={styles.subcontainer}>

        <TouchableOpacity style={styles.btn} onPress={sumar}>
          <Text style={styles.txtbtn}>+</Text>
        </TouchableOpacity>
        <Text style={styles.count}>{count}</Text>
        <TouchableOpacity style={styles.btn} onPress={restar}>
          <Text style={styles.txtbtn}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
    paddingHorizontal:10,
    flexDirection: 'row'
  },
  btn:{
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#05CAA0',
  },
  txtbtn:{
    fontSize:40,
    color: 100,
    paddingHorizontal:10,
  },
  count:{
    color:'#fff',
    flex:1,
    left:70,
    fontSize:20,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default App;