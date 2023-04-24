import React from 'react'
import { View,Image, Text,TouchableOpacity } from 'react-native'
import styles from "./StoryCard.style"
function StoryCard({items,goToDetail}) {

  return (
    //Card section
    <TouchableOpacity style={styles.container} onPress={goToDetail}>
        <Image style={styles.image} source={{uri:items.Poster}}/>
    </TouchableOpacity>
  )
}

export default StoryCard