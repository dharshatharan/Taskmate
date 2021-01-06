import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

interface Props {
  children: string,
  color: string,
  style?: ViewStyle
}

const SmallTag = ({children, color, style}: Props) => {
  return (
    <View style={[{backgroundColor: color}, styles.container, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default SmallTag

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    height: 15,
    justifyContent: 'center',
    minWidth: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 10
  }
})
