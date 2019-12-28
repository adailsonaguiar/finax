import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Month} from './styles';
import months from '../../utils/months';
import {TouchableOpacity} from 'react-native';

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

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };
  const previousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  return (
    <Container>
      <TouchableOpacity onPress={previousMonth}>
        <Icon name="keyboard-arrow-left" color="#fff" size={30} />
      </TouchableOpacity>
      <Month>{`${months[month]}/${year}`}</Month>
      <TouchableOpacity onPress={nextMonth}>
        <Icon name="keyboard-arrow-right" color="#fff" size={30} />
      </TouchableOpacity>
    </Container>
  );
}
