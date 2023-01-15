/*
Common file to place normalizing functions which converts the number
with respect to device height & width
*/

import {Dimensions, Platform, PixelRatio} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iPhone 8's scale
const wscale = SCREEN_WIDTH / 360;
const hscale = SCREEN_HEIGHT / 720;

export default function normalize(size, based = 'width') {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export function normalizeWidth(size) {
  return normalize(size, 'width');
}

export function normalizeHeight(size) {
  return normalize(size, 'height');
}

export function normalizeHorizontalPaddingAndMargin(size) {
  return normalizeWidth(size);
}

export function normalizeVerticalPaddingAndMargin(size) {
  return normalizeHeight(size);
}

export function normalizeFont(size) {
  return normalize(size);
}
