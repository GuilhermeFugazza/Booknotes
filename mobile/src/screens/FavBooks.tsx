import { useCallback, useState } from 'react';
import { Text, View, ScrollView, Alert, Touchable, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from '../components/Header';
import { BookButton } from '../components/BookButton';
import { OptBar } from '../components/OptBar';

export function FavBooks() {
  const [loading] = useState(true)
  const { navigate } = useNavigation()

  return (
    <View className='flex-1 bg-background pt-16'>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >

        <View className='flex-row flex-wrap px-1 justify-start'>

          <TouchableOpacity onPress={() => navigate('new')} />

          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />

        </View>
      </ScrollView>
      <OptBar />
    </View>
  )
} 