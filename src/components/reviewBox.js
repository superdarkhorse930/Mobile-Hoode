import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function ReviewBox(props) {

  return (
    <View style={styles.container}>
      <View style={styles.subBox}>
        <Text style={styles.subTitle}>Paid Amount</Text>
        <Text style={styles.subText}>{'$' + props.amount}</Text>
      </View>
      <View style={styles.subBox}>
        <Text style={styles.subTitle}>Reviews</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <AntDesign name="star" size={25} color="yellow" />
          <Text style={styles.subText}>{props.review}</Text>
        </View>
      </View>
      <View style={styles.subBox}>
        <Text style={styles.subTitle}>Time</Text>
        <Text style={styles.subText}>{props.time + 'hrs'}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
  },
  subBox: {
    width: '33.33%',
    paddingVertical: 9,
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: 500,
    color: 'rgba(35, 35, 35, 0.5)',
  },
  subText: {
    color: '#232323',
    fontSize: 20,
    fontWeight: 700,
  }
})
