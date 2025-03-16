import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useColorScheme } from '@/hooks/useColorScheme.hooks';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/Colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    StarJedi: require('../assets/fonts/Stjldbl1.ttf'),
    DinBold: require('../assets/fonts/DINNextW1G-Bold.otf'),
    DinMedium: require('../assets/fonts/DINNextW1G-Medium.otf'),
    DinRegular: require('../assets/fonts/DINNextW1G-Regular.otf'),
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
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider
          value={colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme}
        >
          <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen
              name='character/[id]'
              options={{ headerShown: true, headerTitle: 'Detalles' }}
            />
            <Stack.Screen
              name='planet/[id]'
              options={{ headerShown: true, headerTitle: 'Detalles' }}
            />
            <Stack.Screen
              name='film/[id]'
              options={{ headerShown: true, headerTitle: 'Detalles' }}
            />
            <Stack.Screen name='+not-found' />
          </Stack>
          <StatusBar style='auto' />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
