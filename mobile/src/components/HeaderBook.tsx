import { View, TouchableOpacity, Text } from "react-native";

import Logo from '../assets/booknoteswhite.svg';
import { BackButton } from "./BackButton";
import { BookButton } from "./BookButton";

export function HeaderBook() {

  return (
    <View className="w-full flex-row items-top justify-start px-8">
      <BackButton />
      <BookButton />
    </View>
  )
}