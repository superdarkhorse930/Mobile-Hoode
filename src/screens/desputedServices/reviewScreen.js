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
  const [amount, setAmount] = useState("")
  const [comment, setComment] = useState("")
  const [disputeDocument, setDisputeDocument] = useState(null);

  const pickDisputeDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      setDisputeDocument(result.uri);
    } catch (err) {
      console.log('Error picking document', err);
    }
  };

  const handleAmountChange = (inputText) => {
    setAmount(inputText)
  }

  const handleCommentChange = (inputText) => {
    setComment(inputText)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <BackButton arrowColor="black" backColor="#F6F6F6" />
          <View style={styles.headerTitle}>
            <Text style={styles.headerText}>Dispute</Text>
            <Ionicons name='ios-warning' size={22} />
          </View>
        </View>
        <View style={{gap: 20, paddingBottom: 30}}>
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
                <Image source={require("../../../assets/imags/image1.png")} alt='image1' /> 
                <Image source={require("../../../assets/imags/image2.png")} alt='image2' /> 
                <Image source={require("../../../assets/imags/image3.png")} alt='image3' /> 
              </View>
            </ScrollView>
          </View>
          <ReviewBox amount={100} review="5.0" time={4} />
          <View style={styles.InputBox}>
            <Text style={styles.inputBoxTitle}>Actual Amount</Text>
            <TextInput
             onChangeText={handleAmountChange}
             value={amount} 
             style={styles.amountInput}
             placeholder='Enter amount'
             />
          </View>
          <View style={styles.InputBox}>
            <Text style={styles.inputBoxTitle}>Comment</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              textAlignVertical="top"
              onChangeText={handleCommentChange}
              value={comment} 
              style={styles.amountInput}
              placeholder='Describe the issue'
             />
          </View>
          <View style={styles.InputBox}>
            <Text style={styles.inputBoxTitle}>Upload reference (If needed)</Text>
            <UploadDocument pickDocument={pickDisputeDocument} selectedDocument={disputeDocument} />
          </View>
          <MainButton bgColor="#9EE970" fontColor="black" title="Submit to review" />
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
    gap: 10
  },
  InputBox: {
    gap: 10
  },
  amountInput: {
    borderWidth: 2,
    borderRadius: 14, 
    borderColor: 'rgba(191, 191, 191, 0.6)',
    paddingVertical: 13,
    paddingHorizontal: 17,
    fontSize: 16
  },
  inputBoxTitle: {
    fontWeight: 600, 
    fontSize: 16
  }
})
