import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchUserAsync} from '@actions/usersActions';
import Colors from '@constants/colors';
import useSelector from '@utils/useSelector';
import TaskCard from '@components/Card/TaskCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import DateCarousel from 'components/Carousel/DateCarousel';

function Schedule() {
  const user = useSelector((state) => state.users.user);
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const fetchUser = () => {
    const userId = '1';
    dispatch(fetchUserAsync.request(userId));
  };

  const instructions = Platform.select({
    ios: t('iosInstruction'),
    android: t('androidInstruction'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '10%'}}>
        <DateCarousel />
      </View>
      <View style={{height: '90%', width: '100%'}}>
        <TaskCard />
      </View>
    </SafeAreaView>
  );
}

export default memo(Schedule);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.aliceBlue,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: Colors.darkCharcoal,
    marginBottom: 5,
  },
});