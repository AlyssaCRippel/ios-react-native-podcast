import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router/build/exports';

export default function Nav_Component() {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-around items-center bg-white py-5 border-t border-gray-200">
      <Pressable onPress={() => navigation.navigate('PopularPodcasts')}>
        <Ionicons name="home" size={35} color="lightgrey" />
        
      </Pressable>
      <Pressable onPress={() => console.log('Search Pressed')}>
        <Ionicons name="search" size={35} color="lightgrey" />
      </Pressable>
      <Pressable onPress={() => console.log('Favorites Pressed')}>
        <Ionicons name="heart" size={35} color="lightgrey" />
      </Pressable>
      <Pressable onPress={() => console.log('Library Pressed')}>
        <Ionicons name="library" size={35} color="lightgrey" />
      </Pressable>
    </View>
  );
}
