import { StyleSheet } from 'react-native';


// THEME CONSTANTS
const pri_color = 'rgba(252, 163, 17, 1.0)'
const sec_color = 'rgba(20, 33, 61, 1.0)'

const commonStyles = StyleSheet.create({

container: {
    display:'flex',
    alignContent:'center',
    alignItems:'center',
}
,
row: {
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
}
,
column: {
    alignContent:'center',
    alignItems:'center',
    flexDirection:'column',
    padding:10,
}
,
formContainer: {
    width: 350,
}
,
inputStyle: {

}
,
inputLabel: {
    color: sec_color,
}

});

export default commonStyles;
