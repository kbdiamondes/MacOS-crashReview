import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Widget2 from './src/Components/SecondaryWidget';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.main}>
        <View style={styles.body1}></View>
        <View style={styles.body2}></View>  
      </View>
      <View style={styles.footer}></View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    height: hp(100)
  }, 
  header:{
    height: hp(20),
    backgroundColor: 'blue'
  }, 
  main:{
    height: hp(50), 
    display:'flex', 
    flexDirection: 'row'
  }, 
  body1:{
    width: wp(50), 
    backgroundColor: 'green'
  },
  body2:{ 
    width: wp(50),
    backgroundColor: 'yellow'
  }, 
  footer:{
    height: hp(30), 
    backgroundColor: 'grey'
  }
});


/*
  Ang container has 100%
  Header occupies 20% of the max height of container
  Footer occupies 30% of the max height of container
  main occupies 50% height of the container
  body1 & body2 occupies half of the width of main
*/
