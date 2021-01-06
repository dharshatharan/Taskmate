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

const TaskCardContent = ({task, isExpanded}: Props) => {
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default TaskCardContent

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 0,
    height: 500
  },
  title: {
    fontSize: 13,
    fontWeight: '600'
  },
  row: {
    flexDirection: 'row',
  },
  progressBar: {
    width: '100%'
  },
  deadlineText: {
    marginRight: 15,
    color:'#8B8B8B',
    fontSize: 10,
    fontWeight: '700'
  }
})
