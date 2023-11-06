import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MyComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="TU_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, like markers, info windows, etc. */ }
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent);