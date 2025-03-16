import { StyleSheet, View } from 'react-native';
import { IconButton } from './categoriesBt.component';
import { Film, Earth, Users } from 'lucide-react-native';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

export default function IconGroup() {
  const colors = useThemeColor();

  const categories = [
    {
      id: 1,
      name: 'Personajes',
      path: 'characters',
      icon: <Users color={colors.title} />,
    },
    {
      id: 2,
      name: 'Planetas',
      path: 'planets',
      icon: <Earth color={colors.title} />,
    },
    {
      id: 3,
      name: 'Peliculas',
      path: 'films',
      icon: <Film color={colors.title} />,
    },
  ];
  return (
    <View style={styles.gridContainer}>
      {categories.map((category) => (
        <IconButton
          key={category.id}
          text={category.name}
          icon={category.icon}
          path={category.path}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 8,
  },
});
