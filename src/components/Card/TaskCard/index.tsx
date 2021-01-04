import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';

interface Section {
  title: String,
  content: String
}

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Third',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Forth',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Fifth',
    content: 'Lorem ipsum...',
  },
];

class TaskCard extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = (section: Section) => {
    return (
      <View>
        {/* <Text>{section.content}</Text> */}
      </View>
    );
  };

  _renderHeader = (section: Section) => {
    return (
      <View style={styles.header}>
        <Text>{section.title}</Text>
      </View>
    );
  };

  _renderContent = (section: Section) => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _updateSections = (activeSections: Number[]) => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <ScrollView>
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </ScrollView>
    );
  }
}

export default TaskCard

const styles = StyleSheet.create({
  content: {
    height: 100
  }, 
  header: {
    height: 100
  }
})

// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import Accordion from 'react-native-collapsible/Accordion'

// interface Props {
//   isExpanded: Boolean
// }

// const TaskCard = (props: Props) => {
//   return (
//     <View>
      
//     </View>
//   )
// }

// export default TaskCard

// const styles = StyleSheet.create({})
