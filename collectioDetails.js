import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const CollectioDetails = (props) => {
  return (
    <View  style={styles.shoeContianer}>
       <Image source={props.imageData}/>
       <Text style={{fontSize:40}}>{props.imageContent}</Text>
       <Text>{props.imageSubtext}</Text>
    </View>
  )
}

export default CollectioDetails

const styles = StyleSheet.create({
    shoeContianer:{
        flex:0.5,
        padding:'3%',
        margin:'1.5%',
        backgroundColor:'#fff',
        borderRadius:8
    },

})