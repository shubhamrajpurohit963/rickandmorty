import React, {useEffect, useState} from 'react';
import {Alert, FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import CharacterCard from '../../components/CharacterCard';
import Loader from '../../components/Loader';
import {axiosHttp} from '../../utils/network/axios';
import {BaseUrl} from '../../utils/network/constants';
import * as colors from '../../utils/commonStyles/colors';

const Home = ({navigation}) => {
  const axios = axiosHttp();
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1); // default value of page ( which will be passed to the API call )
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // ** fetching all character data on component mounting & when the page is changed.
    getCharacterDetails();
  }, [page]);

  const getCharacterDetails = async () => {
    setIsLoading(true);
    const url = `${BaseUrl}/character` + `/?page=${page}`;
    await axios
      .get(url)
      .then(({data}) => {
        // destructuring & concatenating old & new character data list
        setCharacters([...characters, ...data.results]);
        setIsLoading(false);
      })
      .catch(err => {
        Alert.alert('Error', err?.message);
        setIsLoading(false);
      });
  };

  const incrementPage = () => {
    // incrementing page count, useEffect will be triggered after this again.
    setPage(page + 1);
  };

  const renderItem = ({item}) => {
    return <CharacterCard item={item} navigation={navigation} />;
  };

  const renderLoader = () => {
    return isLoading ? <Loader /> : null;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* // ! Could have use flash list instead of flatlist, provides better performance */}
      {characters.length > 0 ? (
        <FlatList
          testID="flatlist"
          data={characters} // data from api call
          renderItem={renderItem}
          keyExtractor={item => item.id}
          decelerationRate="fast" // scroll speed
          showsVerticalScrollIndicator={false} // hiding scroll bar
          onEndReached={incrementPage} // event triggered on bottom reached
          onEndReachedThreshold={0} // defining "bottom" in terms of elements left to reach bottom
          ListFooterComponent={renderLoader} // footer of the flatlist, loader in our case
          initialNumToRender={10}
        />
      ) : (
        <Text testID="noData" style={styles.noData}>
          Oops! No data available right now.
        </Text>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  // ** NORMALIZED numbers ( height/width ) are being used where ever responsive design is expected
  container: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },
  noData: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 50,
  },
});
