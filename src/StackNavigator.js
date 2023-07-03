import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Payables from './screens/payables';
import DisputedServicesSubmit from './screens/desputedServices/submitScreen';
import DisputedServicesReview from './screens/desputedServices/reviewScreen';
import DisputedServicesPending from './screens/desputedServices/pendingScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Payables"
					component={Payables}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Disputed Services Submit"
					component={DisputedServicesSubmit}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Disputed Services Review"
					component={DisputedServicesReview}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Disputed Services Pending"
					component={DisputedServicesPending}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
    </NavigationContainer>
  )
}
