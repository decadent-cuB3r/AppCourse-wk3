import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import bookList from '../components/bookList';
import newBookList from '../json/newBookList.json';
import popularBookList from '../json/popularBookList.json'

export default function home({navigation}) {
    const [newBooks, setNewBooks] = useState(newBookList);
    const [popBooks, setPopBooks] = useState(popularBookList);

    return (
        <ScrollView 
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.title}>Popular Books</Text>
            <bookList navigation={navigation} data={popBooks}/>
            <Text style={[styles.title, {fontWeight: '600'}]}></Text>
            <bookList navigation={navigation} data={newBooks}/>
            <View style={styles.bottomSpace}>Newest</View>
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