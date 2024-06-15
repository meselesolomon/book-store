import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Pdf from "react-native-pdf";
import { Share } from "react-native-share";

const PDFViewerScreen = ({ route }) => {
  const { pdfPath } = route.params;

  const handleShare = async () => {
    try {
      await Share.share({
        url: pdfPath,
        title: "Book",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Pdf source={{ uri: `file://${pdfPath}` }} style={{ flex: 1 }} />
      <TouchableOpacity
        style={{
          backgroundColor: "#aa18ea",
          padding: 12,
          borderRadius: 8,
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
        onPress={handleShare}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Share PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PDFViewerScreen;
