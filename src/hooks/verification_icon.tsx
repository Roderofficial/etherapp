import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import {Image, Text, View} from 'react-native';

function verification_icon(size: number): JSX.Element {
  return <IoniconsIcon name="checkmark-circle" size={size} color="#0d47a1" />;
}

export default verification_icon;
