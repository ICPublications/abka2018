import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withGoogleMap((props) =>
<GoogleMap
  defaultZoom={14}
  defaultCenter={{ lat: 35.160253, lng: 129.16524500000003}}
>
  {props.isMarkerShown && <Marker position={{ lat: 35.160253, lng: 129.16524500000003 }} />}
</GoogleMap>
)


  module.exports = MyMapComponent; 