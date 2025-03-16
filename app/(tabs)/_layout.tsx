import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Film, Earth, Users, Home } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.hooks';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Inicio',
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name='characters'
        options={{
          title: 'Personajes',
          tabBarIcon: ({ size, color }) => <Users size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name='planets'
        options={{
          title: 'Planetas',
          tabBarIcon: ({ size, color }) => <Earth size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name='films'
        options={{
          title: 'Películas',
          tabBarIcon: ({ size, color }) => <Film size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
