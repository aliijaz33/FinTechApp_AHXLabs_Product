import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Story = ({
  currencyName,
  currencyImage,
  currentBalance,
  currencySymbol,
  navigation,
}) => {
  return (
    <View style={styles.storyContainer}>
      <View style={styles.currencyDetailView}>
        <View>
          <Image style={styles.currencyLogo} source={currencyImage} />
        </View>
        <View style={styles.currencyPriceView}>
          <Text style={styles.currencyName}>{currencyName}</Text>
          <Text style={styles.balanceText}>
            {currentBalance} {currencySymbol}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Dashboard = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currencyApi = [
    {
      id: 1,
      currencyName: 'Pkr',
      currencyImage: require('../assets/pkr.jpg'),
      currentBalance: '100.0',
      currencySymbol: 'Rs',
    },
    {
      id: 2,
      currencyName: 'USD',
      currencyImage: require('../assets/us.jpg'),
      currentBalance: '100.0',
      currencySymbol: '$',
    },
    {
      id: 3,
      currencyName: 'INR',
      currencyImage: require('../assets/inr.jpg'),
      currentBalance: '100.0',
      currencySymbol: 'inr',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileView}>
        <Image
          style={styles.profileImage}
          source={require('../assets/profile.jpg')}
        />
        <Text style={styles.nameStyle}>Ali Ijaz</Text>
        <Text style={styles.emailStyle}>ali6511353@gmail.com</Text>
      </View>

      <Text style={styles.assetsText}>Account</Text>

      <View style={styles.storyView}>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={({nativeEvent}) => {
              const nextActiveIndex = Math.round(
                nativeEvent.contentOffset.x /
                  nativeEvent.layoutMeasurement.width,
              );
              if (nextActiveIndex !== activeIndex) {
                setActiveIndex(nextActiveIndex);
              }
            }}
            scrollEventThrottle={16}
            style={styles.storysScrollView}>
            {currencyApi.map((story, index) => {
              return (
                <Story
                  key={story.id}
                  currencyName={story.currencyName}
                  currencyImage={story.currencyImage}
                  currencySymbol={story.currencySymbol}
                  currentBalance={story.currentBalance}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('DepositWithdraw');
          }}>
          <Text style={styles.transactionButtonText}>Transactions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  profileView: {
    width: '100%',
    //height: '100%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: '6%',
    marginLeft: '3%',
  },
  nameStyle: {
    color: 'white',
    fontSize: 23,
    marginTop: '2%',
    marginLeft: '7%',
  },
  emailStyle: {
    color: 'white',
    fontSize: 13,
    marginTop: '0.5%',
    marginLeft: '2%',
  },

  storyView: {
    width: '100%',
    marginLeft: '2%',
    marginTop: '3%',
  },
  storysScrollView: {
    width: '100%',
  },
  storyContainer: {
    width: 120,
    height: 140,
    backgroundColor: 'rgba(250,250,250,0.30) ',
    marginRight: 8,
    paddingLeft: 8,
    borderRadius: 15,
    borderColor: 'rgba(250,250,250,0.70)',
    borderWidth: 1,
  },

  currencyDetailView: {
    width: '100%',
    height: '100%',
    //flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-between',
  },
  currencyLogo: {
    width: 35,
    height: 35,
    marginTop: '10%',
    borderRadius: 20,
  },
  currencyName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  currencyPriceView: {
    marginLeft: '2%',
    marginBottom: '10%',
  },
  balanceText: {
    color: 'white',
  },

  assetsText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '8%',
    marginLeft: '-70%',
  },

  buttonView: {
    width: '100%',
    alignItems: 'center',
    marginTop: '10%',
  },
  loginButton: {
    width: '75%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  transactionButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Dashboard;
