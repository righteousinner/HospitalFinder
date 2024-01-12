import { Marker } from 'react-native-maps';
import { Image } from 'react-native';

export default function PlaceMarker({item}) {
 return (
   <Marker 
     title={item.name} 
     coordinate={{
       latitude: item.geometry.location.lat,
       longitude: item.geometry.location.lng,
     }}
   >
     <Image
       source={require('../../../assets/location-pin.png')}
       style={{ width: 25, height: 25 }} // Adjust the size as needed
       resizeMode="contain"
     />
   </Marker>
 )
}