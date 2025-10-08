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
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 10, // Margin on each side for the card itself
    width: cardWidth, // This will make cards take almost full width
    maxWidth: 350, // Max width for larger screens to keep it elegant
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    overflow: 'hidden', // Ensures image respects borderRadius
    alignSelf: 'center', // Center the card if maxWidth is hit
  },
  cardImage: {
    width: '100%',
    height: 180, // Height of the image at the top of the card
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 15,
    paddingBottom: 15,
    lineHeight: 20,
  },
});

export default ServiceCard;