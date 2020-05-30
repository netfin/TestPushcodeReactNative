/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button, TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
       

          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Text style = {styles.textLogo}>Check In</Text>
            
            <View style={styles.sectionContainerZ}>
              <Text style={styles.sectionTitle}>Tên đăng nhập</Text>
              <TextInput style={{height:60}} placeholder=" Địa chỉ email">
               
              </TextInput>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Mật khẩu</Text>
              <Text style={styles.sectionDescription} placeholder={'Mật khẩu truy cập'}>
               Mật khẩu truy cập
              </Text>
            </View> 
            <View style={styles.buttonLogin}>
               <Button title="Đăng nhập " styles={styles.btnAtr}  color="#ffffff" onPress={()=>
                      {
                        alert("clicked");
                      }}

               />
            </View>
        
          </View>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  textLogoArea:{
    width:"60%",
  },
  textLogo:{
      marginTop:"44%",
    marginHorizontal:"10%",
    fontSize:32,
    color:Colors.black,
    fontWeight:'bold', 
    textAlign:"center",
    fontStyle:"normal"
  },
  buttonLogin:{
    marginTop:40,
    backgroundColor:"#0091FF",
    borderRadius:23.5,
    marginHorizontal:80,
   
  },
  btnAtr:{
     fontSize:17,
       fontWeight:"bold"
  }
  ,
   sectionContainerZ: {
    marginTop: "29%",
    paddingHorizontal: 24,
    marginHorizontal:'14%',
    borderWidth:1,
    borderRadius:4,
    borderColor:"#E0E0E0",
     height: 54,
    width:265
    ,
  },
  sectionContainer: {

    marginTop: "2.4%",
    paddingHorizontal: 24,
    marginHorizontal:'14%',
    borderWidth:1,
    borderRadius:4,
    borderColor:"#E0E0E0", 
    height: 54,
    width:265
    ,
  },
  sectionTitle: {
    marginTop:10,
    marginLeft:10,
    fontSize: 12,
    color: "#BDBDBD",


  },
  sectionDescription: {
    marginTop:3,
    marginLeft:10,
    fontSize: 16,
    color: "#BDBDBD"
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
