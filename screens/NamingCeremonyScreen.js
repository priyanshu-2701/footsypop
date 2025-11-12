import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function NamingCeremonyScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.safearea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Naming Ceremony</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1617141864164-8a29d3fdd3e2",
            }}
            style={styles.bannerImage}
          />
          <BlurView intensity={45} tint="dark" style={styles.bannerOverlay}>
            <Text style={styles.bannerHeading}>Naming Ceremony Planners</Text>
            <Text style={styles.bannerSub}>
              Celebrating your baby’s first milestone with love & elegance
            </Text>
          </BlurView>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Beautiful Beginnings with Footsypop</Text>
          <Text style={styles.sectionText}>
            At <Text style={styles.highlight}>Footsypop Events</Text>, we
            specialize in planning and organizing heartwarming naming ceremonies
            that welcome your little one into the world with joy and grace. 
            From enchanting décor to traditional rituals, we make every moment special.
          </Text>
          <Text style={styles.sectionText}>
            Whether you want a traditional gathering or a modern celebration, our team
            ensures that your baby’s naming ceremony reflects your family’s love, culture,
            and values in the most beautiful way possible.
          </Text>
          
        </View>

        {/* Services Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Our Naming Ceremony Services</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎀 Theme & Decor</Text>
            <Text style={styles.cardText}>
              Choose from dreamy pastel themes, floral setups, or traditional decor. 
              We create a warm and elegant ambience for your celebration.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>📸 Photography & Videography</Text>
            <Text style={styles.cardText}>
              Capture precious memories of your baby’s special day with professional
              photographers and cinematic video highlights.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎶 Music & Entertainment</Text>
            <Text style={styles.cardText}>
              Live music, kids' entertainment, and engaging activities to make the event
              joyful for all guests — young and old alike.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🍰 Catering & Sweets</Text>
            <Text style={styles.cardText}>
              Delight your guests with customized menus, traditional sweets, and
              refreshments — all served with love and quality.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🕯️ Ritual & Pooja Setup</Text>
            <Text style={styles.cardText}>
              We help you arrange authentic ritual materials, seating, and setups for
              traditional poojas and ceremonies, ensuring everything runs smoothly.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>💡 Lighting & Ambience</Text>
            <Text style={styles.cardText}>
              From fairy lights to stage illumination, our lighting team sets the perfect
              mood to match your ceremony’s theme.
            </Text>
          </View>
        </View>

        {/* Gradient Section */}
        <LinearGradient
          colors={["#101010", "#181818", "#111"]}
          style={styles.gradientSection}
        >
          <Text style={styles.sectionHeading}>Why Choose Footsypop?</Text>

          <View style={styles.bulletRow}>
            <Ionicons name="sparkles" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Personalized ceremony planning tailored to your culture and style.
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="heart" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Warm, loving atmosphere to celebrate the arrival of your little one.
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="people" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Dedicated planners and vendors ensuring every detail is perfect.
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="time" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Hassle-free coordination so you can cherish every moment with family.
            </Text>
          </View>
        </LinearGradient>

        {/* CTA Section */}
        <View style={styles.ctaContainer}>
          <Text style={styles.ctaText}>
            Let’s make your baby’s naming ceremony magical and memorable with Footsypop Events.
          </Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate("Contact")}
          >
            <Text style={styles.ctaButtonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 60 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderBottomColor: "#222",
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#f2f862",
  },
  bannerContainer: {
    position: "relative",
  },
  bannerImage: {
    width: width,
    height: 230,
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerHeading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#f2f862",
    textAlign: "center",
    marginBottom: 5,
  },
  bannerSub: {
    fontSize: 14,
    color: "#eee",
    textAlign: "center",
    width: "85%",
  },
  section: {
    padding: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#f2f862",
    marginBottom: 10,
  },
  sectionText: {
    color: "#ccc",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
  },
  highlight: {
    color: "#f2f862",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#111",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#222",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  cardText: {
    color: "#bbb",
    fontSize: 14,
    lineHeight: 20,
  },
  gradientSection: {
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginHorizontal: 12,
    marginVertical: 10,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
    gap: 10,
  },
  bulletText: {
    color: "#ccc",
    fontSize: 15,
    flex: 1,
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: "#f2f862",
    fontWeight: "600",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  ctaContainer: {
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 30,
  },
  ctaText: {
    color: "#eee",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 14,
  },
  ctaButton: {
    backgroundColor: "#f2f862",
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  ctaButtonText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "700",
  },
});
