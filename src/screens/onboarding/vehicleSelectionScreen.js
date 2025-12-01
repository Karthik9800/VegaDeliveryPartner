import React, { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PrimaryButton from '../../components/common/PrimaryButton';
const VehicleSelectionScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Vehicle</Text>

      {/* Bike / Scooty */}
      <Pressable
        style={[styles.card, selected === 'bike' && styles.selectedCard]}
        onPress={() => setSelected('bike')}
      >
        <Image
          source={require('../../assets/images/Bike.png')}
          style={styles.image}
        />

        <View style={styles.textWrapper}>
          <Text
            style={[styles.text, selected === 'bike' && styles.selectedText]}
          >
            Bike / Scooty
          </Text>
        </View>

        {selected === 'bike' && (
          <Ionicons
            name="checkmark"
            size={responsiveFontSize(3.5)}
            color="#fff"
          />
        )}
      </Pressable>

      {/* EV Vehicle */}
      <Pressable
        style={[styles.card, selected === 'ev' && styles.selectedCard]}
        onPress={() => setSelected('ev')}
      >
        <Image
          source={require('../../assets/images/Ev.png')}
          style={styles.image}
        />

        <View style={styles.textWrapper}>
          <Text style={[styles.text, selected === 'ev' && styles.selectedText]}>
            Ev Vehicle
          </Text>
        </View>

        {selected === 'ev' && (
          <Ionicons
            name="checkmark"
            size={responsiveFontSize(3.5)}
            color="#fff"
          />
        )}
      </Pressable>

      {/* Show Submit Button When Selected */}
      {selected && (
        <View
          style={{
            flex: 1,
            // marginTop: responsiveHeight(4),
            justifyContent: 'flex-end',
          }}
        >
          <PrimaryButton
            title="Submit"
            onPress={() => navigation.navigate('personalInfoScreen')}
            bgColor="#00B5CC"
            textColor="#fff"
          />
        </View>
      )}
    </View>
  );
};

export default VehicleSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveWidth(5),
    backgroundColor: '#fff',
  },

  header: {
    fontSize: responsiveFontSize(3),
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: responsiveHeight(2),
  },

  card: {
    width: responsiveWidth(90),
    minHeight: responsiveHeight(18),
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveWidth(4),
    marginBottom: responsiveHeight(2.5),
    borderWidth: 1.5,
    borderColor: '#73d1df',
    borderRadius: responsiveWidth(3),
    backgroundColor: '#fff',
  },

  selectedCard: {
    backgroundColor: '#00B5CC',
    borderColor: '#00B5CC',
  },

  image: {
    width: responsiveWidth(26),
    height: responsiveHeight(14),
    resizeMode: 'contain',
  },

  textWrapper: {
    flex: 1,
    marginLeft: responsiveWidth(3),
  },

  text: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
    color: '#000',
  },

  selectedText: {
    color: '#fff',
  },
});
