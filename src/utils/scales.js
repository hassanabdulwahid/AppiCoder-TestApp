import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

const scaleFont = (size) => {
    const scaleFactor = width / guidelineBaseWidth;
    const newSize = size * scaleFactor;

    if (Platform.OS === 'ios') {
        return Math.round(newSize);
    } else {
        return Math.round(newSize) - 1;
    }
};

export { scale, verticalScale, moderateScale, scaleFont };