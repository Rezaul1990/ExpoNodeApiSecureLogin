import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';

export default function ScreensLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        animationDuration: 200,
        contentStyle: { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }
      }}
    >
      <Stack.Screen name="dashboard/DashboardScreen" />
      <Stack.Screen name="money/MoneyScreen" />
      <Stack.Screen name="setting/SettingScreen" />
      <Stack.Screen name="profile/ProfileScreen" />
      <Stack.Screen name="classlist/ClasslistScreen" />
      <Stack.Screen name="contact/ContactScreen" />
      
    </Stack>
  );
} 