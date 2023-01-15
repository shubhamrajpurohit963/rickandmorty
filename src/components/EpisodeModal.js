import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import moment from 'moment';
import {
  normalizeFont,
  normalizeHorizontalPaddingAndMargin,
} from '../utils/normalize';
import * as fonts from '../utils/commonStyles/fonts';

function EpisodeModal({episode, onModalDismiss}) {
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: normalizeHorizontalPaddingAndMargin(40),
    borderRadius: 20,
  };

  return (
    <Portal>
      <Modal
        visible // keeping modal open by default, parent will be rendering is conditionally
        onDismiss={() => {
          onModalDismiss(); // function passed as callback from parent
        }}
        contentContainerStyle={containerStyle}>
        <Text style={styles.title}>Episode Details</Text>
        <Text style={styles.label}>AIR Date -{episode?.air_date}</Text>
        <Text style={styles.label}>Episode -{episode?.episode}</Text>
        <Text style={styles.label}>
          Created on - {moment(episode?.created).format('MMMM Do YYYY')}
        </Text>
      </Modal>
    </Portal>
  );
}

export default EpisodeModal;

const styles = StyleSheet.create({
  // ** NORMALIZED numbers ( height/width ) are being used where ever responsive design is expected
  title: {
    textAlign: 'center',
    fontSize: normalizeFont(18),
    fontFamily: fonts.PoppinsBlack,
    marginBottom: 10,
    color: 'black',
  },
  label: {
    fontSize: normalizeFont(14),
    fontFamily: fonts.PoppinsBold,
    color: 'black',
  },
});
