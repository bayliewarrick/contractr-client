import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({


container: {
    display:'flex',
    alignContent:'center',
    alignItems:'center'
}
,
row: {
    flexDirection:'row',
}
,
column: {
    flexDirection:'column',
    backgroundColor:'red',
    margin:10
}



});

export default commonStyles;
