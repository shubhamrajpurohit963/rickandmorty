import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

const AllTheProviders = ({children}) => {
  return (
    <PaperProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </PaperProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
