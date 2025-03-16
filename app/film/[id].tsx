import { ErrorMessage } from '@/components/atoms/errorMessage.component';
import { Loader } from '@/components/atoms/loader.component';
import { InfoCard } from '@/components/molecules/detailInfoCard.component';
import { ThemedText } from '@/components/themedText.component';
import { useGetFilmsById } from '@/hooks/useFilms.hooks';
import { useLocalSearchParams, router } from 'expo-router';
import { Film, Calendar, DollarSign, NotebookPen } from 'lucide-react-native';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { stylesDetail } from '@/styles/detailStyle.style';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

export default function FilmDetailScreen() {
  const colors = useThemeColor();

  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: film, isLoading, error } = useGetFilmsById(id);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!film) return null;

  return (
    <ScrollView
      style={stylesDetail.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type='subtitle' style={stylesDetail.name}>
        {film.titulo}
      </ThemedText>

      <View style={stylesDetail.content}>
        <View style={stylesDetail.section}>
          <ThemedText type='subtitleColor' style={stylesDetail.sectionTitle}>
            Información Básica
          </ThemedText>
          <View style={stylesDetail.grid}>
            <InfoCard
              icon={<NotebookPen size={24} color={colors.title} />}
              label='Director'
              value={`${film.director}`}
            />
            <InfoCard
              icon={<DollarSign size={24} color={colors.title} />}
              label='Productor'
              value={`${film.productor}`}
            />
            <InfoCard
              icon={<Calendar size={24} color={colors.title} />}
              label='Fecha de Estreno'
              value={`${film.fecha_lanzamiento}`}
            />
            <InfoCard
              icon={<Film size={24} color={colors.title} />}
              label='Episodio'
              value={`${film.episodio_id}`}
            />
          </View>
        </View>
        <View style={stylesDetail.section}>
          <ThemedText type='subtitleColor' style={stylesDetail.sectionTitle}>
            Planetas Registrados
          </ThemedText>
          <View style={stylesDetail.containerHorizontal}>
            {film?.planetas?.length > 0 ? (
              film?.planetas?.map((planeta: any) => {
                return (
                  <TouchableOpacity
                    key={planeta.id}
                    onPress={() => {
                      router.push(`/planet/${planeta.id}` as any);
                    }}
                  >
                    <InfoCard
                      icon={<Film size={24} color={colors.title} />}
                      value={planeta.nombre}
                      orientation='horizontal'
                      label={null}
                    />
                  </TouchableOpacity>
                );
              })
            ) : (
              <ThemedText>No se encontraron planetas</ThemedText>
            )}
          </View>
        </View>

        <View style={stylesDetail.section}>
          <ThemedText type='subtitleColor' style={stylesDetail.sectionTitle}>
            Apariciones Notables
          </ThemedText>
          <View style={stylesDetail.containerHorizontal}>
            {film?.personajes?.length > 0 ? (
              film?.personajes?.map((character: any) => {
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
              <ThemedText>No se encontraron personajes</ThemedText>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
