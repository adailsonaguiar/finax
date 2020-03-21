import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {loadAccounts} from '../../store/accounts/actions';
import {monthSetTwoDigits} from '../../utils/FunctionUtils';
import months from '../../utils/months';
import {Container, Month} from './styles';

export default function MothHeader() {
  const dispatch = useDispatch();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    const date = new Date();
    setMonth(date.getMonth());
    setYear(date.getFullYear());
  };

  const handleLoadAccounts = () => {};

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
      dispatch(loadAccounts(monthSetTwoDigits(1), `${year + 1}`));
    } else {
      setMonth(month + 1);
      dispatch(loadAccounts(monthSetTwoDigits(month + 2), `${year}`));
    }
  };
  const previousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
      dispatch(loadAccounts(monthSetTwoDigits(12), `${year - 1}`));
    } else {
      setMonth(month - 1);
      dispatch(loadAccounts(monthSetTwoDigits(month), `${year}`));
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
