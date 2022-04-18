/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Modal,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import Task from'./components/Task';
import PopUp from './components/PopUp';


function App(){
  const[isPopupVisible,setisPopupVisible] = useState(false);
  const[taskItem,setTaskItem]=useState([]);
  const[Data,setData]=useState();
  const changePopup=(bool) =>{
    setisPopupVisible(bool);
  }
  const sethandelTask=(data,endday,startday) =>{
    setData(data);
    setTaskItem([...taskItem,data]);
  }

  return(
    <View style={styles.container}>
      <Text style={{...styles.taskwarrper,fontWeight:'bold'}} >Task</Text>
        <View style={styles.Item}>
        {
          taskItem.map((item,index)=> {
            return (
            <Task Text={item}
            key={index}
            changePopUp={changePopup}>
              </Task>)
          })
        }
        </View>
        <View style={styles.addwrapper}>
          <TouchableOpacity activeOpacity={0.3} onPress={()=> changePopup(true)} >
             <View style={styles.addbutton}>
               <Text> + </Text>
             </View>
          </TouchableOpacity>
          <Modal transparent ={true}
                  animationType='fade'
                  visible={isPopupVisible}
                  nRequestClose={() => changePopup(false)} >
          <PopUp 
          changePopUp={changePopup}
          setData={sethandelTask}>
          </PopUp>
          </Modal>
        </View>
    </View>)
}
const styles= StyleSheet.create({
  container:{
    backgroundColor:'#ECF0F1',
    flex:1,
  },
  taskwarrper:{
    paddingTop:50,
    fontSize:25,
    paddingHorizontal:20,
  },
  Item:{
    paddingLeft:10,
    marginTop:10,
  },
  addwrapper:{
    flexDirection:'row',
    justifyContent:'flex-end',
    bottom:40,
    left:315,
    position:'absolute'
  },
  addbutton:{
      width:60,
      height:60,
      fontSize:28,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#FBFCFC',
      borderRadius:30,
      borderColor:'#A3E4D7',
      borderWidth:1,

  }
});
export default App;
