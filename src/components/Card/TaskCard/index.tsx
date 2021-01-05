import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';
import { Task } from 'types/task/task';
import TaskCardHeader from './TaskCardHeader';

const SECTIONS: Task[] = [
  {
    title: 'Make a robot',
    tagName: 'School',
    duration: '6 hrs',
    priority: 'Critical',
    deadline: 'Tomorrow, 8PM',
    notes: 'Loren ipsum...'
  },
  {
    title: 'Make a robot',
    tagName: 'School',
    duration: '6 hrs',
    priority: 'Critical',
    deadline: 'Tomorrow, 8PM',
    notes: 'Loren ipsum...'
  },
  {
    title: 'Make a robot',
    tagName: 'School',
    duration: '6 hrs',
    priority: 'Critical',
    deadline: 'Tomorrow, 8PM',
    notes: 'Loren ipsum...'
  },
  {
    title: 'Make a robot',
    tagName: 'School',
    duration: '6 hrs',
    priority: 'Critical',
    deadline: 'Tomorrow, 8PM',
    notes: 'Loren ipsum...'
  },
  {
    title: 'Make a robot',
    tagName: 'School',
    duration: '6 hrs',
    priority: 'Critical',
    deadline: 'Tomorrow, 8PM',
    notes: 'Loren ipsum...'
  },
];

interface Props {
    
}

class TaskCard extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = (task: Task) => {
    return (
      <View>
        {/* <Text>{section.content}</Text> */}
      </View>
    );
  };

  _renderHeader = (task: Task) => {
    return (<TaskCardHeader task={task} isExpanded={true} />);
  };

  _renderContent = (task: Task) => {
    return (
      <View style={styles.content}>
        <Text>{task.notes}</Text>
      </View>
    );
  };

  _updateSections = (activeSections: Number[]) => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <ScrollView style={styles.background}>
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
          sectionContainerStyle={styles.accordian}
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
  },
  background: {
    backgroundColor: '#F0F0F0',
    width:'100%'
  },
  accordian: {
    margin: 20,
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
