import { FlatList, View, Text, StyleSheet, Image, Pressable } from "react-native";
import react from "react";
import Rating from "../components/rating";

export default function bookList({ navigation, data }) {
    const bookDetail = () => {
        return (
            <Pressable style={styles.bookWrapper} onPress={() => navigation.navigate('BookInfo', data)}>
                {
                    data.rating != null
                        ? (
                            <>
                                <View>
                                    <Image source={data.image} style={styles.image} />
                                </View>
                                <Rating data={data.rating} />
                                <Text style={styles.title}>{data.title}</Text>
                                <Text style={styles.author}>{data.author}</Text>
                            </>
                        ) : (
                            <>
                                <View style={styles.imageBox}>
                                    <Image source={data.image} style={styles.image} />
                                </View>
                                <Text style={styles.title}>{data.title}</Text>
                                <Text style={styles.author}>{data.author}</Text>
                            </>
                        )
                }
            </Pressable>
        )
    }

    return (
        <FlatList
            data={data}
            renderItem={bookDetail}
        />
    )
}