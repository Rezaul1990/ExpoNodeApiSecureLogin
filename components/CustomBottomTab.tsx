import { useAuthStore } from '@/store/AuthStore';
import { useRouter, useSegments } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function CustomBottomTab() {
  const router = useRouter();
  const segments = useSegments();
  const currentSegment = segments[segments.length - 1];
  const role = useAuthStore((state) => state.role);

  const allTabs = [
    { route: '/screens/dashboard/DashboardScreen', label: 'Dashboard', match: 'DashboardScreen', roles: ['admin', 'member'] },
    { route: '/screens/money/MoneyScreen', label: 'Money', match: 'MoneyScreen', roles: ['admin', 'member'] },
    { route: '/screens/setting/SettingScreen', label: 'Setting', match: 'SettingScreen', roles: ['member'] },
    { route: '/screens/profile/ProfileScreen', label: 'Profile', match: 'ProfileScreen', roles: ['admin', 'member'] },
    { route: '/screens/classlist/ClasslistScreen', label: 'ClassList', match: 'ClasslistScreen', roles: ['member'] },
    { route: '/screens/contact/ContactScreen', label: 'Contact', match: 'ContactScreen', roles: ['member'] },
    { route: '/screens/admindata/AdmindataScreen', label: 'Admindata', match: 'AdmindataScreen', roles: ['admin'] },
    { route: '/screens/approved/ApprovedScreen', label: 'Approved', match: 'ApprovedScreen', roles: ['admin'] },
  ];

  const visibleTabs = allTabs.filter((tab) => tab.roles.includes(role || ''));

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderTopWidth: 1,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 10,
      }}
    >
      {visibleTabs.map((tab) => {
        const isActive = currentSegment === tab.match;

        return (
          <TouchableOpacity key={tab.route} onPress={() => router.push(tab.route as any)}>
            <Text
              style={{
                color: isActive ? 'blue' : 'gray',
                fontWeight: isActive ? 'bold' : 'normal',
              }}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
