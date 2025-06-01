import { login } from '@/services/authService';
import { useAuthStore } from '@/store/AuthStore';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setAuth = useAuthStore((state) => state.setAuth);

  const handleLogin = async () => {
    try {
      const { token, role, user } = await login(email, password);
      await setAuth(token, role, user);
      router.replace('/screens/dashboard/DashboardScreen');
    } catch (err: any) {
      Alert.alert('Login failed', err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} color="#1E90FF" />
      </View>

      <Text style={styles.orText}>Don't have an account?</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          onPress={() => router.push('/authentication/register/RegisterScreen')}
          color="#20B2AA"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 25,
    backgroundColor: '#f4f6fc',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginBottom: 15,
  },
  orText: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
});
