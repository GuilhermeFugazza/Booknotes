import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Alert, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/Progress.Bar";
import { Loading } from "../components/Loading";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export function Book() {
  const [loading] = useState(true);

  const { navigate } = useNavigation()

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          Nome do livro
        </Text>

        <ProgressBar />
        {
          (
            <Text className="text-white mt-10 text-center">
              Você ainda não possui livros cadastrados...
              <TouchableOpacity
                className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
                activeOpacity={0.7}
                onPress={() => navigate('new')} >
                Cadastre um aqui!
              </TouchableOpacity>
            </Text>
          )
        }
      </ScrollView>
    </View>
  )
}