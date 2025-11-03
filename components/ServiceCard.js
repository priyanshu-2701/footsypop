import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 1; // 20 padding on each side + 20 margin between cards / 1 card per row

const ServiceCard = ({ imageSource, title, description }) => {
  return (
    <View style={styles.card}>
      {/* Service Image */}
      <Image source={imageSource} style={styles.cardImage} resizeMode="cover" />
      
      {/* Service Title */}
      <Text style={styles.cardTitle}>{title}</Text>
      
      {/* Service Description */}
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#404040',
    borderRadius:20,
    marginVertical: 10,
    marginHorizontal: 10, 
    width: cardWidth, 
    maxWidth: 350,  
    alignSelf: 'center', 
    shadowColor: '#000',       // iOS shadow color
    shadowOffset: { width: 0, height: 4 }, // iOS shadow offset
    shadowOpacity: 0.4,       // iOS shadow transparency
    shadowRadius: 6,           // iOS blur radius
    elevation: 8,
  },
  cardImage: {
    opacity: 0.8,
    width: '100%',
    height: 180, // Height of the image at the top of the card
    padding: 8,
    borderRadius: 20
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffffff',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#ffffffff',
    paddingHorizontal: 15,
    paddingBottom: 15,
    lineHeight: 20,
  },
});

export default ServiceCard;