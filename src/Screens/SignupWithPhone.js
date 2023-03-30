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

const SignupWithPhone = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // handle signup logic here
    navigation.navigate('Login');
  };

  const handleGoogleSignup = () => {
    // handle google signup logic here
  };

  const handleFacebookSignup = () => {
    // handle facebook signup logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.jpeg')} />
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.titleText}>Let's sign up your account.</Text>

      <View style={styles.loginOption}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
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
          <Text style={styles.textHeadding}>Username</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Your full name here"
          placeholderTextColor="rgba(255,255,255,0.5)"
          value={username}
          onChangeText={setUsername}
        />
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
        <View style={styles.textHeaddingView}>
          <Text style={styles.textHeadding}>Confirm Password</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Re-Enter your password"
          placeholderTextColor="rgba(255,255,255,0.5)"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 20, marginBottom: 20}}>
          -or-
        </Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleSignup}>
            <Text style={styles.socialButtonText}>Sign Up with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.facebookButton}
            onPress={handleFacebookSignup}>
            <Text style={styles.socialButtonText}>Sign Up with Apple ID</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginNavText}>
          <Text style={{color: 'white', fontSize: 15, marginBottom: 20}}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text
              style={{color: 'rgba(246,190,0,1)', fontSize: 15, marginLeft: 8}}>
              Login
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
  signupButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(246,190,0,1)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  signupButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialButtonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  googleButton: {
    width: '48%',
    height: 50,
    backgroundColor: 'rgba(219, 74, 57, 1)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  facebookButton: {
    width: '48%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButtonText: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  loginNavText: {
    flexDirection: 'row',
  },
});

export default SignupWithPhone;
