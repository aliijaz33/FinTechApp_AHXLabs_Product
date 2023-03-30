import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CoinBox = () => {
  return (
    <View style={styles.coinBox}>
      <View style={styles.currencyBox}>
        <View style={styles.currencyDetailView}>
          <View>
            <Image
              style={styles.currencyLogo}
              source={require('../assets/pkr.jpg')}
            />
          </View>
          <View style={styles.currencyPriceView}>
            <Text style={styles.currencyName}>Pkr</Text>
            <Text>0.00 Rs</Text>
          </View>
        </View>

        <View style={styles.currencyChargeView}>
          <Text>Deposit fee</Text>
          <Text style={styles.currencyChargeValue}>0.50%</Text>
        </View>
      </View>

      <View
        style={{
          width: '90%',
          justifyContent: 'center',
          borderBottomWidth: 1,

          borderColor: 'rgba(0,0,0,0.1)',
        }}
      />

      <View style={styles.buttonBox}>
        <View style={styles.exchangeView}>
          <TouchableOpacity style={styles.buttonExchange}>
            <FontAwesome5 name="exchange-alt" size={17} color="black" />
            <Text style={styles.exchangeButtonText}>Exchange</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonDep}>
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWD}>
            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coinBox: {
    width: '92%',
    height: 130,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 2,
    marginBottom: 5,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  currencyBox: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
  },
  currencyDetailView: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyLogo: {
    width: 35,
    height: 35,
    marginLeft: 10,
    borderRadius: 20,
  },
  currencyName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  currencyChargeValue: {
    fontSize: 13,
    color: 'black',
  },
  currencyPriceView: {
    marginLeft: '8%',
  },
  currencyChargeView: {
    width: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingEnd: '2%',
  },
  buttonBox: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  exchangeView: {
    width: '50%',
  },
  buttonView: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonExchange: {
    width: '65%',
    height: 30,
    marginLeft: '5%',
    borderRadius: 3,
    backgroundColor: 'rgba(0, 0, 0,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDep: {
    width: '40%',
    height: 20,
    borderRadius: 3,
    backgroundColor: 'rgba(80, 180, 0,0.9)',
    alignItems: 'center',
  },
  buttonWD: {
    width: '45%',
    height: 20,
    borderRadius: 3,
    backgroundColor: 'rgba(235,0,20,0.85)',
    alignItems: 'center',
  },
  exchangeButtonText: {
    color: 'rgba(0, 0, 0, 1)',
    marginLeft: 6,
  },
  buttonText: {
    color: 'white',
  },
});

export default CoinBox;
