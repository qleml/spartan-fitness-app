import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SQLiteProvider, useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';
import { useFonts } from 'expo-font';
import { Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import LoginScreen from '@/screens/LoginScreen';

import { seedDbIfNeeded } from '@/db/database';

import { createStackNavigator } from '@react-navigation/stack';

import { UserProvider, useUser } from '@/context/UserContext';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useEvent } from 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function AppNavigator() {
  const { user } = useUser();

  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (user?.username && inAuthGroup) {
      router.replace("(tabs)");
    } else if (!user?.username && !inAuthGroup) {
      router.replace("(auth)");
    }
  }
  // TODO: Replace this with the method "isSignedIn" from the AuthProvider
  , [user]);

  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SQLiteProvider databaseName="test.db" onInit={seedDbIfNeeded}>
      <UserProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <AppNavigator />
        </ThemeProvider>
      </UserProvider>
    </SQLiteProvider>
  );
}
