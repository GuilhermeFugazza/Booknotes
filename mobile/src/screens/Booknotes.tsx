import { useState } from "react";
import { Alert, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/Progress.Bar";
import { useNavigation } from '@react-navigation/native';

export function Booknotes() {

  const { navigate } = useNavigation()

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          "Nome do livro"
        </Text>

        <ProgressBar />

        <TouchableOpacity
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
          activeOpacity={0.7}
          onPress={() => navigate('notes')}
        >

          <Text className="font-semibold text-base text-white ml-2">
            Criar uma anotação
          </Text>
        </TouchableOpacity>

        <View className="w-full h-50 flex-row items-center justify-center bg-gray-200 px-4 border border-violet-400 rounded-md mt-6">
          <Text className="font-semibold text-base text-white ml-2 ">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          </Text>
        </View>

        <View className="w-full h-50 flex-row items-center justify-center bg-gray-200 px-4 border border-violet-400 rounded-md mt-6">
          <Text className="font-semibold text-base text-white ml-2 ">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          </Text>
        </View>

        <View className="w-full h-50 flex-row items-center justify-center bg-gray-200 px-4 border border-violet-400 rounded-md mt-6">
          <Text className="font-semibold text-base text-white ml-2 ">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          </Text>
        </View>

      </ScrollView>
    </View>
  )
}