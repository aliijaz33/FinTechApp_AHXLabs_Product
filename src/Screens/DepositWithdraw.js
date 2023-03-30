import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import CoinBox from '../Components/CoinBox';

const DepositWithdraw = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CoinBox />
      <CoinBox />
      <CoinBox />
      <CoinBox />
      <CoinBox />
    </ScrollView>
  );
};

export default DepositWithdraw;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: 10,
    backgroundColor: 'black',
  },
});
