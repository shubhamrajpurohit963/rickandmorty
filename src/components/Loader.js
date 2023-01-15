import React from 'react';
import {
  ActivityIndicator, View
} from 'react-native';
import * as colors from '../utils/commonStyles/colors';

function Loader() {
  return (
    <View
      style={{
        flex: 1, // stretching the loader over entire screen
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size="large" color={colors.background} />
    </View>
  );
}

export default Loader;
