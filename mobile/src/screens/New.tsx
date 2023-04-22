import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";

import { BackButton } from "../components/BackButton";
import { api } from "../lib/axios";


export function New() {
  const [title, setTitle] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');

  async function CreateNewBook() {
    try {
      await api.post('/book', { title, editora, autor })

      setTitle('');
      setEditora('');
      setAutor('');

      Alert.alert('Novo livro adicionado', 'Livro adicionado com sucesso!');
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possível adicionar o livro')
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Adicionar livro
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Título do seu livro
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
          placeholder="Título..."
          placeholderTextColor={colors.zinc[400]}
        />

        <Text className="mt-6 text-white font-semibold text-base">
          Autor(a) do seu livro
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
          placeholder="Nome..."
          placeholderTextColor={colors.zinc[400]}

        />

        <Text className="mt-6 text-white font-semibold text-base">
          Quantidade de paginas
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
          placeholder="Numero de páginas..."
          placeholderTextColor={colors.zinc[400]}
        />

        <TouchableOpacity
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
          activeOpacity={0.7}
          onPress={CreateNewBook}
        >
          <Feather
            name="check"
            size={20}
            color={colors.white}
          />

          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}