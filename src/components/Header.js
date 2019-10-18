import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity style={styles.stackBar_end}>
      <Icon name="build" color="#fff" size={16} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f39c12ff',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 20,
    paddingEnd: 20,
    justifyContent: 'space-between'
  },
  title: {
    color: 'white'
  },
  stackBar_start: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start'
  },
  stackBar_end: {
    justifyContent: 'flex-end'
  },
  txtStack: {
    color: '#fff',
    justifyContent: 'flex-end'
  }
});
