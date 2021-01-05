import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchUserAsync} from '@actions/usersActions';
import Colors from '@constants/colors';
import useSelector from '@utils/useSelector';
import TaskCard from '@components/Card/TaskCard'
import { SafeAreaView } from 'react-native-safe-area-context';

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
      {/* <Text style={styles.welcome}>{t('welcome')}</Text>
      <Text style={styles.instructions}>{t('instructions')}</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      {user && <Text>user: </Text>}
      <Text>{JSON.stringify(user)}</Text>
      <Button title={t('fetchUser')} onPress={fetchUser} /> */}
      <TaskCard />
    </SafeAreaView>
  );
}

export default memo(Schedule);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
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