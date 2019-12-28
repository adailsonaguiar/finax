import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Month} from './styles';
import months from '../../utils/months';

export default function MothHeader() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    const date = new Date();
    const month =
      date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`;
    setMonth(month);
    setYear(date.getFullYear());
  };

  return (
    <Container>
      <Icon name="keyboard-arrow-left" color="#fff" size={30} />
      <Month>{`${months[month]}/${year}`}</Month>
      <Icon name="keyboard-arrow-right" color="#fff" size={30} />
    </Container>
  );
}
