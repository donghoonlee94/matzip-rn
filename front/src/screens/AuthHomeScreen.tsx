import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AuthStackParamList} from '../navigations/stack/AuthStackNavigator';
import {type StackScreenProps} from '@react-navigation/stack';
import {authNavigations} from '../constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  console.log('AuthHomeScreen');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="로그인 페이지로 이동"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AuthHomeScreen;
