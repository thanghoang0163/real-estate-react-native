import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {neutral, branchColor} from '../../styles';

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('window').height,
    backgroundColor: neutral.white,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    paddingHorizontal: 50,
  },
  bigText: {
    fontSize: 22,
    fontWeight: '600',
    color: neutral.title,
    marginVertical: 20,
  },
  smallText: {
    fontSize: 15,
    color: neutral.bodyText,
    textAlign: 'center',
    marginBottom: 20,
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    backgroundColor: branchColor.newGreen,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 17,
    fontWeight: '600',
    color: neutral.white,
  },
});

function Empty({bigText, smallText, onPress, btnText}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../assets/images/empty.png')} />
        <Text style={styles.bigText}>{bigText}</Text>
        <Text style={styles.smallText}>{smallText}</Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Empty;
