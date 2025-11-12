import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EngagementScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.safeArea}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Engagement Ceremony</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>

        <Image 
          source={require("../assets/eng8.jpeg")}
          style={styles.decorImage}
        />

        <Text style={styles.sectionHeading}>Engagement & Ring Ceremony Planners</Text>

        <Text style={styles.paragraph}>
          An engagement is the beginning of a beautiful journey between two hearts, 
          and at Footsypop Events, we craft this special day with elegance, love and premium styling. 
        </Text>

        <Text style={styles.paragraph}>
          Whether you prefer modern, traditional or luxury themes, our team ensures your ring ceremony 
          becomes a celebration filled with memorable moments, beautiful décor and a warm ambiance.
        </Text>

        <Text style={styles.paragraph}>
          From stage décor to entrance setups, couple seating, floral arrangements, lighting and 
          complete coordination, we bring your dream engagement theme to life.
        </Text>

        <Image 
          source={require("../assets/eng7.jpg")}
          style={styles.decorImage}
        />

        {/* Section 2 */}
        <Text style={styles.sectionHeading}>How We Make Your Engagement Special</Text>

        <Text style={styles.paragraph}>
          Engagements are intimate celebrations where two families come together. 
          Our goal is to build a warm, romantic and beautifully decorated atmosphere 
          that highlights the love between the couple.
        </Text>

        <Image 
          source={require("../assets/eng9.jpeg")}
          style={styles.decorImage}
        />

        {/* Subsection */}
        <Text style={styles.subHeading}>Premium Stage Setup</Text>
        <Text style={styles.paragraph}>
          We design elegant, luxurious and picture-perfect stage setups with premium floral work, 
          drapes, arches, LED backdrops and customized décor to match your theme.
        </Text>

        <Image 
          source={require("../assets/eng10.jpeg")}
          style={styles.decorImage}
        />

        <Text style={styles.subHeading}>Romantic Couple Entry</Text>
        <Text style={styles.paragraph}>
          Grand couple entries such as cold pyros, rose petal showers, royal walkways 
          and thematic entry props add magic to your engagement celebration.
        </Text>

        <Image 
          source={require("../assets/eng5.jpeg")}
          style={styles.decorImage}
        />

        <Text style={styles.subHeading}>Decor & Ambience Styling</Text>
        <Text style={styles.paragraph}>
          From themed décor to fairy lights, candles, florals and luxury seating arrangements, 
          we create a romantic ambiance that beautifully frames your special moment.
        </Text>

        {/* Contact Button */}
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
    height: 220,
    borderRadius: 14,
    marginVertical: 14,
    borderWidth: 1,
    borderColor: "#f2f862",
  },

  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
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
    marginTop: 25,
    marginBottom: 25,
  },

  contactButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});
