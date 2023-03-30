import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const PhoneInputComponent = ({value, onChangeText, ...rest}) => {
  return (
    <View>
      <PhoneInput
        value={value}
        defaultCode="PK"
        onChangeText={onChangeText}
        textInputProps={{
          placeholder: 'Phone Number',
          placeholderTextColor: 'rgba(255,255,255,0.5)',
          style: styles.input,
        }}
        containerStyle={styles.phoneInputContainer}
        textInputStyle={styles.phoneInputText}
        textContainerStyle={styles.textContainerStyle}
        codeTextStyle={styles.codeTextStyle}
        flagButtonStyle={styles.flagStyle}
        flagStyle={{opacity: 1}}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 13,
    marginBottom: 5,
  },
  phoneInputContainer: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    marginBottom: 5,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  input: {
    height: 50,
    fontSize: 16,
    color: 'white',
  },
  textContainerStyle: {
    backgroundColor: 'rgba(255,255,255,0)',
    borderColor: 'rgba(130, 130, 130, 1)',
    fontColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
  },
  codeTextStyle: {
    color: 'white',
  },
  flagStyle: {
    color: 'red',
  },
});

export default PhoneInputComponent;
