import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, StyleSheet, Text, View} from 'react-native';
import Colors from '@constants/colors';

function Tasks() {
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('Tasks')}</Text>
      <Button title={t('english')} onPress={() => i18n.changeLanguage('en')} />
      <Button title={t('french')} onPress={() => i18n.changeLanguage('fr')} />
    </View>
  );
}

export default memo(Tasks);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.aliceBlue,
  },
});