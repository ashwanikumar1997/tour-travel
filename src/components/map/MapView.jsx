import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./map.css"
  

const MapView = ({latitude,longitude,city}) => {
    console.log(latitude,longitude)
    
    
    if (!latitude && !longitude) {
        return <p>loading</p> 
    }
   return (
    <div className="map-container">
    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} className="map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup className="custom-popup">
         city {city}
        </Popup>
      </Marker>
    </MapContainer>
  </div>
   )
};

export default MapView;
