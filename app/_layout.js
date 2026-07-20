import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#1a1a1a' },
        headerTintColor: '#3b82f6',
        headerTitleStyle: { color: '#ffffff', fontWeight: '600' },
        contentStyle: { backgroundColor: '#0a0a0a' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'MeetingMind' }} />
      <Stack.Screen name="dashboard" options={{ title: 'Dashboard' }} />
    </Stack>
  );
}
