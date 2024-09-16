import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchContacts } from "../utility/api";
import ContactThumbnail from "../components/ContactThumbnail";
import { FlatList } from "react-native";

const keyExtractor = ({ phone }) => phone;
const Favorites = ({ navigation }) => {
  const [contacts, setContact] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchContacts()
      .then((contacts) => {
        setContact(contacts);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  });
  const renderFavoriteThumbnail = ({ item }) => {
    const { avatar } = item;
    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => navigation.navigate("Profile", { contact: item })}
      />
    );
  };
  const favorites = contacts.filter((contact) => contact.favorites);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size={"large"} />}
      {error && <Text>Error....</Text>}
      {!loading && !error && (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderFavoriteThumbnail}
        />
      )}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 1,
  },
  list: {
    alignItems: "center",
  },
});
