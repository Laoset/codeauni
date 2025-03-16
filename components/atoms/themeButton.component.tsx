import React, { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react-native';
import {
  Animated,
  Appearance,
  Pressable,
  View,
  StyleSheet,
} from 'react-native';

export default function ThemeButton() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const fadeAnim = useRef(new Animated.Value(theme === 'dark' ? 1 : 0)).current;

  const changeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    Appearance.setColorScheme(newTheme);
    setTheme(newTheme);

    Animated.timing(fadeAnim, {
      toValue: newTheme === 'dark' ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
      Animated.timing(fadeAnim, {
        toValue: colorScheme === 'dark' ? 1 : 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.iconContainer}>
      <Pressable onPress={changeTheme} style={styles.iconPressable}>
        <View style={styles.iconWrapper}>
          <Animated.View style={[styles.absoluteIcon, { opacity: fadeAnim }]}>
            <Moon color='white' size={24} />
          </Animated.View>
          <Animated.View
            style={[
              styles.absoluteIcon,
              {
                opacity: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                }),
              },
            ]}
          >
            <Sun color='black' size={24} />
          </Animated.View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  iconPressable: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  iconWrapper: {
    width: 24,
    height: 24,
    position: 'relative',
  },
  absoluteIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
