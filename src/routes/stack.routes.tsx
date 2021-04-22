import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';

const Stack = createStackNavigator();

function AppRoutes(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Welcome}
        name="Welcome"
      />

    <Stack.Screen
        component={UserIdentification}
        name="UserIdentification"
      />

    <Stack.Screen
        component={Confirmation}
        name="Confirmation"
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