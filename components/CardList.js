import { View, Text, ScrollView, SafeAreaView, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import data from '../data/data.js'
import Card from './Card.js'

const CardList = () => {
  const [movies, setMovies] = useState(data)
 
  function handAdd(){
    const randomIdx = Math.floor(Math.random()*5)
    setMovies([{ ...data[randomIdx], id: Date.now().toString() }, ...movies]);
    console.log(movies,'BD+')
  }
  function handDelete(){
    setMovies([...movies.slice(1)])
    console.log(movies,'BD-')
  }
  return (
    <SafeAreaView>
      <View style={styles.view}>
      <Button styles={styles.button} title="Agregar" onPress={handAdd}/>
      <Button styles={styles.button} title="eliminar" onPress={handDelete}/>
      </View>
      <ScrollView style={{  paddingHorizontal:18 }}>
        {movies.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view:{ flexDirection:'row', justifyContent:'space-between', alignItems: 'center', marginTop:30, marginHorizontal:20},
  button:{ 
    borderRadius:20,
    paddingHorizontal:10,
  }
})

export default CardList
