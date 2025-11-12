import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Linking 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ContactScreen({ navigation }) {

  const phone = "+91 89044 09695"; 
  const whatsapp = "+91 89044 09695";
  const email = "footsypopevents@gmail.com";
  const locationUrl = "https://maps.app.goo.gl/2Xj9QVg1BhSfy2B37?g_st=aw";

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#f2f862" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact Us</Text>
      </View>

      {/* Title */}
      <Text style={styles.mainTitle}>We’re Here to Help</Text>
      <Text style={styles.subtitle}>Reach out to us anytime</Text>

      {/* Contact Box */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.row}
          onPress={() => Linking.openURL(`tel:${phone}`)}
        >
          <Ionicons name="call-outline" size={26} color="#f2f862" />
          <Text style={styles.rowText}>Call Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}
          onPress={() => Linking.openURL(`https://wa.me/${whatsapp}`)}
        >
          <Ionicons name="logo-whatsapp" size={26} color="#f2f862" />
          <Text style={styles.rowText}>Chat on WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}
          onPress={() => Linking.openURL(`mailto:${email}`)}
        >
          <Ionicons name="mail-outline" size={26} color="#f2f862" />
          <Text style={styles.rowText}>Send Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}
          onPress={() => Linking.openURL(locationUrl)}
        >
          <Ionicons name="location-outline" size={26} color="#f2f862" />
          <Text style={styles.rowText}>View Location</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Footsypop Events  
        {"\n"}Making your moments unforgettable
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#f2f862",
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#f2f862",
    marginTop: 10,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 30,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    shadowColor: "#f2f862",
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.1)",
    gap: 18,
  },
  rowText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  footerText: {
    color: "#777",
    textAlign: "center",
    marginTop: 40,
    fontSize: 14,
    lineHeight: 20,
  },
});
