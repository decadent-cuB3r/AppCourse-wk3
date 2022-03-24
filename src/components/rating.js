import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Rating = ({data}) => {
    const RatingGroup = ()=> {
        const ratingGroup = [];
        for(let i=0; i<5; i++) {
            if(i<data){
                ratingGroup.push(
                    <Image source={require('../../assets/icons/starFilled.png')} style={styles.rating} key={i}/>
                );
            }else{
                ratingGroup.push(
                    <Image source={require('../../assets/icons/starEmpty.png')} style={styles.rating} key={i}/>
                );
            }
        }
        return ratingGroup;
    }

    return (
        <View style={styles.ratingWapper}>
            <RatingGroup/>
        </View>
    );
}

export default Rating;

const styles = StyleSheet.create({
    ratingWapper: {
        marginBottom: 8,
        flexDirection: 'row',
    },
    rating: {
        width: 14,
        height: 14,
        marginRight: 4,
    }
});