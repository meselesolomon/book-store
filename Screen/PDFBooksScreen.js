import React, { useState, useEffect } from "react";
import { View, Picker, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

const PDFBooksScreen = () => {
  const navigation = useNavigation();
  const [selectedBook, setSelectedBook] = useState(0);
  const [bookPaths, setBookPaths] = useState([]);

  useEffect(() => {
    const fetchBookPaths = async () => {
      const booksDirectory = `${FileSystem.documentDirectory}assets/books`;
      const dirInfo = await FileSystem.readDirectoryAsync(booksDirectory);
      const paths = dirInfo.map((fileName) => `${booksDirectory}/${fileName}`);
      setBookPaths(paths);
    };
    fetchBookPaths();
  }, []);

  const handleBookPress = () => {
    navigation.navigate("PDFViewer", { pdfPath: bookPaths[selectedBook] });
  };

  const handleShareApp = async () => {
    try {
      await Sharing.shareAsync("http://mesi/book-store");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Picker
        selectedValue={selectedBook}
        onValueChange={(itemValue) => setSelectedBook(itemValue)}
        style={{ marginVertical: 16, marginHorizontal: 16 }}
      >
        {bookPaths.map((path, index) => (
          <Picker.Item key={index} label={`Book ${index + 1}`} value={index} />
        ))}
      </Picker>
      <TouchableOpacity
        style={{
          backgroundColor: "#aa18ea",
          padding: 16,
          borderRadius: 8,
          marginVertical: 8,
          marginHorizontal: 16,
        }}
        onPress={handleBookPress}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Open Book</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#aa18ea",
          padding: 16,
          borderRadius: 8,
          marginVertical: 8,
          marginHorizontal: 16,
        }}
        onPress={handleShareApp}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Share App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PDFBooksScreen;
