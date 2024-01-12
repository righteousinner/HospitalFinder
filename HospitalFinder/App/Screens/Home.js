import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Header from '../Components/Home/Header'
import GoogleMapView from '../Components/Home/GoogleMapView'
import CategoryList from '../Components/Home/CategoryList'
import GlobalApi from '../Services/GlobalApi'
import PlaceList from '../Components/Home/PlaceList'
import { ScrollView } from 'react-native'
import { UserLocationContext } from '../Context/UserLocationContext'

export default function Home() {

  const [placeList,setPlaceList]=useState([]);
  const {location,setLocation}=useContext(UserLocationContext);
  const updateSearchResults = (searchResults) => {
    setPlaceList(searchResults);
  };
  useEffect(()=>{
    if(location)
    {
       GetNearBySearchPlace('hospital'); 
    }
  },[location])
  
  const GetNearBySearchPlace=(value)=>{
   
    GlobalApi.nearByPlace(location.coords.latitude,
      location.coords.longitude,value).then(resp=>{

          setPlaceList(resp.data.results);

    })
  } 
  return (
    <ScrollView style={{padding:20,backgroundColor:'#fff',flex:1}}>
        <Header/>
        <GoogleMapView placeList={placeList} />
        <CategoryList setSelectedCategory={(value)=>GetNearBySearchPlace(value)}/>
        <View>
        {placeList? <PlaceList placeList={placeList} />:null}
        </View>
    </ScrollView>
    
  )
}