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
}
,
column: {
    flexDirection:'column',
    margin:10
},

inputStyle: {
    outline:'none',
    textAlign:'center'
}
,
inputLabel: {
    color: sec_color,
    fontWeight:300
}

});

export default commonStyles;
