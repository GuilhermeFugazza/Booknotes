import { useCallback, useState } from 'react';
import { Text, View, ScrollView, Alert, Touchable, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { BookButton } from '../components/BookButton';

export function Home() {
  const [loading] = useState(true)
  const { navigate } = useNavigation()

  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >

        <View className='flex-row flex-wrap'>

          <TouchableOpacity onPress={() => navigate('new')} />

          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          
        </View>
      </ScrollView>

      <View className='flex-row flex-wrap'>


        
      </View>
    </View>
  )
} 