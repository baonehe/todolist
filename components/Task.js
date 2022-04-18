import React, { useState } from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';


const Task = (props) => {
    const [date, setDate] = useState(new Date(13));
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
    const showPopup = (bool) => {
        props.changePopUp(bool);
    }
    return (
        <View style={styles.Item}>
            <View style={styles.Itemleft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.ItemText}>{props.Text}</Text>
                <TouchableOpacity onPress={() => showmode('date','start')}>
                <Text style={[styles.itemtext,{borderColor:'#E5E7E9',borderWidth:2,marginLeft:20}]}> {textstart}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => showmode('date','end')}>
                <Text style={[styles.itemtext,{borderColor:'#E5E7E9',borderWidth:2,marginLeft:20}]} > {textend}</Text>
                </TouchableOpacity>
               
            </View>
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
           <View style={styles.circular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    Item: {
        backgroundColor: '#FDFEFE',
        padding: 15,
        width: '95%',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    Itemleft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#A3E4D7',
        opacity: 0.6,
        marginRight: 15,
    },
    itemtext: {},
    circular: {
        width: 14,
        height: 14,
        borderColor: '#A3E4D7',
        opacity: 0.9,
        borderWidth: 2,
        borderRadius: 9,
    },
    ItemText: {},

});

export default Task;