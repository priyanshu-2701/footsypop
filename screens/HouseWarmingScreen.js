import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HouseWarmingScreen({ navigation }) {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Housewarming Ceremony</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image 
            source={require("../assets/hw3.jpeg")}
            style={styles.decorImage}
        />
        
       <Text style={styles.sectionHeading}>Housewarming Ceremony Planners</Text>
        

        <Text style={styles.paragraph}>
          Congratulations on your new home! A housewarming event is a beautiful milestone, 
          and at Footsypop Events, we understand how special this moment is for you.
        </Text>

        <Text style={styles.paragraph}>
          It's a warm celebration where you invite friends and family to bless your new beginnings. 
          Our team ensures your housewarming ceremony becomes a memorable and joy-filled experience.
        </Text>

        <Text style={styles.paragraph}>
          From entrance decor to mantapa arrangements, lighting, catering, thematic decorations 
          and complete event management, we bring your dream setup to life with elegance and perfection.
        </Text>
        <Image 
            source={require("../assets/hw6.jpeg")}
            style={styles.decorImage}
        />

        {/* Gold Section Heading */}
        <Text style={styles.sectionHeading}>How We Enhance Your Housewarming</Text>

        <Text style={styles.paragraph}>
          A housewarming marks the start of a beautiful new chapter. We take the time to understand 
          your preferences and create a warm, vibrant and personalized experience for you and your guests.
        </Text>
        <Image 
            source={require("../assets/hw2.jpeg")}
            style={styles.decorImage}
        />

        <Text style={styles.subHeading}>Tailored Planning</Text>
        <Text style={styles.paragraph}>
          We follow a customized approach designed around your style, theme and cultural preferences. 
          Our planners work closely with you to deliver an experience that truly reflects your personality.
        </Text>
        
        <Image 
            source={require("../assets/hw1.jpeg")}
            style={styles.decorImage}
        />
        <Text style={styles.subHeading}>Concept and Design</Text>
        <Text style={styles.paragraph}>
          We craft immersive and visually stunning concepts that include thematic decor, floral work, 
          elegant lighting and beautiful entrance setups to give your ceremony a premium touch.
        </Text>

        <Text style={styles.paragraph}>
          Whether you prefer a traditional, luxurious or modern theme, our designers transform your home 
          into a welcoming and aesthetically delightful celebration space.
        </Text>
        <Image 
            source={require("../assets/hw5.jpeg")}
            style={styles.decorImage}
        />
        <TouchableOpacity 
        style={styles.contactButton}
        onPress={() => navigation.navigate("Contact")}
        >
        <Text style={styles.contactButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  decorImage: {
  width: "100%",
  height: 320,
  borderRadius: 14,
  marginVertical: 14,
  borderWidth: 1,
  borderColor: "#f2f862",
},
  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#000",
  },

  backButton: {
    marginRight: 15,
  },

  headerTitle: {
    fontSize: 22,
    color: "#f2f862",
    fontWeight: "700",
  },

  content: {
    padding: 20,
  },
  paragraph: {
    color: "#eaeaea",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 14,
  },

  sectionHeading: {
    fontSize: 20,
    color: "#f2f862",
    fontWeight: "700",
    marginTop: 25,
    marginBottom: 10,
  },

  subHeading: {
    fontSize: 18,
    color: "#fff",
    marginTop: 15,
    fontWeight: "600",
    marginBottom: 6,
  },
  contactButton: {
  backgroundColor: "#f2f862",
  paddingVertical: 10,
  borderRadius: 10,
  alignSelf: "center",
  width: "50%",
  alignItems: "center",
  shadowColor: "#f2f862",
  shadowOpacity: 0.6,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 4 },
},
contactButtonText: {
  fontSize: 18,
  fontWeight: "700",
  color: "#000",
  textAlign: "center",
  letterSpacing: 0.5,
},

});
