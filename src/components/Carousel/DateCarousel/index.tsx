import DateItem from 'components/Date/DateItem';
import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

const SLIDER_WIDTH = Dimensions.get('window').width - 80;
const ITEM_WIDTH = 40;
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA: Date[] = [];
for (let i = 0; i < 20; i++) {
  DATA.push(new Date('1995-12-' + i + 'T03:24:00'))
}

export default class DateCarousel extends Component {
  
  state = {
    index: 0
  }

  _renderPrevButton = () => {
    return <View style={styles.prevNextButtons}>
      <Icon name={'chevron-left'} size={12} color={'#CACACA'} />
    </View>
  }

  _renderNextButton = () => {
    return <View style={styles.prevNextButtons}>
      <Icon name={'chevron-right'} size={12} color={'#CACACA'} />
    </View>
  }

  _renderItem = ({item}: any) => {
    return (
      <View style={styles.itemContainer}>
        {/* <Text style={styles.itemLabel}>{`Item ${item}`}</Text> */}
        <DateItem date={item} active={true} />
      </View>
    );
  }
  
  render() {
    return (
      <View style={{flexDirection: 'row', height: '100%', width: '100%'}}>
        {this._renderPrevButton()}
        <View>
          <Carousel
            // ref={(c) => this.carousel = c}
            data={DATA}
            renderItem={this._renderItem}
            sliderWidth={SLIDER_WIDTH}
            sliderHeight={50}
            itemWidth={ITEM_WIDTH + 30}
            itemHeight={ITEM_HEIGHT}
            containerCustomStyle={styles.carouselContainer}
            // inactiveSlideShift={0}
            onSnapToItem={(index) => this.setState({ index })}
            // useScrollView={true}          
            
          />
        </View>
        {this._renderNextButton()}
        {/* <View style={{width: 40, backgroundColor: '#000000'}}></View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 0,
    backgroundColor: '#F5F5F5',
    // height: 50,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'dodgerblue',
    marginHorizontal: 15,
    flex: 1
  },
  itemLabel: {
    color: 'white',
    fontSize: 12
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  prevNextButtons: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  }
});
