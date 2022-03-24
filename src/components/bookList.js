import { FlatList, View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import BookDetail from "./bookDetail";

const bookList = ({ data, navigation }) => {
    const renderItem = ({ item }) => <BookDetail data={item} navigation={navigation} />;
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />
    )
}

export default bookList;