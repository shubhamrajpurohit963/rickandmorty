import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import * as colors from '../utils/commonStyles/colors';
import * as fonts from '../utils/commonStyles/fonts';
import normalize, {
  normalizeFont,
  normalizeHeight,
  normalizeHorizontalPaddingAndMargin,
  normalizeVerticalPaddingAndMargin,
  normalizeWidth,
} from '../utils/normalize';

// * Necessary to use, provides more help to make UI responsive
const {width, height} = Dimensions.get('window');

const CharacterCard = ({item, index, navigation}) => {
  return (
    // KEY : helps RN to differentiate each item / element uniquely

    item ? (
      <View style={styles.container} key={item.id} testID={`character-card`}>
        <View style={styles.item}>
          {/* // * Null checks to every property to avoid null errors */}
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
          </View>

          <TouchableOpacity
            testID="profile-icon"
            style={{
              alignSelf: 'flex-end',
              margin: normalize(20),
              marginTop: normalizeVerticalPaddingAndMargin(40),
            }}
            onPress={() => {
              // * passing entier character object to the next screen
              navigation.push('CharacterScreen', {
                character: item,
              });
            }}>
            <Icon
              name="card-account-details-outline"
              size={normalizeFont(35)}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    ) : null
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  // ** NORMALIZED numbers ( height/width ) are being used where ever responsive design is expected
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(35),
  },
  item: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: colors.backgroundLight,
    elevation: 10,
    shadowColor: colors.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  image: {
    height: normalizeHeight(220),
    width: normalizeWidth(320),
    borderRadius: 20,
    borderWidth: 2.5,
    borderColor: colors.white,
    overflow: 'hidden',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: normalizeHorizontalPaddingAndMargin(20),
  },
  textContainer: {
    width: normalizeWidth(280),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalizeVerticalPaddingAndMargin(15),
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
    color: colors.background,
  },
  meta: {
    fontSize: normalizeFont(17),
    color: colors.white,
    fontFamily: fonts.PoppinsBold,
    width: normalizeWidth(200),
  },
});
