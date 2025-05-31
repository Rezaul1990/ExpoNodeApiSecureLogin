import { register } from '@/services/authService';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';

export default function RegisterScreen({ navigation }: any) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    secret: '',
  });

  const handleRegister = async () => {
    try {
      await register(form);
      Alert.alert('Success', 'Registered successfully');
      router.replace('/(tabs)');
    } catch (err: any) {
      Alert.alert('Error', err.response?.data?.error || 'Failed');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Name" onChangeText={(v) => setForm({ ...form, name: v })} />
      <TextInput placeholder="Email" onChangeText={(v) => setForm({ ...form, email: v })} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={(v) => setForm({ ...form, password: v })} />
      <TextInput placeholder="Secret (for admin)" onChangeText={(v) => setForm({ ...form, secret: v })} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
