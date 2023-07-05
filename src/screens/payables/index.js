import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, View, Text, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import BackButton from '../../components/BackButton';
import MainButton from '../../components/MainButton';
import UploadDocument from '../../components/UploadDocument';

export default function Payables() {
  const navigation = useNavigation();
  const [selectedDocument, setSelectedDocument] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      setSelectedDocument(result.uri);
    } catch (err) {
      console.log('Error picking document', err);
    }
  };

  const gotoSubmit = () => {
    navigation.navigate('Payable History');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.banner}>
          <View style={styles.header}>
            <BackButton arrowColor="white" backColor="rgba(246, 246, 246, 0.2)" />
            <View style={styles.headerTitle}>
              <Text style={styles.headerText}>Payables</Text>
              <Ionicons name='ios-warning' size={22} />
            </View>
          </View>
          <View style={styles.payableAmount}>
            <View style={{alignItems: 'center', gap: 15}}>
              <Text style={styles.amountTitle}>Payable Amount</Text>
              <Text style={styles.amountPrice}>{"$" + 113.34}</Text>
            </View>
            <MainButton bgColor="white" fontColor="black" title="View History" />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.subTtle}>Bank Details</Text>
          <View style={styles.subBox}>
            <View style={styles.subIcon}>
              <Image source={require('../../../assets/icons/Bank.png')} style={{width: 24, height: 24}} />
            </View>
            <View>
              <Text style={{fontSize: 14, fontWeight: 500, color: 'rgba(35, 35, 35, 0.5)'}}>Bank Name</Text>
              <Text style={{fontSize: 20, fontWeight: 500}}>Golden Horizon Bank</Text>
            </View>
          </View>
          <View style={styles.subBox}>
            <View style={styles.subIcon}>
              <Image source={require('../../../assets/icons/finger-scan.png')} style={{width: 24, height: 24}} />
            </View>
            <View>
              <Text style={{fontSize: 14, fontWeight: 500, color: 'rgba(35, 35, 35, 0.5)'}}>Bank Account Number</Text>
              <Text style={{fontSize: 20, fontWeight: 500}}>52623456789323</Text>
            </View>
          </View>
          <View style={styles.uploadBox}>
            <Text style={{fontSize: 16, fontWeight: 500}}>Upload Transfer receipt</Text>
            <UploadDocument pickDocument={pickDocument} selectedDocument={selectedDocument}/>
          </View>
          <MainButton bgColor="#9EE970" fontColor="black" title="Pay Now" onPress={() => gotoSubmit()} />
        </View>
      </ScrollView> 
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    color: '#232323'
  },
  banner: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingBottom: 25
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
    color: 'white',
  },
  payableAmount: {
    backgroundColor: 'black',
    alignItems: 'center',
    gap: 35
  },
  amountTitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: 500
  },
  amountPrice: {
    fontSize: 44,
    fontWeight: 700,
    lineHeight: 50,
    color: 'white'
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 20
  },
  subTtle: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 23.87
  },
  subBox: {
    borderRadius: 12,
    paddingVertical: 17,
    paddingHorizontal: 17,
    backgroundColor: 'rgba(245, 245, 245, 1)',
    gap: 11,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  subIcon: {
    backgroundColor: 'rgba(158, 233, 112, 1)',
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  uploadBox: {
    gap: 10,
  },
})
