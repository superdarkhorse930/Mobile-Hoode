import React from 'react'
import { Image, View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';

export default function UploadDocument(props) {

  return (
    <TouchableOpacity 
      onPress={props.pickDocument}
      style={styles.uploadButton} >
      <View style={styles.buttonContent}>
        <View style={styles.imageBox}>
          <Image source={require('../../assets/icons/folder-open.png')} style={{width: 22, height: 22}} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontWeight: 700}}>Upload a Document</Text>
          <Text style={{fontSize: 14, fontWeight: 500, color: "rgba(191, 191, 191, 1)"}}>Open or drop a document from your mobile</Text>
        </View>
      </View>
      {props.selectedDocument && <Text>{props.selectedDocument}</Text>}
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  uploadButton: {
    width: "100%",
    paddingVertical: 20,
    borderWidth: 1.5,
    borderColor: 'rgba(191, 191, 191, 0.6)',
    borderStyle: 'dashed',
    borderRadius: 14,
    backgroundColor: '#f3f3f3',
    alignItems: 'center'
  },
  imageBox: {
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7e7e7',
    borderRadius: 46,
  },
  buttonContent: {
    gap: 10,
    alignItems: 'center'
  }
})