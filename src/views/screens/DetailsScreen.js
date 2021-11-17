import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
const DetailsScreen = ({navigation, route}) => {
  const headphone = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        
        <Icon name="chevron-left" size={30} onPress={navigation.goBack} style={{color:COLORS.primary}} />
        
        <Text style={{fontWeight: 'bold', fontSize: 18,paddingRight:20}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* headphone image */}

        <ImageBackground
          resizeMode="cover"
          style={style.backgroundImage}
          source={headphone.image}>
         
        </ImageBackground>

        <View style={style.detailsContainer}>
          <Text
            style={{fontSize: 20, fontWeight: 'bold', color: COLORS.primary}}>
            {headphone.name}
          </Text>
          <Text
            style={{
              marginVertical: 20,
              fontWeight: 'bold',
              fontSize: 16,
              color: COLORS.primary,
            }}>
            Description
          </Text>
          <Text style={{color: COLORS.dark, fontSize: 12, lineHeight: 20}}>
          Headphones are small speakers that can be worn in or around your ears. Traditional headphones have two ear cups attached by a band that is placed over your head. Smaller headphones, often called earbuds or earphones, are placed inside the outer part of your ear canal.
          Like speakers, headphones contain transducers that convert an audio signal. 
          </Text>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{color: COLORS.dark, fontSize: 22, fontWeight: 'bold'}}>
              {headphone.price}
            </Text>
            <View style={style.quantityContainer}>
              <View style={style.quantityBtn}>
                <Icon name="plus" size={20} />
              </View>
              <Text style={{color: COLORS.white, fontWeight: 'bold'}}>1</Text>
              <View style={style.quantityBtn}>
                <Icon name="minus" size={20} />
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 50,
                width: 50,
                elevation: 7,
                marginRight: 30,
                borderRadius: 25,
                backgroundColor: COLORS.white,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="heart-outline" size={28} color={COLORS.primary} />
            </View>
            <View style={style.addToCartBtn}>
              <Text style={{color: COLORS.white}} onPress={() => navigation.push('Cartlist')}>Add To Cart</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImage: {
    marginHorizontal: 20,
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  

  addToCartBtn: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
  },
  detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 40},
  quantityBtn: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityContainer: {
    height: 35,
    width: 100,
    backgroundColor: COLORS.primary,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default DetailsScreen;
