import SmallTag from 'components/Tag/SmallTag'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import { Task } from 'types/task/task'

interface Props {
  task: Task,
  isExpanded: boolean
}

const TaskCardHeader = ({task, isExpanded}: Props) => {
  function bottomRadius (isExpanded: boolean): ViewStyle {
    if (isExpanded) {
      return {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    }
    return {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
    };
  }

  return (
    <View style={{backgroundColor:'#F5F5F5', width:'100%'}}>
      {/* <View> */}
        <SmallTag style={{alignSelf: 'center', marginBottom: 10}} color="#E3E3E3">6:00 PM</SmallTag>
      {/* </View> */}
      <View style={[styles.container, bottomRadius(isExpanded)]}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <Text style={styles.title}>{task.title}</Text>
          <View style={{backgroundColor: '#A0A0A0', marginTop: -20, borderRadius: 5, marginRight: 0, paddingHorizontal: 10, justifyContent: 'flex-end', paddingBottom: 5}}>
            <Text style={{fontSize: 10}}>{task.tagName}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
          <View style={styles.row}>
            <SmallTag style={{marginRight: 15}} color={'#adadad'}>{task.duration}</SmallTag>
            <SmallTag style={{marginRight: 15}} color={'#adadad'}>{task.priority}</SmallTag>
            <Text style={styles.deadlineText}>{'Due: ' + task.deadline}</Text>
          </View>
          <Icon name={isExpanded ? 'chevron-up' : 'chevron-down'} size={16} color={'#D1D1D1'} />
        </View>
        <View style={styles.progressBar}>
          <Progress.Bar progress={0.3} width={null} color='#CBCBCB' borderWidth={0} unfilledColor='#F2F2F2' />
        </View>
      </View>
    </View>
  )
}

export default TaskCardHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.10,
    // shadowRadius: 10,
    // elevation: 2,
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
