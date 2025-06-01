import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';

const index = () => {
   useEffect(() => {
    router.replace('/authentication/login/LoginScreen'); 
  }, []);
  return null ;
}

export default index

const styles = StyleSheet.create({})