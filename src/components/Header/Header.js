import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Container} from './styles';
import MonthHeader from '../MothHeader/MonthHeader';
import {TouchableOpacity} from 'react-native';

const Header = ({title, navigation, monthTo}) => {
  useEffect(() => {}, []);

  return (
    <TouchableOpacity>
      <Container>
        {/* <Title>{title}</Title> */}
        <MonthHeader />
      </Container>
    </TouchableOpacity>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
