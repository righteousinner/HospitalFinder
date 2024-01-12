import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'

export default function CategoryList({setSelectedCategory}) {
  const categoryList=[
    {
        id:1,
        name:'Hospitals',
        value:'hospital',
        icon:require('./../../../assets/hospital.png')
    },
    {
        id:2,
        name:'Police Station',
        value:'police',
        icon:require('./../../../assets/police-station.png')
    },
]
  return (
    <View style={{marginTop:15}}>
      <Text style={{
        fontSize:20,
        
      }} >Select Category</Text>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop:5}}
        renderItem={({item})=>(
          <TouchableOpacity 
          onPress={()=>setSelectedCategory(item.value)} >
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
      
    </View>
  )
}