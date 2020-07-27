import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({


headerText: {
    color:'#2EC4B6',
    fontSize:60,
},

headerSubText: {
    color:'#2EC4B6',
    paddingHorizontal:8,
    fontSize:18,
    alignSelf:'flex-start'
},

headerContent: {
    marginBottom:0,
},

button: {
    display: 'flex',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:5,
        backgroundColor: '#2EC4B6',
        shadowColor: '#2AC062',
        shadowOpacity: 0.2,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 20,
        
},

buttonText: {
    color:'#faf9fa'
}



});

export default commonStyles;
