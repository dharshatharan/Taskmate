import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
// import ModalBaseScene from '@utils/ModalBaseScene';

type State = {
  scrollOffset: undefined | number;
  visible: boolean
};

class LeftModal extends Component<any, State> {
  public scrollViewRef: React.RefObject<ScrollView>;
  constructor(props: any) {
    super(props);
    
    this.state = {
      scrollOffset: undefined,
      visible: true
    }

    this.scrollViewRef = React.createRef();
  }

  open = () => this.setState({visible: true} as any);
  close = () => this.setState({visible: false} as any);
  isVisible = () => this.state.visible;

  handleOnScroll = (event: any) => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y,
    });
  };

  handleScrollTo = (p: any) => {
    if (this.scrollViewRef.current) {
      this.scrollViewRef.current.scrollTo(p);
    }
  };

  setModalVisible = (visible: boolean) => {
    this.setState({
      visible: visible
    })
  }

  render(): React.ReactElement<any> {
    return (
      <Modal
        testID={'modal'}
        isVisible={this.isVisible()}
        onSwipeComplete={this.close}
        swipeDirection={['left']}
        // scrollTo={this.handleScrollTo}
        // scrollOffset={this.state.scrollOffset}
        // scrollOffsetMax={400 - 300} // content height - ScrollView height
        // propagateSwipe={true}
        animationIn='slideInLeft'
        animationOut='slideOutLeft'
        onBackdropPress={() => this.setModalVisible(false)}
        style={styles.modal}>
        <View style={styles.scrollableModal}>
          {/* <ScrollView
            ref={this.scrollViewRef}
            onScroll={this.handleOnScroll}
            scrollEventThrottle={16}> */}
            <View style={styles.modalInner}>
              <Text style={styles.scrollableModalText1}>
                You can scroll me up! 👆
              </Text>
            </View>
            {/* <View style={styles.scrollableModalContent2}>
              <Text style={styles.scrollableModalText2}>
                Same here as well! ☝
              </Text>
            </View> */}
          {/* </ScrollView> */}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    // justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: 0,
    height: '100%',
    width: '100%',
    // backgroundColor: '#FFFFFF'
  },
  modalInner: {
    // alignItems: 'flex-start',
    margin: 0,
    height: '100%',
    width: '70%',
    backgroundColor: '#000000',
    opacity: 1
  },
  scrollableModal: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    // opacity: 0.5
  },
  scrollableModalContent1: {
    // height: 200,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    // height: 200,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
});

export default LeftModal;