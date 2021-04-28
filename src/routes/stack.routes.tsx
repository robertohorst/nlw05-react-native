import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';

const Stack = createStackNavigator();

function AppRoutes(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />

      <Stack.Screen
        name="UserIdentification"
        component={UserIdentification}
      />

      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
      />

      <Stack.Screen
        name="PlantSelect"
        component={PlantSelect}
      />

    </Stack.Navigator>
  )
}

// const AppRoutes: React.FC = () => (
//   <stackRoutes.Navigator
//     headerMode="none"
//     screenOptions={{
//       cardStyle: {
//         backgroundColor: colors.white,
//       }
//     }}
//   >


//   </stackRoutes.Navigator>
// )

export default AppRoutes;