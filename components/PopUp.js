import React,{useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

const PopUp = (props) =>{
    const [task,setTask] = useState();
    const [date, setDate] = useState(new Date());
    const [mode, setmode] = useState('date');
    const [show, setShow] = useState(false);
    const[checkstartorend,setcheckstartorend]= useState();
    const [textstart, settextStart] = useState('StartDate');
    const [textend, settextEnd] = useState('EndDate');
    const onChange = (event,selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let Fdate = tempDate.getDate()+'/' + (tempDate.getMonth() + 1) +'/'+tempDate.getFullYear();
        if(checkstartorend=='start') settextStart(Fdate);
        else settextEnd(Fdate);
    }
    const showmode = (currentMode,data) => {
        setcheckstartorend(data);
        setShow(true);
        setmode(currentMode);
       
    }
    const AddTask = (bool,data,stday,endday)=>{
        props.changePopUp(bool);
        props.setData(data,stday,endday);
        setTask(null);
    }
    const CloseTask=(bool) =>{
        props.changePopUp(bool);
    }
    return(
<TouchableOpacity
    disabled={true}
    style={styles.container}>
    <View style={styles.modal}>
        <KeyboardAvoidingView style={styles.textView}>
                <TextInput style={styles.text} placeholder={'Title'} value={task} onChangeText={text => setTask(text)}></TextInput>
                <TextInput style={styles.text} placeholder={'Discription'}></TextInput>

        </KeyboardAvoidingView>
        {
                show && (
                    <DateTimePicker 
                    testID='datetimepicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange} />
            )}
        <View style={styles.buttonView}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={()=> CloseTask(false)}>
            <Text style={[styles.text,{color:'red'}]}>Cancel</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.touchableOpacity}  onPress={()=> AddTask(false,task)} >
            <Text style={[styles.text,{color: 'green'}]}>Ok</Text>
        </TouchableOpacity>
    </View>
    </View>
   
</TouchableOpacity>

    )
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    modal:{
        backgroundColor:'white',
        borderRadius:10,
        borderColor:'#E5E7E9',
        borderWidth:1,
        width:'90%',
    },
    Text:{
        fontSize:18,
    },
    touchableOpacity:{
        alignItems:'center',
        flex:1,
        paddingVertical:10,
    },
    textView:{
        alignItems:'center',
        alignContent:'center',
    },
    buttonView:{
        width:'100%',
        flexDirection:'row',
    },
})
export default PopUp;