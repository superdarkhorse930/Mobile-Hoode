import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import WarningButton from '../../components/warningButton';
import ReviewBox from '../../components/reviewBox';
import MainButton from '../../components/MainButton';
import UploadDocument from '../../components/UploadDocument';

export default function DisputedServicesReview() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <BackButton arrowColor="black" backColor="#F6F6F6" />
          <View style={styles.headerTitle}>
            <Text style={styles.headerText}>Dispute</Text>
            <Image source={require('../../../assets/icons/warning.png')} style={{width: 18, height: 18}} />
          </View>
        </View>
        <Text style={styles.title}>Disputed Services</Text>
        <View style={styles.content}>
          <View style={styles.subTitleContainer}>
            <View style={styles.subTitleLeft}>
              <WarningButton iconColor="#232323" backColor="#9EE970" />
              <View style={styles.leftSubpart}>
                <Text style={styles.leftTile}>Plumbing</Text>
                <Text style={styles.leftText}>5 mins ago</Text>
              </View>
            </View>
            <View style={styles.subTitleRight}>
              <Text style={{color: 'rgba(35, 35, 35, 0.5)', fontSize: 12, fontWeight: 500}}>Bid Amount</Text>
              <Text style={{fontSize: 24, fontWeight: 700}}>$150</Text>
            </View>
          </View>
          <Text style={styles.context}>Lorem ipsum dolor sit amet consectetur. ctate massa varius ipsum eu. lor sit at...</Text>
          <View style={styles.imageBox}>
            <ScrollView horizontal={true}>
              <View style={{display:'flex', flexDirection: 'row', gap: 10}}>
                <Image source={require("../../../assets/imags/image1_small.png")} alt='image1' /> 
                <Image source={require("../../../assets/imags/image2_small.png")} alt='image2'  /> 
                <Image source={require("../../../assets/imags/image3_small.png")} alt='image3'  /> 
              </View>
            </ScrollView>
          </View>
          <ReviewBox amount={100} review="5.0" time={4} />
          <MainButton 
            bgColor="black" 
            fontColor="white" 
            title="Review"
            icon={<Image source={require('../../../assets/icons/warning.png')} style={{width: 18, height: 18}} />}
            onPress={() => navigation.navigate('Disputed Services Pending')} 
          />
        </View>
      </ScrollView> 
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingRight: 20,
    paddingLeft: 20,
    color: '#232323',
    flex: 1
  },
  header: {
    paddingTop: 26,
    paddingBottom: 30,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
  },
  headerTitle: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: 700,
  },
  title: {
    fontSize: 34,
    fontWeight: 700,
    color: '#232323'
  },
  content: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    gap: 20,
    borderRadius: 12
  },
  subTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15
  },
  leftSubpart: {
    display: 'flex',
    gap: 2
  }, 
  subTitleLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  leftTile: {
    fontSize: 27,
    fontWeight: 700,
  },
  leftText: { 
    color: 'rgba(35, 35, 35, 0.5)',
    fontSize: 12,
    fontWeight: 500,
  },
  subTitleRight: {
    display: 'flex',
    gap: 5
  },
  context: {
    color: 'rgba(35, 35, 35, 0.5)',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 25
  },
  imageBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
})
