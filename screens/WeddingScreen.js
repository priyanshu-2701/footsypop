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

export default function WeddingScreen({ navigation }) {
  const handleOtherServices = () => {
    Linking.openURL("https://footsypop.com/services"); // Change link to your actual services page
  };

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
        <Text style={styles.headerTitle}>Weddings</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1529634897400-249a9f66c9b1",
            }}
            style={styles.bannerImage}
          />
          <BlurView intensity={45} tint="dark" style={styles.bannerOverlay}>
            <Text style={styles.bannerHeading}>Wedding Planners in Bangalore</Text>
            <Text style={styles.bannerSub}>
              Creating timeless celebrations of love & togetherness
            </Text>
          </BlurView>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Your Dream Wedding Starts Here</Text>
          <Text style={styles.sectionText}>
            At <Text style={styles.highlight}>Footsypop Events</Text>, we
            understand that your wedding day is one of the most important days of
            your life. From the venue to decor, catering to entertainment, our team
            ensures every moment feels magical and effortless.
          </Text>
          <Text style={styles.sectionText}>
            Whether you’re planning an intimate ceremony or a grand celebration,
            we bring your vision to life with creativity, elegance, and flawless
            execution.
          </Text>
          <TouchableOpacity style={styles.linkButton} onPress={handleOtherServices}>
            <Text style={styles.linkText}>Click here to see our other services</Text>
          </TouchableOpacity>
        </View>

        {/* Why Choose Us */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Why Choose a Wedding Planner?</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>💎 Experience & Expertise</Text>
            <Text style={styles.cardText}>
              With years of experience in Bangalore’s wedding scene, our planners
              bring unmatched knowledge, precision, and creativity to every event.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🤝 Vendor Network</Text>
            <Text style={styles.cardText}>
              Our strong connections with trusted vendors — florists, photographers,
              caterers, and decorators — ensure the highest quality and best deals.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>💍 Customization & Personalization</Text>
            <Text style={styles.cardText}>
              Every couple’s story is unique — we design weddings that reflect your
              personality, style, and culture, making your day truly one-of-a-kind.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>💰 Budget Management</Text>
            <Text style={styles.cardText}>
              We help you manage your budget smartly, prioritizing expenses and
              maximizing value without compromising elegance or experience.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🏰 Venue Selection</Text>
            <Text style={styles.cardText}>
              From grand halls to picturesque gardens, we find the perfect venue
              that aligns with your theme, guest count, and budget.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎨 Design & Decor</Text>
            <Text style={styles.cardText}>
              Our design experts transform venues into breathtaking spaces filled
              with elegance — from floral arrangements to lighting and ambience.
            </Text>
          </View>
        </View>

        {/* Gradient Section */}
        <LinearGradient
          colors={["#101010", "#181818", "#111"]}
          style={styles.gradientSection}
        >
          <Text style={styles.sectionHeading}>What Makes Footsypop Special</Text>

          <View style={styles.bulletRow}>
            <Ionicons name="musical-notes" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Live entertainment, music, and performances that enchant every guest.
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="cog" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Seamless on-the-day management to ensure every moment flows perfectly.
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="heart" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Personalized touches that make your celebration intimate and emotional.
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <Ionicons name="ribbon" color="#f2f862" size={20} />
            <Text style={styles.bulletText}>
              Post-wedding support, guest management, and stress-free coordination.
            </Text>
          </View>
        </LinearGradient>

        {/* CTA Section */}
        <View style={styles.ctaContainer}>
          <Text style={styles.ctaText}>
            Let us craft your perfect wedding — elegant, timeless, and unforgettable.
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
    alignSelf: "flex-start",
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
