import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import LoginWithPhone from '../Screens/LoginWithPhone';
import SignupWithPhone from '../Screens/SignupWithPhone';
import Dashboard from '../Screens/Dashboard';
import DepositWithdraw from '../Screens/DepositWithdraw';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginWithPhone" component={LoginWithPhone} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SignupWithPhone" component={SignupWithPhone} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="DepositWithdraw" component={DepositWithdraw} />
    </Stack.Navigator>
  );
};

export default AppStack;
