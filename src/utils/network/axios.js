/*
  Common utility file to make api calls
*/

import axios from 'axios';
import {Alert} from 'react-native';

export const axiosHttp = () => {
  const instance = axios.create();
  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response.status === 401) {
        // All exceptions & errors can be handled before hand,
        //  i.e response reaching the component / screen
        // 401 is just an example to handle unAuthorized request error
      }
      Alert.alert('ERROR!', 'Something went wrong : ( ');
      return Promise.reject(err);
    },
  );

  return instance;
};
