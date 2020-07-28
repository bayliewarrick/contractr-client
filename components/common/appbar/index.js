import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Appbar extends Component {
  render() {
    return (
        <Text style={styles.contractrText}>
          Contractr
        </Text>
    );
  }
}

Appbar.propTypes = {

};

export default Appbar;
