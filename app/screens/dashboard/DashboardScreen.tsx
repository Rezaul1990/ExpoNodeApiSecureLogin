import { useAuthStore } from '@/store/AuthStore'; // adjust path if needed
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DashboardScreen = () => {
  const role = useAuthStore((state) => state.role);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {role === 'admin' ? 'Welcome, Admin 👑' : 'Welcome, Member 🙌'}
      </Text>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});
