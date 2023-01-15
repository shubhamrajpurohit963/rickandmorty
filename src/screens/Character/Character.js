import React, {useState} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import CharacterDetailsCard from '../../components/CharacterDetailsCard';
import {axiosHttp} from '../../utils/network/axios';
import {BaseUrl} from '../../utils/network/constants';
import EpisodeModal from '../../components/EpisodeModal';

function Character({route, navigation}) {
  const {character} = route.params;

  const axios = axiosHttp();
  const [isLoading, setIsLoading] = useState(false);
  const [episode, setEpisode] = useState(null);

  // * API call to get episode details by ID
  const getEpisodeData = async id => {
    setIsLoading(true);
    const url = `${BaseUrl}/episode/${id}`;
    await axios
      .get(url)
      .then(({data}) => {
        setEpisode({
          ...data,
        });
        setIsLoading(false);
      })
      .catch(err => {
        Alert.alert('Error', err?.message);
        setIsLoading(false);
      });
  };

  const onModalDismiss = () => {
    setEpisode(null);
  };

  return (
    <SafeAreaView>
      {/* Passing the character item entirely & a callback to make an api call */}
      <CharacterDetailsCard item={character} getEpisodeData={getEpisodeData} />

      {/* Episode data fetched via api is being passed on the modal */}
      {episode !== null && !isLoading && (
        <EpisodeModal episode={episode} onModalDismiss={onModalDismiss} />
      )}
    </SafeAreaView>
  );
}

export default Character;
