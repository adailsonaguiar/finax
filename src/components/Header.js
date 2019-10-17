import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ title }) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Icon size={23} name="rocket" color="#fff" />
    </View>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity style={styles.right}>
      <Icon name="facebook" color="#fff" size={23} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
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
  },
  title: {
    color: 'white',
  },
  stackBar_start: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start',
  },
  stackBar_end: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end',
  },
  txtStack: {
    color: '#fff',
    alignSelf: 'flex-end',
  },
});
