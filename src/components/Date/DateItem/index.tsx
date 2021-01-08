import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  date: Date,
  active: boolean,
}

const fontSize = 18;
const size = 32;

const index = ({date, active}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style = {[styles.dateText]}>25</Text>
      </View>
      <Text style={styles.dayText}>Fri</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  dateContainer: {
    alignItems:'center', 
    justifyContent:'center',  
    backgroundColor:'#EAEAEA', 
    width:size,
    height:size, 
    borderRadius:size, 
  },
  dateText: {
    textAlign: 'center',
    fontSize:fontSize - 2,
    fontWeight: '600'
  },
  dayText: {
    marginTop: 5,
    fontSize: 10
  }
})
