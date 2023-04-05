import React from 'react'
import { View,Text, FlatList,RefreshControl } from 'react-native'
import movies_data from "../../../movies.data.json"
import Card from '../../components/Card'
import StoryCard from '../../components/StoryCard/StoryCard'
function App({navigation}) {
  const [refresh,setRefresh]=React.useState(false)
  
  const goDetailPage=(second)=>{
    navigation.navigate('DetailPage', {second});
  }

 function onRefresh() {
  setRefresh(true)
  setTimeout(() => {
    setRefresh(false)
  }, 2000);
 }


  const renderShownMovies=({item})=><Card items={item} goToDetail={()=>goDetailPage(item)} />
  const renderShownStory=({item})=><StoryCard items={item} goToDetail={()=>goDetailPage(item)} />
  return (
    <View>
      
      <FlatList style={{backgroundColor:"black"}} data={movies_data} renderItem={renderShownMovies} ListHeaderComponent={
        <FlatList  data={movies_data} renderItem={renderShownStory}  horizontal={true} showsHorizontalScrollIndicator={false}/>
      }  refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh}/>}/>
    </View>
  )
}

export default App