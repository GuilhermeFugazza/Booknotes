import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { New } from '../screens/New';
import { Booknotes } from '../screens/Booknotes';
import { Notes } from '../screens/Notes';

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="new"
        component={New}
      />

      <Screen
        name="book"
        component={Booknotes}
      />

      <Screen
        name="notes"
        component={Notes}
      />
    </Navigator>
  )
}