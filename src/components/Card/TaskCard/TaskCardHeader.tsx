import SmallTag from 'components/Tag/SmallTag'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import { StyleSheet, Text, View } from 'react-native'
import { Task } from 'types/task/task'

interface Props {
  task: Task,
  isExpanded: boolean
}

const TaskCardHeader = ({task, isExpanded}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{task.title}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
        <View style={styles.row}>
          <SmallTag style={{marginRight: 10}} color={'#adadad'}>{task.duration}</SmallTag>
          <SmallTag style={{marginRight: 10}} color={'#adadad'}>{task.priority}</SmallTag>
          <SmallTag style={{marginRight: 10}} color={'#adadad'}>{task.deadline}</SmallTag>
        </View>
        <Icon name={isExpanded ? 'chevron-down' : 'chevron-up'} size={16} color={'#D1D1D1'} />
      </View>
      <View style={styles.progressBar}>
        <Progress.Bar progress={0.3} width={null} color='#CBCBCB' />
      </View>
    </View>
  )
}

export default TaskCardHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10
  },
  title: {
    // paddingBottom: 10
  },
  row: {
    flexDirection: 'row',
  },
  progressBar: {
    width: '100%'
  }
})
