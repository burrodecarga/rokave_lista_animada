import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Animated,{
  Layout,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated'

const Card = ({title, description,posterUrl}) => {
  return (
    <Animated.View
    layout={Layout.stiffness()}
      entering={FadeIn}
      exiting={FadeOut}
    style={styles.view}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Image source={{ uri:posterUrl }} style={styles.image}/>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  view:{
 borderWidth:1,
 borderRadius:28,
 padding:16,
 marginVertical:30,
 backgroundColor:'white',
 elevation:8,
 shadowColor:'#000',
 shadowRadius:3,
 shadowOffset:{height:5,width:0},
 shadowOpacity:0.1

  },
  image: {
    height:375,
    width:'100%',
    borderRadius:14,
    marginTop:20
  },
  title:{
fontSize:26,
fontWeight:'900',
color:'#383838',
marginBottom:8
  },
  description: {
    fontSize:14,
    color:'#575757'
  }
})

export default Card