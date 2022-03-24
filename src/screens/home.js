import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import BookList from '../components/bookList';
import newBookList from '../json/newBookList.json';
import popularBookList from '../json/popularBookList.json'

export default function Home({ navigation }) {
//    const [newBooks, setNewBooks] = useState(newBookList);
//    const [popBooks, setPopBooks] = useState(popularBookList);

    return (
        <ScrollView 
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.title}>{popularBookList.title}</Text>
            <BookList data={popularBookList.popularBooks} navigation={navigation}/>
            <Text style={[styles.title, {fontWeight: '600'}]}>{newBookList.title}</Text>
            <BookList data={newBookList.newBooks} navigation={navigation}/>
            <View style={styles.bottomSpace}></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        color: '#131313',
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 28,
        letterSpacing: 0.3,
        marginLeft: 20,
        marginVertical: 16,
    },
    bottomSpace: {
        width: '100%',
        height: 61,
    }
});