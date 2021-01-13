import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';

const AddTaskBottomSheet = () => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={{height: '100%'}}>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

      <Modalize
        ref={modalizeRef}
        threshold={500}
      >
        <View style={styles.scrollableModalContent1}>
          <Text style={styles.scrollableModalText1}>
            You can scroll me up! 👆
          </Text>
        </View>
        <View style={styles.scrollableModalContent2}>
          <Text style={styles.scrollableModalText2}>
            Same here as well! ☝
          </Text>
        </View>
      </Modalize>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  scrollableModalContent1: {
    height: 500,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 500,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
});

export default AddTaskBottomSheet;
