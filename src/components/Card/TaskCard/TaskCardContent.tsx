import SmallTag from 'components/Tag/SmallTag'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Task } from 'types/task/task'

interface Props {
  task: Task,
  isExpanded: boolean
}

const TaskCardContent = ({task, isExpanded}: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{flexGrow: 2}} nestedScrollEnabled={true}>
        <View style={{backgroundColor: '#F5F5F5', borderRadius: 10, height: 300, padding: 7}}>
          <Text style={{fontSize: 14}}>
            Notes
          </Text>
        </View>
        <View style={{backgroundColor: '#F5F5F5', borderRadius: 10, height: 300, padding: 7, marginTop: 20}}>
          <Text style={{fontSize: 14}}>
            Notes
          </Text>
        </View>
      </ScrollView>
      <View style={{height: 60, backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View  style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name={'calendar'} size={20} color={'#D6D6D6'} />
          <Text style={{fontSize: 12}}>Reschedule</Text>
        </View>
        <View style={{flexGrow: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name={'angle-double-down'} size={26} color={'#A0A0A0'} />
        </View>
        <View  style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name={'check-circle'} size={20} color={'#D6D6D6'} />
          <Text style={{fontSize: 12}}>Mark as done</Text>
        </View>
      </View>
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
