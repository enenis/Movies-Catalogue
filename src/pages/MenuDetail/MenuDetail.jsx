import React from 'react'
import { View,Text,Image,ScrollView } from 'react-native'
import styles from "./MenuDetail.style"
function MenuDetail({route}) {
  const{second}=route.params
  return (
    <ScrollView style={styles.container}>
    //after select, View page
        <Text style={styles.title}>{second.Title}</Text>
        <Image style={styles.image} source={{uri:second.Poster}}/>
        <Text style={styles.paragraf}><Text style={styles.text}>Description:</Text> {second.Plot}</Text>
        <Text style={styles.paragraf}><Text style={styles.text}>Released:</Text> {second.Released}</Text>
        <Text style={styles.paragraf}><Text style={styles.text}>Runtime:</Text> {second.Runtime}</Text>
        <Text style={styles.paragraf}><Text style={styles.text}>Genre:</Text> {second.Genre}</Text>
        <Text style={styles.paragraf}><Text style={styles.text}>Director:</Text> {second.Director}</Text>
        <Text style={styles.paragraf}><Text style={styles.text}>Writer:</Text> {second.Writer}</Text>
        <Text style={styles.paragraf}><Text style={styles.text}>Actors:</Text> {second.Actors}</Text>
        <Text style={styles.paragraf}><Text style={styles.text}>Language:</Text> {second.Language}</Text>
        <Text style={styles.paragraf}><Text style={styles.text}>Awards:</Text> {second.Awards}</Text>
        <View >
          {second.Ratings.map((rating,index)=>(
            <View key={index}>
              <Text style={styles.paragraf}><Text style={styles.text}>{rating.Source}:</Text> {rating.Value}</Text>
            </View>
          ))}
        </View>
    </ScrollView>
  )
}

export default MenuDetail
