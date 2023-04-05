import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native'
import styles from './Card.style';
function Card({items,goToDetail}) {
  return (
    <TouchableOpacity style={styles.container}  onPress={goToDetail}>

        <View style={styles.submit}>
          <Text style={styles.title}>{items.Title}</Text>
          <TouchableOpacity style={styles.submit_button}></TouchableOpacity>
        </View>
        <View style={styles.image_container}>

        <Image style={styles.image} source={{uri:items.Poster}} />

        </View>

        <View style={styles.inner_container}>
            <Text>{items.Ratings[0].Source}: {items.Ratings[0].Value}</Text>
            <Text>imdb: {items.imdbRating}</Text>
        </View>
        {/* <Text>{items.Ratings[1].value}</Text> */}
    </TouchableOpacity>
  )
}

export default Card