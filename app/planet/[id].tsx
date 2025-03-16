import { ErrorMessage } from '@/components/atoms/errorMessage.component';
import { Loader } from '@/components/atoms/loader.component';
import { InfoCard } from '@/components/molecules/detailInfoCard.component';
import { ThemedText } from '@/components/themedText.component';
import { useGetPlanetById } from '@/hooks/usePlanets.hooks';
import { useLocalSearchParams, router } from 'expo-router';
import {
  Users,
  Timer,
  CircleDot,
  Ruler,
  Globe2,
  CloudSun,
  Mountain,
  Droplets,
  Film,
} from 'lucide-react-native';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { stylesDetail } from '@/styles/detailStyle.style';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

export default function PlanetDetailScreen() {
  const colors = useThemeColor();

  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: planet, isLoading, error } = useGetPlanetById(id);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!planet) return null;

  return (
    <ScrollView
      style={stylesDetail.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='subtitle' style={stylesDetail.name}>
        {planet.nombre}
      </ThemedText>

      <View style={stylesDetail.content}>
        <View style={stylesDetail.section}>
          <ThemedText type='subtitleColor' style={stylesDetail.sectionTitle}>
            Información Orbital
          </ThemedText>
          <View style={stylesDetail.grid}>
            <InfoCard
              icon={<Timer size={24} color={colors.title} />}
              label='Periodo Rotación'
              value={`${planet.periodo_rotacion} horas`}
            />
            <InfoCard
              icon={<CircleDot size={24} color={colors.title} />}
              label='Periodo Orbital'
              value={`${planet.periodo_orbital} días`}
            />
            <InfoCard
              icon={<Ruler size={24} color={colors.title} />}
              label='Diámetro'
              value={`${planet.diametro} km`}
            />
            <InfoCard
              icon={<Globe2 size={24} color={colors.title} />}
              label='Gravedad'
              value={planet.gravedad}
            />
          </View>
        </View>

        <View style={stylesDetail.section}>
          <ThemedText type='subtitleColor' style={stylesDetail.sectionTitle}>
            Características Ambientales
          </ThemedText>
          <View style={stylesDetail.containerHorizontal}>
            <InfoCard
              icon={<CloudSun size={24} color={colors.title} />}
              label='Clima'
              value={planet.clima}
              orientation='mixed'
            />
            <InfoCard
              icon={<Mountain size={24} color={colors.title} />}
              label='Terreno'
              value={planet.terreno}
              orientation='mixed'
            />
            <InfoCard
              icon={<Droplets size={24} color={colors.title} />}
              label='Agua Superficial'
              value={`${planet.superficie_agua} %`}
              orientation='mixed'
            />
            <InfoCard
              icon={<Users size={24} color={colors.title} />}
              label='Población'
              value={planet.poblacion}
              orientation='mixed'
            />
          </View>
        </View>

        <View style={stylesDetail.section}>
          <ThemedText type='subtitleColor' style={stylesDetail.sectionTitle}>
            Apariciones en Películas
          </ThemedText>
          <View style={stylesDetail.containerHorizontal}>
            {planet?.peliculas?.length > 0 ? (
              planet?.peliculas?.map((pelicula: any) => {
                return (
                  <TouchableOpacity
                    key={pelicula.id}
                    onPress={() => {
                      router.push(`/film/${pelicula.id}` as any);
                    }}
                  >
                    <InfoCard
                      icon={<Film size={24} color={colors.title} />}
                      value={pelicula.titulo}
                      orientation='horizontal'
                      label={null}
                    />
                  </TouchableOpacity>
                );
              })
            ) : (
              <ThemedText>No se encontraron peliculas</ThemedText>
            )}
          </View>
        </View>

        <View style={stylesDetail.section}>
          <ThemedText type='subtitleColor' style={stylesDetail.sectionTitle}>
            Residentes Notables
          </ThemedText>
          <View style={stylesDetail.containerHorizontal}>
            {planet?.residentes?.length > 0 ? (
              planet?.residentes?.map((character: any) => {
                return (
                  <TouchableOpacity
                    key={character.id}
                    onPress={() => {
                      router.push(`/character/${character.id}` as any);
                    }}
                  >
                    <InfoCard
                      icon={<Film size={24} color={colors.title} />}
                      value={character.nombre}
                      orientation='horizontal'
                      label={null}
                    />
                  </TouchableOpacity>
                );
              })
            ) : (
              <ThemedText>No se encontraron residentes</ThemedText>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
