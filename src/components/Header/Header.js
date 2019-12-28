import React from 'react';
import PropTypes from 'prop-types';
import {Container, Title} from './styles';
import MonthHeader from '../MothHeader/MonthHeader';

const Header = ({title, navigation}) => (
  <Container>
    {/* <Title>{title}</Title> */}
    <MonthHeader />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
