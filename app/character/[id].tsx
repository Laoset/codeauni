import { ErrorMessage } from '@/components/atoms/errorMessage.component';
import { Loader } from '@/components/atoms/loader.component';
import { InfoCard } from '@/components/molecules/detailInfoCard.component';
import { ThemedText } from '@/components/themedText.component';
import { useGetPeopleById } from '@/hooks/usePeople.hooks';
import { useLocalSearchParams } from 'expo-router';
import {
  Calendar,
  Ruler,
  Users,
  Weight,
  Palette,
  Earth,
} from 'lucide-react-native';
import { ScrollView, View } from 'react-native';
import { stylesDetail } from '@/styles/detailStyle.style';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

export default function CharacterDetailScreen() {
  const colors = useThemeColor();

  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: character, isLoading, error } = useGetPeopleById(id);
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!character) return null;

  return (
    <ScrollView
      style={stylesDetail.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='subtitle' style={stylesDetail.name}>
        {character.nombre}
      </ThemedText>

      <View style={stylesDetail.content}>
        <View style={stylesDetail.section}>
          <ThemedText type='subtitleColor' style={stylesDetail.sectionTitle}>
            Información Básica
          </ThemedText>
          <View style={stylesDetail.grid}>
            <InfoCard
              icon={<Users size={24} color={colors.title} />}
              label='Género'
              value={character.genero}
            />
            <InfoCard
              icon={<Calendar size={24} color={colors.title} />}
              label='Nacimiento'
              value={character.año_nacimiento}
            />
            <InfoCard
              icon={<Ruler size={24} color={colors.title} />}
              label='Altura'
              value={`${character.altura} cm`}
            />
            <InfoCard
              icon={<Weight size={24} color={colors.title} />}
              label='Peso'
              value={`${character.peso} kg`}
            />
          </View>
        </View>

        <View style={stylesDetail.section}>
          <ThemedText type='subtitleColor' style={stylesDetail.sectionTitle}>
            Características Físicas
          </ThemedText>
          <View style={stylesDetail.containerHorizontal}>
            <InfoCard
              icon={<Palette size={24} color={colors.title} />}
              label='Cabello'
              value={character.color_pelo}
              orientation='horizontal'
            />
            <InfoCard
              icon={<Palette size={24} color={colors.title} />}
              label='Piel'
              value={character.color_piel}
              orientation='horizontal'
            />
            <InfoCard
              icon={<Palette size={24} color={colors.title} />}
              label='Ojos'
              value={character.color_ojos}
              orientation='horizontal'
            />
          </View>
        </View>

        <View style={stylesDetail.section}>
          <ThemedText type='subtitleColor' style={stylesDetail.sectionTitle}>
            Origen
          </ThemedText>
          <View style={stylesDetail.containerHorizontal}>
            <InfoCard
              icon={<Earth size={24} color={colors.title} />}
              label='Planeta Natal'
              value={character.mundo_natal}
              orientation='mixed'
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
