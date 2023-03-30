import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import PhoneInputComponent from '../Components/PhoneInputComponent';

const LoginWithPhone = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle signup logic here
    navigation.navigate('Signup');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.jpeg')} />
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.titleText}>Login your account.</Text>

      <View style={styles.loginOption}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text
            style={{color: 'rgba(246,190,0,1)', fontSize: 15, marginLeft: 8}}>
            Email
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            marginLeft: 10,
            fontSize: 15,
          }}>
          \
        </Text>
        <Text style={{color: 'rgba(246,190,0,1)', fontSize: 15, marginLeft: 8}}>
          Phone Number
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.textHeaddingView}>
          <Text style={styles.textHeadding}>Phone Number</Text>
        </View>
        <PhoneInputComponent
          value={phoneNumber}
          onChange={text => {
            setPhoneNumber(text);
          }}
        />
        <View style={styles.textHeaddingView}>
          <Text style={styles.textHeadding}>Password</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter your password here"
          placeholderTextColor="rgba(255,255,255,0.5)"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.signupButtonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.loginNavText}>
          <Text style={{color: 'white', fontSize: 15, marginBottom: 20}}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text
              style={{color: 'rgba(246,190,0,1)', fontSize: 15, marginLeft: 8}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: '5%',
    paddingBottom: 10,
  },
  logo: {
    height: 110,
    width: 110,
    marginBottom: 10,
    borderRadius: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  titleText: {
    fontSize: 13,
    marginBottom: 20,
    color: 'white',
  },
  loginOption: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginBottom: 20,
  },
  inputContainer: {
    width: '95%',
    alignItems: 'center',
  },
  textHeaddingView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textHeadding: {
    color: '#fff',
    marginBottom: 7,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 13,
    marginBottom: 5,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(246,190,0,1)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  signupButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginNavText: {
    flexDirection: 'row',
  },
});

export default LoginWithPhone;
