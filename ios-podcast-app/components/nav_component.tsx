import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Nav_Component() {

  return (
    <View className="flex-row justify-around items-center bg-white py-5 border-t border-gray-200">
      <Pressable >
        <Ionicons name="home" size={35} color="lightgrey" />
      </Pressable>
      <Pressable>
        <Ionicons name="search" size={35} color="lightgrey" />
      </Pressable>
      <Pressable>
        <Ionicons name="heart" size={35} color="lightgrey" />
      </Pressable>
      <Pressable>
        <Ionicons name="library" size={35} color="lightgrey" />
      </Pressable>
    </View>
  );
}
