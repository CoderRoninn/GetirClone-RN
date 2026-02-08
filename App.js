import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import RootNavigator from './src/navigators/RootNavigator';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import * as Linking from 'expo-linking';
import screens from './src/const/screens';

// Ignore all logs and warnings
LogBox.ignoreAllLogs();

const prefix = Linking.createURL('/');

/**
 * App Component
 * Main application component with navigation container
 */
const App = () => {
  // Deep Link Config
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        // Tab screens
        [screens.search]: {
          path: 'search',
        },
        // Nested stack screens (inside HomeNavigator)
        [screens.home]: {
          screens: {
            [screens.cart]: {
              path: 'cart',
            },
          },
        },
      }
    }
  }
  
  return (
    <Provider store={store}>
    <NavigationContainer linking={linking}>
      <RootNavigator />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
