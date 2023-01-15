import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import * as colors from '../utils/commonStyles/colors';
import * as fonts from '../utils/commonStyles/fonts';
import normalize, {
  normalizeFont,
  normalizeHeight,
  normalizeVerticalPaddingAndMargin,
  normalizeWidth,
} from '../utils/normalize';

// * Necessary to use, provides more help to make UI responsive
const {width, height} = Dimensions.get('window');

function CharacterDetailsCard({item, getEpisodeData}) {
  const getColorForStatus = status => {
    //  assigning respective color
    switch (status) {
      case 'Alive':
        return 'green';
      case 'Dead':
        return 'red';
      default:
        return 'blue'; // default! if no condition is matched
    }
  };

  // * rendering each episode
  const renderItem = ({item: episode}) => {
    return (
      <TouchableOpacity
        key={episode}
        style={{
          padding: normalize(10),
          backgroundColor: colors.primaryLight,
          margin: normalize(10),
          borderRadius: 10,
          width: normalizeWidth(90),
          alignItems: 'center',
        }}
        onPress={() =>
          // ** Modifing string & extracting episode number directly
          getEpisodeData(
            episode.replace('https://rickandmortyapi.com/api/episode/', ''),
          )
        }>
        <Text
          style={[
            styles.meta,
            {
              fontSize: normalizeFont(14),
            },
          ]}
          numberOfLines={1}>
          {/* // ** Modifing string & extracting episode number directly */}
          {episode.replace(
            'https://rickandmortyapi.com/api/episode/',
            'Episode: ',
          )}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container]}
      nestedScrollEnabled={false}>
      {/* // * Null checks to every property to avoid null errors */}

      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        {item?.image && (
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
            resizeMode="contain"
          />
        )}

        <View style={styles.bottomContainer}>
          {item?.name && <Text style={styles.name}>{item?.name}</Text>}
          {item?.status && (
            <View style={styles.textContainer}>
              <Text style={styles.label}>
                Status:
                {'  '}
              </Text>
              <Text style={styles.meta}>{item?.status}</Text>
              <View
                style={[
                  styles.status_icon,
                  {
                    backgroundColor: getColorForStatus(item.status),
                  },
                ]}
              />
            </View>
          )}
          {item?.species && (
            <View style={styles.textContainer}>
              <Text style={styles.label}>
                Species:
                {'  '}
              </Text>
              <Text style={styles.meta}>{item?.species}</Text>
            </View>
          )}
          {item?.type && (
            <View style={styles.textContainer}>
              <Text style={styles.label}>
                Type:
                {'  '}
              </Text>
              <Text style={styles.meta}>{item?.type}</Text>
            </View>
          )}
          {item?.gender && (
            <View style={styles.textContainer}>
              <Text style={styles.label}>
                Gender:
                {'  '}
              </Text>
              <Text style={styles.meta}>{item?.gender}</Text>
            </View>
          )}
          {item?.created && (
            <View style={styles.textContainer}>
              <Text style={styles.label}>
                Created:
                {'  '}
              </Text>
              <Text style={styles.meta}>
                {/* formatting date as per requirement */}
                {moment(item?.created).format('MMMM Do YYYY')}
              </Text>
            </View>
          )}

          {item?.origin && (
            <View style={styles.textContainer}>
              <Text style={styles.label}>
                Origin:
                {'  '}
              </Text>
              <Text style={styles.meta}>{item.origin?.name}</Text>
            </View>
          )}

          {item?.location && (
            <View style={styles.textContainer}>
              <Text style={styles.label}>
                Location:
                {'  '}
              </Text>
              <Text style={styles.meta}>{item.location?.name}</Text>
            </View>
          )}
        </View>
      </View>

      {item?.episode && item?.episode.length > 0 && (
        <>
          <Text
            style={[
              styles.label,
              {
                marginTop: 30,
              },
            ]}>
            Episodes
          </Text>
          <View
            style={{
              flex: 1,
            }}>
            {/* FLATLIST, to render array */}
            <FlatList
              contentContainerStyle={{
                alignItems: 'center',
              }}
              data={item?.episode}
              renderItem={renderItem}
              keyExtractor={newItem => newItem}
              decelerationRate="fast" // scroll speed
              showsVerticalScrollIndicator={false} // hiding the scroll bar
              numColumns={3}
              scrollEnabled={false} // avoiding nested scrolling
            />
          </View>
        </>
      )}
    </ScrollView>
  );
}

export default CharacterDetailsCard;

const styles = StyleSheet.create({
  // ** NORMALIZED numbers ( height/width ) are being used where ever responsive design is expected
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    paddingVertical: normalizeVerticalPaddingAndMargin(25),
  },
  image: {
    height: height / 3,
    width: normalizeWidth(width - 100),
    borderRadius: 20,
    borderWidth: 2.5,
    borderColor: colors.white,
  },
  bottomContainer: {
    flex: 1,
    marginTop: 20,
    alignSelf: 'stretch',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  name: {
    fontSize: normalizeFont(35),
    textAlign: 'center',
    color: colors.primary,
    fontFamily: fonts.ShadowsIntoLight,
  },
  label: {
    fontSize: normalizeFont(17),
    fontFamily: fonts.PoppinsBold,
    color: colors.backgroundLight,
  },
  meta: {
    fontSize: normalizeFont(16),
    color: colors.white,
    fontFamily: fonts.PoppinsBold,
    maxWidth: normalizeWidth(200),
  },
  status_icon: {
    height: normalizeHeight(12),
    width: normalizeWidth(12),
    marginLeft: 8,
    borderRadius: 50,
  },
});
