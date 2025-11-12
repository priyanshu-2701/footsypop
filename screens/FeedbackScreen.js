import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { db, auth } from "../firebaseConfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

const Feedback = ({ navigation }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!message.trim()) {
      Alert.alert("Empty", "Please write something before submitting.");
      return;
    }

    const user = auth.currentUser;

    try {
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.exists() ? userDocSnap.data() : null;

      const feedbackRef = doc(db, "feedback", `${user.uid}_${Date.now()}`);
      await setDoc(feedbackRef, {
        userId: user.uid,
        userEmail: user.email || "",
        userName:
          userData
            ? `${userData.firstName || ""} ${userData.lastName || ""}`.trim()
            : "",
        phoneNumber: userData?.phone || "",
        feedback: message,
        createdAt: serverTimestamp(),
      });

      Alert.alert("Thank you!", "Feedback submitted successfully.");
      setMessage("");
      navigation.goBack();
    } catch (error) {
      console.log("Error submitting feedback:", error);
      Alert.alert("Error", "Failed to submit feedback.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color="#f2f862" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Feedback</Text>
        </View>

        <Text style={styles.title}>We value your thoughts</Text>
        <Text style={styles.subtitle}>
          Help us improve your experience
        </Text>

        {/* Premium Input Box */}
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Write your feedback here..."
            placeholderTextColor="#777"
            value={message}
            onChangeText={setMessage}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Ionicons name="send" size={20} color="#000" />
          <Text style={styles.btnText}>Submit Feedback</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Footsypop Events</Text>

      </View>
    </SafeAreaView>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingVertical: 15,
  },
  headerTitle: {
    color: "#f2f862",
    fontSize: 22,
    fontWeight: "700",
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#f2f862",
    marginTop: 10,
  },
  subtitle: {
    color: "#ccc",
    marginTop: 4,
    fontSize: 15,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    shadowColor: "#f2f862",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 6 },
    marginBottom: 30,
  },

  input: {
    height: 180,
    color: "#fff",
    fontSize: 16,
    padding: 10,
    textAlignVertical: "top",
  },

  submitBtn: {
    flexDirection: "row",
    backgroundColor: "#f2f862",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    shadowColor: "#f2f862",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  btnText: {
    fontSize: 17,
    fontWeight: "700",
    marginLeft: 8,
    color: "#000",
  },

  footer: {
    textAlign: "center",
    color: "#777",
    marginTop: 35,
    fontSize: 14,
  },
});
