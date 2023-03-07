import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export function BookButton() {

  const { navigate } = useNavigation()

  return (
    <TouchableOpacity
          className="w-full h-14 flex-row items-center justify-center bg-violet-700 rounded-md mt-6"
          activeOpacity={0.7}
          onPress={() => navigate('book')}
        >

          <Text className="font-semibold text-base text-white ml-2">
            Nome do livro
          </Text>
        </TouchableOpacity>

  )
}