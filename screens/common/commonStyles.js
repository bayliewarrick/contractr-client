import { StyleSheet } from 'react-native'

// THEME CONSTANTS
const priColor = 'rgba(252, 163, 17, 1.0)'
const secColor = 'rgba(20, 33, 61, 1.0)'

const commonStyles = StyleSheet.create({
  // flexbox styles
  container: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },

  column: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
  }, // form styles

  formContainer: {
    width: 375
  },
  inputStyle: {

  },
  inputLabel: {
    color: secColor
  },
  buttonFilled: {
    backgroundColor: priColor,
    flex: 'shrink'
  }, 
  // text styles
  primaryColorText: {
    color: priColor
  },
  secondaryColorText: {
    color: secColor
  },
  headerText: {
    alignSelf: 'flex-start',
    color: priColor
  },
  linkTextRight: {
    alignSelf: 'flex-end',
    padding: 10,
    fontSize: 17
  },
  textLeft: {
    alignSelf: 'flex-start',
    padding: 10
  }

})

export default commonStyles
